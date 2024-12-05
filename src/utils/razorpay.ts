import { toast } from 'react-hot-toast';
import { createOrder, verifyPayment } from '../services/api';
import { RazorpayOptions, PaymentResponse } from '../types/payment';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: 'monthly' | 'yearly';
}

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      script.remove();
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const initializePayment = async (plan: SubscriptionPlan): Promise<void> => {
  try {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      toast.error('Failed to load payment gateway. Please try again.');
      return;
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!key) {
      toast.error('Payment configuration is missing.');
      return;
    }

    // Create order on your backend
    const order = await createOrder(plan.price * 100); // Convert to smallest currency unit

    const options: RazorpayOptions = {
      key,
      amount: order.amount,
      currency: order.currency,
      name: 'VideoForge AI',
      description: `${plan.name} ${plan.interval} Subscription`,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&crop=faces&auto=format&q=80',
      order_id: order.id,
      handler: async function(response: PaymentResponse) {
        try {
          // Verify payment signature
          await verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );

          toast.success('Payment successful! Your subscription is now active.');
          
          // Redirect to dashboard or reload subscriptions
          window.location.href = '/dashboard';
        } catch (error) {
          toast.error('Payment verification failed. Please contact support.');
        }
      },
      prefill: {
        name: '', // Can be populated from user context if available
        email: '',
        contact: ''
      },
      theme: {
        color: '#3B82F6'
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on('payment.failed', function(response: any) {
      toast.error('Payment failed. Please try again.');
      console.error('Payment failed:', response.error);
    });

    razorpay.open();
  } catch (error) {
    console.error('Payment initialization failed:', error);
    toast.error('Failed to initialize payment. Please try again.');
  }
};