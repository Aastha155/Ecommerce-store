import { Router } from 'express';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = Router();

router.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
