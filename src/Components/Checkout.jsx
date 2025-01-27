import React from 'react';
import SectionTitle from './SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { Helmet } from 'react-helmet-async';

// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Checkout = () => {
    return (
        <div>
            <Helmet>
                <title>MediEase | Checkout</title>
            </Helmet>
            
            <SectionTitle heading="Checkout" subHeading="Please pay to buy"></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;