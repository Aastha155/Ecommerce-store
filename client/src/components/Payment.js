import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your-publishable-key-here');

const Payment = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    useEffect(() => {
        const createPaymentIntent = async () => {
            const { data } = await axios.post('/api/payments/create-payment-intent', {
                amount: 1000, // Amount in cents
            });
            setClientSecret(data.clientSecret);
        };
        createPaymentIntent();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <button disabled={processing || disabled || succeeded}>
                {processing ? <div className="spinner" id="spinner"></div> : 'Pay'}
            </button>
            {error && <div>{error}</div>}
            {succeeded && <div>Payment succeeded!</div>}
        </form>
    );
};

const WrappedPayment = () => (
    <Elements stripe={stripePromise}>
        <Payment />
    </Elements>
);

export default WrappedPayment;
