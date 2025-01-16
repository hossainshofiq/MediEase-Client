import React from 'react';

const Loading = () => {
    return (
        <div className='my-96 flex justify-center items-center'>
            {/* <progress className="progress w-56"></progress> */}
            <span className="loading loading-bars loading-lg"></span>
            {/* <span className="loading loading-ring loading-lg"></span> */}
        </div>
    );
};

export default Loading;