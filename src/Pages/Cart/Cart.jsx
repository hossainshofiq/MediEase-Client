import React from 'react';
import useCart from '../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.unit_price, 0);
    const axiosSecure = useAxiosSecure();

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

    const handleClearCart = (cart) => {
        // console.log(cart);

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
                console.log(cart);
                
                axiosSecure.delete(`/carts/${user.email}`)
                .then(res => {
                    console.log(res.data);
                    if(res.data.deletedCount > 0){
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

    return (
        <div className='my-10'>
            <div className='flex justify-evenly mb-5'>
                <h3 className='text-3xl'>My Cart: ({cart.length})</h3>
                <h3 className='text-3xl'>Subtotal: ${totalPrice}</h3>
                {
                    cart.length ? 
                    <Link to="/checkout">
                        <button className='btn'>Checkout</button>
                    </Link> 
                    : 
                    <button disabled className='btn'>Checkout</button>
                }
                
                <button onClick={() => handleClearCart(cart)} className='btn'>Clear Cart</button>
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
                            <th>Total</th>
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
                                    <td className="font-semibold">
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.company}
                                    </td>
                                    <td>
                                        {item.unit_price}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <button className="btn btn-sm btn-outline btn-primary"> - </button>
                                            <input className="input input-sm input-bordered text-center w-12" type="text" value={item.quantity || 1} readOnly />
                                            <button className="btn btn-sm btn-outline btn-primary"> + </button>
                                        </div>
                                    </td>
                                    <td>
                                        {item.unit_price}
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
            <div className='flex justify-end mt-5'>
            <button onClick={() => handleClearCart(cart)} className='btn'>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;

// import React from 'react';
// import useCart from '../../Hooks/useCart';
// import { FaTrashAlt } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import useAuth from '../../Hooks/useAuth';

// const Cart = () => {
//     const { user } = useAuth(); // Get logged-in user info
//     const [cart, refetch] = useCart(); // Fetch cart data and refetch function
//     const totalPrice = cart.reduce((total, item) => total + item.unit_price * item.quantity, 0); // Calculate total price
//     const axiosSecure = useAxiosSecure(); // Axios instance with secure configuration

//     // Function to handle individual item removal
//     const handleRemove = (id) => {
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
//                         if (res.data.deletedCount > 0) {
//                             refetch(); // Refetch cart data
//                             Swal.fire("Deleted!", "Your item has been deleted.", "success");
//                         }
//                     })
//                     .catch(error => {
//                         console.error("Error deleting item:", error);
//                     });
//             }
//         });
//     };

//     // Function to clear all cart items
//     const handleClearCart = () => {
       
//         Swal.fire({
//             title: "Are you sure?",
//             text: "This will remove all items from your cart!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, clear cart!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/carts/clear`) // Backend endpoint to clear all cart items
//                     .then(res => {
//                         if (res.data.success) {
//                             refetch(); // Refetch cart data
//                             Swal.fire("Cleared!", "Your cart has been cleared.", "success");
//                         }
//                     })
//                     .catch(error => {
//                         console.error("Error clearing cart:", error);
//                     });
//             }
//         });
//     };

//     return (
//         <div className='my-10'>
//             <div className='flex justify-evenly mb-5'>
//                 <h3 className='text-3xl'>My Cart: ({cart.length})</h3>
//                 <h3 className='text-3xl'>Subtotal: ${totalPrice.toFixed(2)}</h3>
//                 <button className='btn'>Checkout</button>
//                 <button onClick={handleClearCart} className='btn btn-warning'>Clear Cart</button>
//             </div>

//             <div className="overflow-x-auto border">
//                 <table className="table">
//                     <thead className='bg-green-200'>
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
//                         {cart.map((item, index) => (
//                             <tr className='hover:bg-gray-100' key={item._id}>
//                                 <th>{index + 1}</th>
//                                 <td>
//                                     <div className="flex items-center gap-3">
//                                         <div className="avatar">
//                                             <div className="rounded-full h-12 w-12">
//                                                 <img src={item.image} alt="Medicine Photo" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="font-semibold">{item.name}</td>
//                                 <td>{item.company}</td>
//                                 <td>${item.unit_price.toFixed(2)}</td>
//                                 <td>
//                                     <div className="flex items-center gap-2">
//                                         <button className="btn btn-sm btn-outline btn-primary"> - </button>
//                                         <input className="input input-sm input-bordered text-center w-12" type="text" value={item.quantity || 1} readOnly />
//                                         <button className="btn btn-sm btn-outline btn-primary"> + </button>
//                                     </div>
//                                 </td>
//                                 <td>${(item.unit_price * item.quantity).toFixed(2)}</td>
//                                 <th>
//                                     <button onClick={() => handleRemove(item._id)} className="btn btn-ghost btn-xs">
//                                         <FaTrashAlt className='text-red-600 text-lg'></FaTrashAlt>
//                                     </button>
//                                 </th>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Cart;
