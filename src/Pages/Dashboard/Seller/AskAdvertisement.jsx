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
import useAuth from '../../../Hooks/useAuth';

const AskAdvertisement = () => {
    const [advertise, isLoading, refetch] = userAdvertisement();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = async (data) => {
        console.log(data);

        const advertisementData = {
            medicine_name: data.name,
            description: data.description,
            image: data.image,
            seller_email: user?.email
        };

        const response = await axiosSecure.post('/advertisements', advertisementData);

        if (response.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Advertisement added successfully.",
                showConfirmButton: false,
                timer: 1500,
            });
            refetch();
            document.getElementById('my_modal_1').close();
            document.getElementById('main-content').removeAttribute('inert');
        }
    };

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <SectionTitle heading="Advertisements" subHeading="You can ask for advertisements from the Admin"></SectionTitle>

            <div id="main-content" className="my-10">
                <Carousel autoPlay interval={3000} infiniteLoop showStatus={false}>
                    {advertise.map((ad) => (
                        <div key={ad._id} className="text-center">
                            <img src={ad.image} alt="Advertisement" className="rounded-lg object-cover max-h-[400px] w-full" />
                            {/* <p className="text-sm mt-3">{ad.description}</p> */}
                            <p className="text-sm mt-3">{ad.medicine_name}</p>
                        </div>
                    ))}
                </Carousel>

                <button
                    className="btn btn-accent text-white"
                    onClick={() => {
                        document.getElementById('my_modal_1').showModal();
                        document.getElementById('main-content').setAttribute('inert', '');
                        document.querySelector('#my_modal_1 textarea').focus();
                    }}> Add Advertise </button>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Advertisement</h3>
                        {/* react hook form */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='my-4'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Medicine Name*</span>
                                    </div>
                                    <input {...register("name", { required: true })} type="text" className="input input-bordered w-full" />
                                </label>
                            </div>


                            <div className='my-4'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Image URL*</span>
                                    </div>
                                    <input {...register("image", { required: true })} type="url" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className='my-4'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Description*</span>
                                    </div>
                                    <textarea {...register("description", { required: true })} className="textarea input-bordered w-full" placeholder="Write description here"></textarea>
                                </label>
                            </div>

                            <button className='btn btn-primary w-full'>Add Advertisement <GiKnightBanner className='text-xl ml-2'></GiKnightBanner></button>

                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => { document.getElementById('main-content').removeAttribute('inert') }}> Close </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AskAdvertisement;

