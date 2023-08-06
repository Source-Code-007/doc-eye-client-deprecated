import React from 'react';
import banner1 from '/public/assets/img/Homepage/DocEyeBanner.svg'
import videoConsultation from '/public/assets/img/Homepage/Banner/videoConsultation.png'
import healthResource from '/public/assets/img/Homepage/Banner/healthResource.png'
import patientSupport from '/public/assets/img/Homepage/Banner/patientSupport.png'
import orderMedicine from '/public/assets/img/Homepage/Banner/orderMedicine.png'
import Image from 'next/image';

const Banner = () => {
    const services = [
        {
            title: 'Online Consultations',
            subTitle: 'Provide virtual appointments for patients to consult with doctors remotely.',
            img: videoConsultation
        },
        {
            title: 'Health Information Resources',
            subTitle: 'Provide articles, videos, and resources on various health topics.',
            img: healthResource
        },
        {
            title: 'Patient support',
            subTitle: 'This includes a help desk where patients can get help with using the portal or with their health in general.',
            img: patientSupport
        },
        {
            title: 'Order medicine online',
            subTitle: 'Order easily and get the medicine in 1 hour!',
            img: orderMedicine
        },
    ]


    
    return (
        <div className='h-screen bg-center' style={{ backgroundImage: `url(${banner1.src})` }}>
            <div className='my-container pt-28 flex flex-col justify-between h-3/4 text-center'>
                <h2 className='my-banner-title'>Complete health solution DocWatch!</h2>
                <p className='font-semibold text-lg text-slate-700 px-16'>Empowering Lives, Shaping Futures. For years, our dedicated work has touched and transformed thousands of lives, leading them towards mental well-being and a more fulfilling existence. Join us as we continue this impactful journey together.</p>
                <div className='flex gap-5'>
                    {services.map((service, ind) => <div key={ind} className='flex-1 py-7 px-3 rounded bg-white space-y-4 text-center shadow-lg cursor-pointer hover:scale-105 hover:-translate-y-5 transition duration-500'>
                        <Image alt='videoConsultation' className='mx-auto' height={60} width={60} src={service.img}></Image>
                        <h2 className='font-semibold text-xl'>{service.title}</h2>
                        <p>{service.subTitle.slice(0, 60)}</p>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Banner;