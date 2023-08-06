import React from 'react';

const CommonSectionTitle = ({subTitle, title}) => {
    return (
        <div className='space-y-3'>
            <p className='text-[#136afb] font-bold relative before:w-10 before:h-1 before:bg-[#136afb] before:absolute before:left-0 before:top-0'>{subTitle}</p>
            <p className='text-[#136afb] font-bold'>ttttt</p>
            <h2 className='my-title'>{title}</h2>
        </div>
    );
};

export default CommonSectionTitle;