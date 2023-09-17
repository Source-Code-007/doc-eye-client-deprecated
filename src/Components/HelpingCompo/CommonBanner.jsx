import React from 'react';

const CommonBanner = ({img, title, subtitle}) => {
    return (
        <div className='h-[70vh] w-full bg-cover bg-center flex items-center justify-center bg-slate-700 bg-blend-overlay' style={{backgroundImage: `url(${img.src})`}}>
            <div className='space-y-4 text-center'>
                {title &&<h2 className='my-title text-white'>{title}</h2>}
                {subtitle &&<p className='my-subtitle !text-slate-300'>{subtitle}</p>}
            </div>
        </div>
    );
};

export default CommonBanner;