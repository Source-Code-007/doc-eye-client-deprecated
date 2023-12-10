'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const ServicePage = () => {
    const {slug} = useParams()

    console.log(slug);
    
    return (
        <div className='container mx-auto'>
            Dynamic service page for <span className='my-subtitle text-secondary-main'>{slug}</span>
        </div>
    );
};

export default ServicePage;