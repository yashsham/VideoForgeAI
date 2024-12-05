import { toast } from 'react-hot-toast';

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const makePayment = async (amount: number) => {
  try {
    const res = await initializeRazorpay();

    if (!res) {
      toast.error('Razorpay SDK failed to load. Please try again.');
      return;
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    
    if (!key) {
      toast.error('Payment configuration is missing. Please try again later.');
      return;
    }

    const options = {
      key,
      amount: amount * 100,
      currency: 'INR',
      name: 'VideoForge AI',
      description: 'Donation for Innovation',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&crop=faces&auto=format&q=80',
      handler: function (response: any) {
        if (response.razorpay_payment_id) {
          toast.success('Thank you for your donation!');
          // Here you would typically call your backend to verify the payment
        }
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#3B82F6'
      },
      modal: {
        ondismiss: function() {
          toast.error('Payment cancelled');
        }
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error('Payment error:', error);
    toast.error('Something went wrong. Please try again.');
  }
};