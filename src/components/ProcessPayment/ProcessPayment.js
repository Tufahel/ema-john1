import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const ProcessPayment = () => {
    const stripePromise = loadStripe('pk_test_51JIdRoIXAK959vptUEbCLpHz2bAtn2K5PWdtY8gMaXMz5ml0WdvmQY755e5SPxDLYxppJOO0T1RELCLROI5HvJm100HDTYenn7');

    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;