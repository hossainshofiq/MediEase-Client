import React from 'react';
import userAdvertisement from '../../../Hooks/userAdvertisement';
import SectionTitle from '../../../Components/SectionTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageAdvertise = () => {

    const [advertise, isLoading, refetch] = userAdvertisement();
    const axiosSecure = useAxiosSecure();


    const handleToggle = async (ad) => {

        const switchStatusDoc = {
            status: ad.status === "pending" ? "active" : "pending"
        }


        const response = await axiosSecure.patch(
            `https://mediease-server-side.vercel.app/advertisements/${ad._id}`, switchStatusDoc
        );

        if (response.data.modifiedCount > 0) {
            Swal.fire({
                icon: 'success',
                title: `Advertisement status updated to "${switchStatusDoc.status}"`,
                showConfirmButton: false,
                timer: 1500,
            });
            refetch();
        }
    };


    return (
        <div>
            <SectionTitle heading="Advertise Management" subHeading="Select an advertise to show in home page slider"></SectionTitle>


            <div className="overflow-x-auto my-10">
                <table className="table border">
                    {/* head */}
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Medicine Name</th>
                            <th>Description</th>
                            <th>Seller Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            advertise.map((ad, index) =>
                                <tr key={ad._id} className='hover:bg-gray-100 hover:text-black'>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={ad.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {ad.medicine_name}
                                    </td>
                                    <td>
                                        {ad.description}
                                    </td>
                                    <td>
                                        {ad.seller_email}
                                    </td>
                                    <th>
                                        <input type="checkbox" className="toggle" checked={ad.status === "active" ? true : false}
                                            onChange={() => handleToggle(ad)} />
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

export default ManageAdvertise;