import Image from 'next/image';
import React from 'react';
import DownloadOnGooglePlay from '/public/assets/img/Homepage/AppSection/DownloadOnGooglePlay.png'


const page = () => {
    return (
        <div className='my-container'>
            <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                <div className='space-y-4'>
                    <h2 className='my-title'>Please download DocWatch app to  order medicine online</h2>
                    <p> We are launching order medicine online <br className='hidden md:block' /> on the DocWatch website very soon.</p>
                    <Image src={DownloadOnGooglePlay} alt='DownloadOnGooglePlay' height={55} width={130} className='cursor-pointer'></Image>
                </div>
                <div>
                    <figure className='relative w-full md:w-5/6 h-[400px] md:h-[550px] mx-auto md:ml-auto'>
                    <Image src={'https://doctime.com.bd/images/medicine_online.webp'} alt='order medicine online' fill={true}></Image>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default page;