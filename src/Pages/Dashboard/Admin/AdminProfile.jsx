import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import defaultProfile from '../../../assets/profile.jpg'

const AdminProfile = () => {
    const { user } = useAuth();
    
    return (
        <div className="max-w-lg mx-auto shadow-lg rounded-md border p-6 mt-10">
            <h2 className='text-2xl lg:text-3xl font-bold text-center mb-6'>
                <span>Hi, Welcome </span>
                {user?.displayName ? <span className='text-blue-500'>Mr. {user?.displayName}</span> : "Back"}
            </h2>
            <div className="flex flex-col items-center space-y-4">
                <img className='w-24 h-24 rounded-full border-2 border-primary' src={user?.photoURL || {defaultProfile}} alt="User Avatar" />
                <h1 className="text-xl font-bold">{user?.displayName || "No Name Provided"}</h1>
                <p className="font-medium">{user?.email || "No Email Available"}</p>
                <p className="font-medium">{user?.phoneNumber || "+8801689-819951"}</p>
                <p className="font-medium">{user?.address || "Farmgate, Dhaka, 1215"}</p>
            </div>
        </div>
    );
};

export default AdminProfile;
