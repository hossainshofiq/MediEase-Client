import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {

    const { user } = useAuth();

    return (
        <div>
            <h2 className='text-3xl my-10'><span>Hi, Welcome </span>
                {
                    user?.displayName ? <span className='text-blue-500'>Mr. {user?.displayName}</span> : "Back"
                }
            </h2>
        </div>
    );
};

export default UserHome;