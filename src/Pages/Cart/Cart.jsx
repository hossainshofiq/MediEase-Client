import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle';

const Cart = () => {
    const { user } = useAuth();
    const [cart, refetch, isLoading] = useCart();
    const [cartItems, setCartItems] = useState(cart);
    const axiosSecure = useAxiosSecure();

    // Calculate total price
    const calculateTotalPrice = (items) => {
        return items.reduce(
            (total, item) => total + item.unit_price * (item.quantity || 1),
            0
        );
    };

    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cart));

    useEffect(() => {
        if (cart && !isLoading) {
            setCartItems(cart);
            setTotalPrice(calculateTotalPrice(cart)); // Update total price when cart is updated
        }
    }, [cart, isLoading]);

    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        setCartItems((prev) =>
                            prev.filter((item) => item._id !== id)
                        );
                        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                    }
                });
            }
        });
    };

    const handleClearCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This will clear all items from your cart!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, clear it!',
        }).then((result) => {
            if (result.isConfirmed) {
                cartItems.forEach((item) =>
                    axiosSecure.delete(`/carts/${item._id}`)
                        .then((res) => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                setCartItems([]);
                                Swal.fire(
                                    'Cleared!',
                                    'Your cart is now empty.',
                                    'success'
                                );
                            }
                        })
                );
            }
        });
    };

    const handleQuantityChange = (id, change) => {
        setCartItems((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (item._id === id) {
                    const newQuantity = Math.max((item.quantity || 1) + change, 1);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            // Recalculate total price after quantity change
            setTotalPrice(calculateTotalPrice(updatedCart));
            return updatedCart;
        });
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <Helmet>
                <title>MediEase | Cart</title>
            </Helmet>

            <div className='mt-20 mb-5'>
                <SectionTitle heading="Pay for buy" subHeading="Secure and Convenient Payment for Your Purchases"></SectionTitle>
            </div>

            <div className="flex justify-between items-center mb-5">
                <h3 className="text-md md:text-2xl lg:text-3xl">My Cart: ({cartItems.length})</h3>
                <h3 className="text-md md:text-2xl lg:text-3xl">Subtotal: ${totalPrice.toFixed(2)}</h3>
                {cartItems.length ? (
                    <Link to="/checkout" state={{ totalPrice }}>
                        <button className="btn btn-outline">Checkout</button>
                    </Link>
                ) : (
                    <button disabled className="btn btn-outline">
                        Checkout
                    </button>
                )}
            </div>

            <div className="overflow-x-auto border">
                <table className="table border">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Price per unit</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr className="hover:bg-gray-100 hover:text-black" key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-full h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Medicine Photo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold">{item.name}</td>
                                <td>{item.company}</td>
                                <td>${item.unit_price}</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleQuantityChange(item._id, -1)}
                                            className="btn btn-sm btn-outline btn-primary"
                                        >
                                            -
                                        </button>

                                        <input
                                            value={item.quantity || 1}
                                            className="input input-sm input-bordered text-center w-12 bg-primary text-white"
                                            type="text"
                                            readOnly
                                        />

                                        <button
                                            onClick={() => handleQuantityChange(item._id, 1)}
                                            className="btn btn-sm btn-outline btn-primary"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>${(item.unit_price * (item.quantity || 1)).toFixed(2)}</td>

                                <th>
                                    <button
                                        onClick={() => handleRemove(item._id)}
                                        className="btn btn-ghost btn-md"
                                    >
                                        <FaTrashAlt className="text-red-600 text-lg"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-5">
                <button
                    onClick={handleClearCart}
                    className="btn btn-outline"
                    disabled={cartItems.length === 0}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
