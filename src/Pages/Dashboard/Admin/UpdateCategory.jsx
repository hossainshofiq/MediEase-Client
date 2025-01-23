import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCategory from '../../../Hooks/useCategory';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TbCategoryFilled, TbCategoryPlus } from 'react-icons/tb';
import { MdOutlineSettingsInputComponent } from 'react-icons/md';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateCategory = () => {

    const { _id, category, image } = useLoaderData();
    console.log(category, image);

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)

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
                image: res.data.data.display_url
            }

            const categoryResponse = await axiosSecure.patch(`/categories/${_id}`, manageCategory);
            console.log(categoryResponse.data);
            if (categoryResponse.data.modifiedCount > 0) {
                // reset();
                // show a sweet alert
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.category} is updated to the categories.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url:', res.data);
    }

    // const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();
    // const specificCategory = useCategory();

    // const { data: category = [], refetch } = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/categories/${category._id}`);
    //         return res.data;
    //     }
    // })

    return (
        <div>
            <SectionTitle heading="Update a Medicine" subHeading="Refresh Info"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className='border p-5'>
                {/* category name */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Medicine Category*</span>
                    </div>
                    <input {...register("category", { required: true })} defaultValue={category} type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>

                {/* image upload */}
                <div className='my-4'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Pick a Image</span>
                        </div>
                        <div className='flex justify-between'>
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                            <img className='w-16 rounded-md' src={image} alt="" />
                        </div>
                    </label>
                </div>

                <button className='btn btn-primary w-full'>Update Category <MdOutlineSettingsInputComponent className='text-xl ml-2'></MdOutlineSettingsInputComponent></button>
            </form>
        </div>
    );
};

export default UpdateCategory;