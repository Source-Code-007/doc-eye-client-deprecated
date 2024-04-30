import AppointmentSelectCompo from '@/Components/OnlineAppointment/AppointmentSelectCompo';
import getDoctor from '@/GetApiData/getDoctor';
import Image from 'next/image';
import React from 'react';
import { MdWarning } from 'react-icons/md';

const page = async ({ params }) => {
    const slug = params.slug
    const doctor = await getDoctor(slug)


    const { _id, title, medical_degree } = doctor || {}
    const { name, avatar } = doctor?.personalInformation || {}

    if (!doctor) {
        return <div className='h-[50vh] flex items-center justify-center'>
            <h2 className='font-bold text-lg sm:text-xl p-2 bg-slate-100 shadow-xl flex items-center gap-2'>Doctor not found! <MdWarning className='text-warning' /></h2>
        </div>
    }


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

            <AppointmentSelectCompo doctor={doctor} />


        </div>
    );
};

export default page;