import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='text-center border p-2'>
            <p className='text-3xl font-semibold text-red-500 pb-2 border-b uppercase'>{heading}</p>
            <h3 className='text-green-800'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;