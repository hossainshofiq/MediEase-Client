import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutForm = () => {

    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');

    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [cart, refetch] = useCart();
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.unit_price, 0);


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment error message:', error);
            setError(error.message);
        } else {
            console.log('Payment success message:', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('Confirm error:');
        } else {
            console.log('Payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {

                console.log('Transaction id:', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                const payment = {
                    cartIds: cart.map(item => item._id),
                    medicineItemIds: cart.map(item => item.medicineId),
                    email: user?.email,
                    price: parseFloat(totalPrice),
                    date: new Date().toLocaleString(),
                    transactionId: paymentIntent.id,
                    status: 'pending',
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('Payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your payment is completed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // comment
                    navigate('/invoice', {
                        state: {
                            userName: user?.displayName,
                            userEmail: user?.email,
                            transactionId: paymentIntent.id,
                            cart: cart,
                            totalPrice: totalPrice.toFixed(2),
                            date: new Date().toLocaleString(),
                        }
                    });

                    // uncomment this
                    // if (isSeller) {
                    //     navigate('/')
                    // } else {
                    //     navigate('/invoice');
                    // }
                }
            }
        }
    }

    return (
        // flex justify-center my-10
        <div className=''>

            {/* <div className="card bg-base-100 border w-96 p-2">
                <div className="card-body">
                    <form className='' onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <button className='btn btn-sm btn-primary my-5' type="submit" disabled={!stripe}>
                            Pay
                        </button>

                    </form>
                </div>
            </div> */}


            <form className='' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button className='btn btn-sm btn-primary my-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p>{totalPrice.toFixed(2)}</p>

                <p className='text-red-600 text-center my-5'>{error}</p>

                {
                    transactionId && <p className='text-green-600 text-center my-5'>Your transaction ID: {transactionId} </p>
                }

            </form>
        </div>

    );
};

export default CheckoutForm;
