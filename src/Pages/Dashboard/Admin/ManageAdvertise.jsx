import React from 'react';
import userAdvertisement from '../../../Hooks/userAdvertisement';
import SectionTitle from '../../../Components/SectionTitle';

const ManageAdvertise = () => {

    const [advertise] = userAdvertisement();

    return (
        <div>
            <SectionTitle heading="Advertise Management" subHeading="Select an advertise to show in home page slider"></SectionTitle>


            <div className="overflow-x-auto my-10">
                <table className="table border">
                    {/* head */}
                    <thead className='bg-blue-600 text-white'>
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
                                <tr key={ad._id} className='hover:bg-gray-100'>
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
                                        Add medicine name
                                    </td>
                                    <td>
                                        {ad.description}
                                    </td>
                                    <td>
                                        {ad.description}
                                    </td>
                                    <th>
                                        <input type="checkbox" className="toggle" defaultChecked />
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