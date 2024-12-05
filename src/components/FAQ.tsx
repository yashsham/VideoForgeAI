import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center hover:text-blue-400 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{item.answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until the end of your billing period."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on our Pro and Enterprise plans. No credit card required to start your trial."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 email support for all plans, with priority support and dedicated account managers for Enterprise customers."
    },
    {
      question: "Are there any long-term contracts?",
      answer: "No, all our plans are month-to-month with no long-term commitments required. You can upgrade, downgrade, or cancel at any time."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} item={faq} />
        ))}
      </div>
    </div>
  );
}