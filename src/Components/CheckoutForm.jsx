import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [cart, refetch] = useCart();
    const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const location = useLocation();
    const totalPrice = location.state?.totalPrice || 0;

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure
                .post("/create-payment-intent", { price: totalPrice })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            setError("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "Anonymous",
                        name: user?.displayName || "Anonymous",
                    },
                },
            }
        );

        if (confirmError) {
            setError(confirmError.message);
        } else if (paymentIntent?.status === "succeeded") {
            setTransactionId(paymentIntent.id);

            const payment = {
                cartIds: cart.map((item) => item._id),
                medicineItemIds: cart.map((item) => item.medicineId),
                email: user?.email,
                price: parseFloat(totalPrice),
                date: new Date().toLocaleString(),
                transactionId: paymentIntent.id,
                status: "pending",
            };

            const res = await axiosSecure.post("/payments", payment);
            refetch();

            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your payment is completed",
                    showConfirmButton: false,
                    timer: 1500,
                });

                navigate("/invoice", {
                    state: {
                        userName: user?.displayName,
                        userEmail: user?.email,
                        transactionId: paymentIntent.id,
                        cart: cart,
                        totalPrice: totalPrice.toFixed(2),
                        date: new Date().toLocaleString(),
                    },
                });
            }
        }
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg border">
                <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                            className="p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-center my-4">
                        <p className="text-lg font-semibold">
                            Total Price: ${totalPrice.toFixed(2)}
                        </p>
                    </div>

                    {error && <p className="text-red-600 text-center mb-4">{error}</p>}

                    {transactionId && (
                        <p className="text-green-600 text-center mb-4">
                            Transaction ID: {transactionId}
                        </p>
                    )}


                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret}
                        className="btn btn-primary w-full font-bold py-2 px-4 rounded-md transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Pay
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;

