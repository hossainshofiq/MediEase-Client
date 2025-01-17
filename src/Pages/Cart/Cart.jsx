import React from 'react';
import useCart from '../../Hooks/useCart';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const Cart = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleRemove = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your medicine has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleRemoveCarts = (cart) => {
        console.log(cart);
    }

    return (
        <div className='my-10'>
            <div className='flex justify-evenly mb-5'>
                <h3 className='text-3xl'>My Cart: ({cart.length})</h3>
                <h3 className='text-3xl'>Subtotal: ${totalPrice}</h3>
                <button className='btn'>Checkout</button>
                <button onClick={() => handleRemoveCarts(cart)} className='btn'>Remove All</button>
            </div>

            <div className="overflow-x-auto border">
                <table className="table">
                    {/* head */}
                    <thead className='bg-green-200'>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Price per unit</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr className='hover:bg-gray-100' key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-full h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Medicine Photo" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold">{item.name}</div>
                                    </td>
                                    <td>Purple</td>
                                    <td>
                                        <div className="font-semibold">{item.price}</div>
                                    </td>
                                    <td>
                                        <div className="font-semibold">{item.price}</div>
                                    </td>
                                    <th>
                                        <button onClick={() => handleRemove(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className='text-red-600 text-lg'></FaTrashAlt></button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;