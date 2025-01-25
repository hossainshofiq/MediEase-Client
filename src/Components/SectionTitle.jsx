import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='text-center border my-5 p-2'>
            <p className='text-3xl text-red-500 pb-2 border-b'>{heading}</p>
            <h3 className=' text-green-800'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;