// import React from 'react';
// import useCart from '../../Hooks/useCart';
// import { FaTrashAlt } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import useAuth from '../../Hooks/useAuth';
// import { Link } from 'react-router-dom';

// const Cart = () => {

//     const { user } = useAuth();
//     const [cart, refetch] = useCart();
//     const axiosSecure = useAxiosSecure();
//     const totalPrice = cart.reduce((total, item) => total + item.unit_price, 0);

//     const handleRemove = (id) => {
//         console.log(id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 axiosSecure.delete(`/carts/${id}`)
//                     .then(res => {
//                         console.log(res.data);
//                         if (res.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your medicine has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//             }
//         });
//     }

//     const handleClearCart = (cart) => {
//         console.log(cart);
//     }

//     return (
//         <div className='my-10'>
//             <div className='flex justify-between mb-5'>
//                 <h3 className='text-3xl'>My Cart: ({cart.length})</h3>
//                 <h3 className='text-3xl'>Subtotal: ${totalPrice}</h3>
//                 {
//                     cart.length ? 
//                     <Link to="/checkout">
//                         <button className='btn'>Checkout</button>
//                     </Link> 
//                     : 
//                     <button disabled className='btn'>Checkout</button>
//                 }
//             </div>

//             <div className="overflow-x-auto border">
//                 <table className="table border">
//                     {/* head */}
//                     <thead className='bg-green-300 text-black'>
//                         <tr>
//                             <th>#</th>
//                             <th>Photo</th>
//                             <th>Name</th>
//                             <th>Company</th>
//                             <th>Price per unit</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             cart.map((item, index) =>
//                                 <tr className='hover:bg-gray-100' key={item._id}>
//                                     <th>{index + 1}</th>
//                                     <td>
//                                         <div className="flex items-center gap-3">
//                                             <div className="avatar">
//                                                 <div className="rounded-full h-12 w-12">
//                                                     <img
//                                                         src={item.image}
//                                                         alt="Medicine Photo" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="font-semibold">
//                                         {item.name}
//                                     </td>
//                                     <td>
//                                         {item.company}
//                                     </td>
//                                     <td>
//                                         {item.unit_price}
//                                     </td>
//                                     <td>
//                                         <div className="flex items-center gap-2">
//                                             <button className="btn btn-sm btn-outline btn-primary"> - </button>
//                                             <input className="input input-sm input-bordered text-center w-12" type="text" value={item.quantity || 1} readOnly />
//                                             <button className="btn btn-sm btn-outline btn-primary"> + </button>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         {item.unit_price}
//                                     </td>
//                                     <th>
//                                         <button onClick={() => handleRemove(item._id)} className="btn btn-ghost btn-md"><FaTrashAlt className='text-red-600 text-lg'></FaTrashAlt></button>
//                                     </th>
//                                 </tr>
//                             )
//                         }

//                     </tbody>
//                 </table>
//             </div>
//             <div className='flex justify-end mt-5'>
//             <button onClick={() => handleClearCart(cart)} className='btn'>Clear Cart</button>
//             </div>
//         </div>
//     );
// };

// export default Cart;



import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { user } = useAuth();
    const [cart, refetch, isLoading] = useCart();
    const [cartItems, setCartItems] = useState(cart);
    const axiosSecure = useAxiosSecure();

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.unit_price * (item.quantity || 1),
        0
    );

    useEffect(() => {
        if (cart && !isLoading) {
            setCartItems(cart)
        }
    }, [cart, isLoading])

    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then((res) => {
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
            confirmButtonText: 'Yes, clear it!'
        }).then((result) => {
            if (result.isConfirmed) {
                cartItems.forEach((item) =>
                    axiosSecure.delete(`/carts/${item._id}`).then((res) => {
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
        setCartItems((prevCart) =>
            prevCart.map((item) => {
                if (item._id === id) {
                    const newQuantity = Math.max((item.quantity || 1) + change, 1);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    return (
        <div className='my-10'>
            <div className='flex justify-between mb-5'>
                <h3 className='text-3xl'>My Cart: ({cartItems.length})</h3>
                <h3 className='text-3xl'>Subtotal: ${totalPrice.toFixed(2)}</h3>
                {cartItems.length ? (
                    <Link to='/checkout'>
                        <button className='btn'>Checkout</button>
                    </Link>
                ) : (
                    <button disabled className='btn'>
                        Checkout
                    </button>
                )}
            </div>

            <div className='overflow-x-auto border'>
                <table className='table border'>
                    <thead className='bg-green-300 text-black'>
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
                            <tr className='hover:bg-gray-100' key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className='flex items-center gap-3'>
                                        <div className='avatar'>
                                            <div className='rounded-full h-12 w-12'>
                                                <img
                                                    src={item.image}
                                                    alt='Medicine Photo'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold'>{item.name}</td>
                                <td>{item.company}</td>
                                <td>${item.unit_price}</td>
                                <td>
                                    <div className='flex items-center gap-2'>
                                        <button onClick={() => handleQuantityChange(item._id, -1)} className='btn btn-sm btn-outline btn-primary'> - </button>

                                        <input value={item.quantity || 1} className='input input-sm input-bordered text-center w-12' type='text' readOnly />

                                        <button onClick={() => handleQuantityChange(item._id, 1)} className='btn btn-sm btn-outline btn-primary'> + </button>
                                    </div>
                                </td>
                                <td>${(item.unit_price * (item.quantity || 1)).toFixed(2)}</td>

                                <th>
                                    <button onClick={() => handleRemove(item._id)} className='btn btn-ghost btn-md'>
                                        <FaTrashAlt className='text-red-600 text-lg'></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end mt-5'>
                <button onClick={handleClearCart} className='btn' disabled={cartItems.length === 0}>
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;

