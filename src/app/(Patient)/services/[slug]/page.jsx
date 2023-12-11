'use client'
import ServiceFilter from '@/Components/Services/ServiceFilter';
import { useParams } from 'next/navigation';
import React from 'react';

const ServicePage = () => {
    const { slug } = useParams()

    console.log(slug);
    const doctorsInfo = ['one', 'two', 'three', 'four']

    return (
        <div className='container mx-auto my-8'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-2'>
                    <ServiceFilter></ServiceFilter>
                </div>
                <div className='col-span-10'>
                    <h2 className='mb-3'>
                        <span className='font-bold'>69</span> doctors found for <span className='my-subtitle text-secondary-main'>{slug}</span>
                    </h2>
                    <div className='space-y-2'>
                        {
                            doctorsInfo?.map((item, ind) => {
                                return <div key={ind} className='rounded-lg my-shadow-2 flex flex-col md:flex-row items-center justify-between gap-4 p-5 md:p-7'>
                                    <div>{item}</div>
                                    <div>{item}</div>
                                    <div>{item}</div>
                                </div>
                            })
                        }
                    </div>
                    <div >
                        { }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;