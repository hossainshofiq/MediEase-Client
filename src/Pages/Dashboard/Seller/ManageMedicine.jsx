import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import SectionTitle from '../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import { GiMedicines } from 'react-icons/gi';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ManageMedicine = () => {

    const [Product] = useProduct();
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the medicine data to the server with image url
            const manageMedicine = {
                name: data.name,
                generic_name: data.generic_name,
                short_description: data.short_description,
                company: data.company,
                category: data.category,
                image: res.data.data.display_url,
                item_mass_unit: data.item_mass_unit,
                unit_price: parseFloat(data.unit_price),
                discount_percentage: data.discount_percentage
            }
            // post to database
            const medicineResponse = await axiosSecure.post('/medicines', manageMedicine)
            console.log(medicineResponse.data);
            if (medicineResponse.data.insertedId) {
                reset();
                // show a sweet alert
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the medicines.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                document.getElementById('my_modal_1').close()
            }
        }
        console.log('with image url:', res.data);
    }

    return (
        <div className='my-10'>
            <SectionTitle heading="Manage All Medicines" subHeading="All about added medicines"></SectionTitle>
            <div className='flex justify-end mb-5'>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-success text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Medicine</button>
                <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Medicine</h3>

                        {/* react hook form */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='flex gap-3 my-4'>
                                {/* item name */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Medicine Name*</span>
                                    </div>
                                    <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>

                                {/* item generic name */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Medicine Generic Name*</span>
                                    </div>
                                    <input {...register("generic_name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div>
                                {/* category dropdown */}
                                <label className="form-control w-full my-4">
                                    <div className="label">
                                        <span className="label-text">Medicine Category*</span>
                                    </div>

                                    <select defaultValue="Select a Category" {...register("category", { required: true })} className="select select-bordered w-full">
                                        <option disabled value="Select a Category">Select a Category</option>
                                        <option value="Tablet">Tablet</option>
                                        <option value="Capsule">Capsule</option>
                                        <option value="Syrup">Syrup</option>
                                        <option value="Injection">Injection</option>
                                        <option value="Herbal">Herbal</option>
                                    </select>
                                </label>

                                {/* company dropdown */}
                                <label className="form-control w-full my-4">
                                    <div className="label">
                                        <span className="label-text">Company Name*</span>
                                    </div>
                                    <select defaultValue="Select a Company" {...register("company", { required: true })} className="select select-bordered w-full">
                                        <option disabled value="Select a Company">Select a Company</option>
                                        <option value="PharmaCorp">PharmaCorp</option>
                                        <option value="MediHealth">MediHealth</option>
                                        <option value="BioPharma">BioPharma</option>
                                        <option value="HealTech">HealTech</option>
                                        <option value="WellnessLabs">WellnessLabs</option>
                                        <option value="Herbal Dreams">Herbal Dreams</option>
                                        <option value="NutriPlus">NutriPlus</option>
                                        <option value="SkinCare">SkinCare</option>
                                    </select>
                                </label>
                            </div>

                            <div className='flex gap-3 my-4'>
                                {/* item mass unit(mg or ml) */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Item Mass Unit (Mg or ML)*</span>
                                    </div>
                                    <input {...register("item_mass_unit", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>

                                {/* per unit price */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Unit Price*</span>
                                    </div>
                                    <input {...register("unit_price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                            </div>

                            {/* discount percentage */}
                            <label className="form-control w-full my-4">
                                <div className="label">
                                    <span className="label-text">Discount Percentage%*</span>
                                </div>
                                <input {...register("discount_percentage", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                            </label>

                            {/* short description */}
                            <label className="form-control my-4">
                                <div className="label">
                                    <span className="label-text">Short Description</span>
                                </div>
                                <textarea {...register("short_description", { required: true, minLength: 5, maxLength: 50 })} className="textarea textarea-bordered h-24" placeholder="short description about medicine"></textarea>
                            </label>

                            {/* image upload */}
                            <div className='my-4'>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Pick a Image</span>
                                    </div>
                                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </label>
                            </div>

                            <button className='btn btn-primary w-full'>Add Medicine <GiMedicines className='text-xl ml-2'></GiMedicines></button>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-secondary">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            {/* medicine table */}
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='bg-blue-500 text-white'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Generic Name</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Unit Price</th>
                            <th>Discount Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Product.map((item, index) =>
                                <tr key={item._id} className='hover:bg-gray-100'>
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
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.generic_name}
                                    </td>
                                    <td>
                                        {item.category}
                                    </td>
                                    <td>
                                        {item.company}
                                    </td>
                                    <td>
                                        ${item.unit_price}
                                    </td>
                                    <td>
                                        {item.discount_percentage}%
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMedicine;