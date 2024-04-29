import AppointmentSelectCompo from '@/Components/OnlineAppointment/AppointmentSelectCompo';
import getDoctor from '@/GetApiData/getDoctor';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const slug = params.slug
    const doctor = await getDoctor(slug)

    const { _id, title, medical_degree } = doctor || {}
    const { name, avatar } = doctor?.personalInformation || {}



    return (
        <div className='container mx-4 md:mx-auto my-8 space-y-4'>

            <div className='bg-white rounded-md p-2 md:p-4 my-shadow flex flex-wrap justify-center sm:justify-normal gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center'>
                <h2 className='font-semibold'>Available Appointment Slots for</h2>

                {/* Title */}
                <div className='flex gap-2 items-center'>
                    <figure className='relative h-16 w-16'>
                        <Image src={avatar} alt={name} fill={true} className='rounded-full' />
                    </figure>
                    <div className='space-y-1'>
                        <h2>{title} {name}</h2>
                        <p className='text-gray-500'>{medical_degree}</p>
                    </div>
                </div>
            </div>

            <AppointmentSelectCompo doctor={doctor}/>
      

        </div>
    );
};

export default page;