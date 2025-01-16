import React from 'react';
import SectionTitle from './../../Components/SectionTitle';
import { FaEye } from 'react-icons/fa';
import useProduct from '../../Hooks/useProduct';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const Shop = () => {

    // const {name, image, price, _id} =item;
    const [product] = useProduct();
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = (item) => {
        const { name, image, price, _id } = item;
        // console.log(item, user.email);
        if (user && user?.email) {
            // send cart item to the database
            // console.log(user.email, item);

            const cartMedicine = {
                medicineId: _id,
                email: user.email,
                name,
                image,
                price
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
        console.log(item._id);

    }
    return (
        <div>
            <Helmet>
                <title>MediEase | Shop</title>
            </Helmet>
            <SectionTitle heading="All Medicine" subHeading="Ready to buy"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Genre</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.genre}</td>
                                    <td>${item.price}</td>
                                    <th className='flex gap-3'>
                                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary btn-xs">Select</button>
                                        <button onClick={() => handleSee(item)} className="btn btn-primary btn-xs"><FaEye></FaEye></button>
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

export default Shop;