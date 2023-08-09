import React from 'react';
import appSectionBG from '/public/assets/img/Homepage/AppSection/appSectionBG2.jpg'
import QRcode from '/public/assets/img/Homepage/AppSection/QRcode.png'
import DownloadOnGooglePlay from '/public/assets/img/Homepage/AppSection/DownloadOnGooglePlay.png'
import DownloadOnAppStore from '/public/assets/img/Homepage/AppSection/DownloadOnAppStore.png'
import Image from 'next/image';


const AppSection = () => {
    return (
        <div className='bg-fixed bg-slate-800 bg-blend-overlay py-36 my-8 bg-center bg-cover' style={{ backgroundImage: `url(${appSectionBG.src})` }}>
            <div className='grid grid-cols-2 gap-6 my-container text-slate-50'>
                <div className='space-y-4'>
                    <h2 className='font-bold text-xl md:text-2xl xl:text-4xl'>Download, register and stay connected to our app and feel safe!</h2>
                    <p>Download Now for Quick and Easy Access to Doctors, Prescriptions, Health Services, and a World of Wellness, Anytime, Anywhere</p>
                </div>
                <div className='flex gap-5 justify-end items-center'>
                    <figure className='flex items-center'>
                        <Image src={QRcode} alt='QRcode' height={180} width={180}></Image>
                    </figure>
                    <figure className='space-y-4 flex flex-col justify-center'>
                        <Image src={DownloadOnGooglePlay} alt='DownloadOnGooglePlay' height={55} width={130} className='cursor-pointer'></Image>
                        <Image src={DownloadOnAppStore} alt='DownloadOnAppStore' height={55} width={130} className='cursor-pointer'></Image>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default AppSection;