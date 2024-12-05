import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { initializePayment } from '../utils/razorpay';
import type { SubscriptionPlan } from '../utils/razorpay';

interface PaymentButtonProps {
  plan: SubscriptionPlan;
  className?: string;
}

export default function PaymentButton({ plan, className = '' }: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      await initializePayment(plan);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className={`relative ${className}`}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <span>Subscribe Now</span>
      )}
    </button>
  );
}