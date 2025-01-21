import React, { useState } from 'react';
import useProduct from '../../../Hooks/useProduct';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import Swal from 'sweetalert2';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

const SpecificMedicine = () => {

    const [product] = useProduct();
    const { category } = useParams();
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    console.log(category);

    const filteredProducts = product.filter(item => item.category === category);
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    console.log(filteredProducts.length);

    const handleAddToCart = (item) => {
        const { image, name, company, unit_price, _id } = item;
        // console.log(item, user.email);
        if (user && user?.email) {
            // send cart item to the database
            // console.log(user.email, item);

            const cartMedicine = {
                medicineId: _id,
                email: user.email,
                name,
                image,
                company,
                unit_price
            }
            axiosSecure.post('/carts', cartMedicine)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged in?",
                text: "Please Login, if you want to add this to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    const handleSee = (item) => {
        console.log(item);
        setSelectedMedicine(item);
    }

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold mb-5'>All information of: {category} </h1>

            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Medicine Name</th>
                            <th>Generic Name</th>
                            <th>Company</th>
                            <th>Unit Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item, index) => (
                                <tr className='hover:bg-gray-200' key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt={item.category}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.generic_name}</td>
                                    <td>{item.company}</td>
                                    <td>${item.unit_price}</td>
                                    <td className='flex gap-2'>
                                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary btn-sm">Select</button>
                                        <button onClick={() => handleSee(item)} className="btn btn-primary btn-sm"><FaEye></FaEye></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No items found in this category.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Modal */}
            {selectedMedicine && (
                <div className="modal modal-open">
                    <div className="modal-box relative">
                        <button
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                            onClick={() => setSelectedMedicine(null)}
                        >
                            {/* <FaDeleteLeft className='text-2xl text-red-600'></FaDeleteLeft> */}
                            {/* <AiOutlineCloseCircle className='text-2xl text-red-600'></AiOutlineCloseCircle> */}
                            <MdOutlineCloseFullscreen className='text-2xl text-red-600'></MdOutlineCloseFullscreen>
                        </button>
                        <h2 className="text-lg font-bold">
                            {selectedMedicine.name}
                        </h2>
                        <img
                            src={selectedMedicine.image}
                            alt={selectedMedicine.name}
                            className="w-full h-40 object-cover my-4"
                        />
                        <p>
                            <strong>Category:</strong> {selectedMedicine.category}
                        </p>
                        <p>
                            <strong>Company:</strong> {selectedMedicine.company}
                        </p>
                        <p>
                            <strong>Generic Name:</strong>{' '}
                            {selectedMedicine.generic_name}
                        </p>
                        <p>
                            <strong>Price:</strong> ${selectedMedicine.unit_price}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpecificMedicine;