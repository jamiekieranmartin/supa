import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from 'lib/stripe/admin';

const url = `https://${process.env.HOST}/`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1JpmVmFsg9b94L91LCwpb60S',
      },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: `${url}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: url,
  });

  res.redirect(session.url);
};
