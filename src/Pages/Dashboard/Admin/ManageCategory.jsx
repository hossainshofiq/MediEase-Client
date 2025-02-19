import React, { useEffect, useState } from 'react';
import useCategory from '../../../Hooks/useCategory';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { TbCategoryPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ManageCategory = () => {

    const [category, isLoading] = useCategory();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosSecure.get('/categories');
            return res.data;
        }
    })

    const onSubmit = async (data) => {
        // console.log(data)

        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (res.data.success) {
            const manageCategory = {
                category: data.category,
                short_description: data.short_description,
                image: res.data.data.display_url
            }

            const categoryResponse = await axiosSecure.post('/categories', manageCategory);
            // console.log(categoryResponse.data);
            if (categoryResponse.data.insertedId) {
                reset();
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.category} is added to the medicines.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                document.getElementById('my_modal_1').close()
            }
        }
        // console.log('with image url:', res.data);
    }

    // delete category
    const handleDeleteCategory = (item) => {
        // console.log(item);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/categories/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.category} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div className='my-10'>
            <SectionTitle heading="Manage All Category" subHeading="Effortlessly Add, Edit, and Delete Categories"></SectionTitle>

            <div className='flex justify-end my-5'>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Category</button>
                <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Category</h3>

                        {/* react hook form */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* category name */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Medicine Category*</span>
                                </div>
                                <input {...register("category", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </label>

                            {/* short description */}
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Short Description*</span>
                                </div>
                                <textarea {...register("short_description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Short description here"></textarea>
                            </label>

                            {/* image upload */}
                            <div className='my-4'>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Pick a Image*</span>
                                    </div>
                                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </label>
                            </div>

                            <button className='btn btn-primary w-full'>Add Category<TbCategoryPlus className='text-xl ml-2'></TbCategoryPlus></button>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-secondary">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            <div className="overflow-x-auto border">
                <table className="table">
                    {/* head */}
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category, index) =>
                                <tr key={category._id} className='hover:bg-gray-100 hover:text-black'>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={category.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{category.category}</td>
                                    <td>{category.medicine_count}</td>
                                    <th className='flex gap-2 items-center'>
                                        <Link to={`/dashboard/updateMedicine/${category._id}`}>
                                            <button className="btn btn-ghost btn-md text-green-600"><FaEdit className='text-xl'></FaEdit></button>
                                        </Link>
                                        <button onClick={() => handleDeleteCategory(category)} className="btn btn-ghost btn-md text-red-600"><FaTrashAlt className='text-xl'></FaTrashAlt></button>
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

export default ManageCategory;