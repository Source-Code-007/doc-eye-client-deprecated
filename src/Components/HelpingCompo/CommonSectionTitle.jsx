import React from 'react';

const CommonSectionTitle = ({subTitle, title}) => {
    return (
        <div className='space-y-3'>
            <p className='text-primary pl-11 font-bold relative before:w-10 before:h-[2px] before:bg-[#136afb] before:absolute before:left-0 before:top-1/2'>{subTitle}</p>
            <h2 className='my-title'>{title}</h2>
        </div>
    );
};

export default CommonSectionTitle;