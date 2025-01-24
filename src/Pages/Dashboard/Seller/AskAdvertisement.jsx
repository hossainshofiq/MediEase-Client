import React from 'react';
import userAdvertisement from '../../../Hooks/userAdvertisement';
import SectionTitle from '../../../Components/SectionTitle';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from '../../Shared/Loading';
import { useForm } from 'react-hook-form';
import { GiKnightBanner } from 'react-icons/gi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AskAdvertisement = () => {

    const [advertise, refetch, isLoading] = userAdvertisement();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        console.log(data);

            const advertisementData = {
                description: data.description,
                image: data.image,
            };

            const response = await axiosSecure.post('/advertisements', advertisementData);

            if (response.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Advertise is added successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                document.getElementById('my_modal_1').close();
            }
    };


    return (
        <div>
            <SectionTitle heading="Advertisements" subHeading="You can ask for advertisements from the Admin"></SectionTitle>

            <div className="my-10">
                <Carousel autoPlay={Boolean} interval={3000} infiniteLoop={true} showStatus={false}>
                    {advertise.map((ad) => (
                        <div key={ad._id} className="text-center">
                            <img src={ad.image} alt="Advertisement" className="rounded-lg object-cover max-h-[400px] w-full" />
                            <p className="text-sm mt-3">{ad.description}</p>
                        </div>
                    ))}
                </Carousel>


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-accent text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Advertise</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Advertisement</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* description */}
                            <div className='my-4'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Description*</span>
                                    </div>
                                    <textarea {...register("description", { required: true })} className="textarea input-bordered w-full" placeholder="write description here"></textarea>
                                </label>
                            </div>

                            {/* image upload */}
                            <div className='my-4'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Image URL*</span>
                                    </div>
                                    <input {...register("image", { required: true })} type="url" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <button className='btn btn-primary w-full'>Add Advertisement <GiKnightBanner className='text-xl ml-2'></GiKnightBanner></button>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default AskAdvertisement;
