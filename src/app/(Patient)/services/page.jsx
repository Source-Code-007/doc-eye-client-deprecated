'use client'
import useAxiosInstance from '@/Hooks/Axios/useAxiosInstance';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ServicesPage = () => {
    const axiosInstance = useAxiosInstance()
    const [services, setServices] = useState()
    const router = useRouter()


    // console.log(router);


    useEffect(() => {
        axios.get('/services.json').then(res => {
            console.log(res?.data, 10);
            setServices(res?.data)
        }).catch(e => {
            console.log(e);
        })
    }, [])

    // console.log(services);
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-[24px] md:text-[38px] my-3'>Please choose a specialty</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {services?.map((service, ind) => {
                    return <div key={ind} className='py-6 md:py-8 px-4 md:px-6 rounded-xl border bg-slate-50 my-shadow-2 flex gap-4 md:gap-6 items-center cursor-pointer' onClick={()=> router.push(`service/${service?.slug}`)}>
                        <Image height={50} width={50} alt={service?.title} src={service?.logo}></Image>
                        <div className='space-y-2'>
                           <h2 className='text-black font-semibold md:font-bold text-lg md:text-xl'> {service?.title}</h2>
                           <p className='text-slate-700'>{service?.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default ServicesPage;