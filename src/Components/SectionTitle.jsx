import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='text-center space-y-2 border my-5'>
            <p className='text-3xl text-red-500'>{heading}</p>
            <h3 className=' text-green-800'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;