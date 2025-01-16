import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='text-center space-y-2'>
            <p className='text-3xl text-red-600'>{heading}</p>
            <h3 className=' text-green-700'>--- {subHeading} ---</h3>
        </div>
    );
};

export default SectionTitle;