import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from 'lib/stripe/admin';

const return_url = `https://${process.env.HOST}/`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const customer = req.query.customer.toString();
  const { url } = await stripe.billingPortal.sessions.create({
    customer,
    return_url,
  });
  return res.redirect(url);
};

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const invoice = await stripe.invoices.retrieveUpcoming({
//     customer: '',
//   });

//   res.json(invoice);
// };

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const record = await stripe.subscriptionItems.createUsageRecord('', {
//     quantity: 1,
//     timestamp: 'now',
//     action: 'increment',
//   });

//   res.json(record);
// };
