import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB);
  }
  return stripePromise;
};
