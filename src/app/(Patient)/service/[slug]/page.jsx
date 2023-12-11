'use client'
import ServiceFilter from '@/Components/Services/ServiceFilter';
import { useParams } from 'next/navigation';
import React from 'react';

const ServicePage = () => {
    const { slug } = useParams()

    console.log(slug);

    return (
        <div className='container mx-auto my-8'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-2'>
                    <ServiceFilter></ServiceFilter>
                </div>
                <div className='col-span-10'>
                    Dynamic service page for <span className='my-subtitle text-secondary-main'>{slug}</span>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;