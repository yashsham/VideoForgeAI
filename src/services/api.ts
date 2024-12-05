import { OrderResponse } from '../types/payment';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function createOrder(amount: number): Promise<OrderResponse> {
  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return response.json();
  } catch (error) {
    console.error('Order creation failed:', error);
    throw error;
  }
}

export async function verifyPayment(paymentId: string, orderId: string, signature: string) {
  try {
    const response = await fetch(`${API_URL}/api/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_payment_id: paymentId,
        razorpay_order_id: orderId,
        razorpay_signature: signature,
      }),
    });

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    return response.json();
  } catch (error) {
    console.error('Payment verification failed:', error);
    throw error;
  }
}