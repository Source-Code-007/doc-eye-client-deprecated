'use client'
import MyMotion from '@/Components/HelpingCompo/MyMotion';
import SpecialtyDoctorsSkeleton from '@/Components/HelpingCompo/Skeleton/SpecialtyDoctorsSkeleton';
import ServiceFilter from '@/Components/Services/ServiceFilter';
import useAxiosInstance from '@/Hooks/Axios/useAxiosInstance';
import { useAppSelector } from '@/Redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { MdWarning } from 'react-icons/md';

const ServicePage = () => {
    const { slug } = useParams()
    const modifiedSlug = decodeURIComponent(slug)
    const axiosInstance = useAxiosInstance()
    const [doctors, setDoctors] = useState([])
    const [doctorsLoading, setDoctorsLoading] = useState(false)

    const minConsultationFee = useAppSelector(state => state.doctors.minConsultationFee)
    const maxConsultationFee = useAppSelector(state => state.doctors.maxConsultationFee)
    const sortBy = useAppSelector(state => state.doctors.sortBy)
    const availability = useAppSelector(state => state.doctors.availability)
    const rating = useAppSelector(state => state.doctors.rating)

    useEffect(() => {
        setDoctorsLoading(true)

        axiosInstance(`/doctor/all-doctors?specialty=${modifiedSlug}&minConsultationFee=${minConsultationFee}&maxConsultationFee=${maxConsultationFee}&sortBy=${sortBy}&availability=${availability}&rating=${rating}`).then(res => {
            setDoctorsLoading(false)
            setDoctors(res.data?.data)
        }).catch(e => {
            setDoctorsLoading(false)
            console.log(e.response);
        })
    }, [modifiedSlug, minConsultationFee, maxConsultationFee, sortBy, availability, rating])


    console.log(doctors, 'doctors from service slug page');


    return (
        <div className='container mx-4 md:mx-auto my-8'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-2'>
                    <ServiceFilter></ServiceFilter>
                </div>
                <div className='col-span-10'>
                    {!doctorsLoading && doctors?.length > 0 && <h2 className='mb-3'>
                        <span className='font-bold'>{doctors?.length}</span> doctors found for <span className='my-subtitle text-secondary-main'>{modifiedSlug}</span>
                    </h2>}
                    <div className='space-y-2 md:space-y-4'>
                        {
                            doctorsLoading ? <SpecialtyDoctorsSkeleton /> : !doctors?.length > 0 ?
                                <div className='h-[50vh] flex items-center justify-center'>
                                    <h2 className='font-bold text-lg sm:text-xl p-2 bg-slate-100 shadow-xl flex items-center gap-2'>Doctors not found! <MdWarning className='text-warning' /></h2>
                                </div> : doctors?.map((item, ind) => {
                                    const { name, avatar } = item?.personalInformation
                                    const { _id, title, medical_specialty, medical_degree, current_workplace, consultationFee, total_experience_year } = item
                                    return <MyMotion key={ind} y={20}> <Link className='rounded-lg my-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 sm:p-5 cursor-pointer group' href={`/doctor/${_id}`}>
                                        <div className='flex flex-1 gap-1 sm:gap-2 items-center'>
                                            <figure>
                                                <Image src={avatar} alt={name} height={85} width={85} />
                                            </figure>
                                            <div className='space-y-1'>
                                                <p className='font-semibold'>{title} {name}</p>
                                                <p>{medical_degree}</p>
                                                <div>
                                                    <p className='text-gray-500'>Specialties</p>
                                                    <span></span>
                                                    <div className='flex gap-[2px] flex-wrap'>{medical_specialty?.map((elem, ind) => {
                                                        return <p key={ind} className='bg-primary-main p-[1.5px] rounded font-semibold text-white'>{elem}</p>
                                                    })}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='space-y-2 flex-1'>
                                            <div>
                                                <p className='text-gray-500'>Current workplace</p>
                                                <p className='font-bold'>{current_workplace}</p>
                                            </div>
                                            <div className='flex justify-start sm:justify-between gap-4'>
                                                <div>
                                                    <p className='text-gray-500'>Experience</p>
                                                    <p className='font-bold'>{total_experience_year} years</p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-500'>Rating</p>
                                                    <p className='font-bold'>5 star</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-1 flex items-center justify-center py-5 sm:py-0'>
                                            <div>

                                                <p className='text-gray-500'>Consultation fee</p>
                                                <p className='font-bold text-3xl sm:text-4xl text-primary-main flex gap-1 items-center group-hover:scale-105 transition-all'>	৳ {consultationFee} <FaArrowRight /></p>
                                            </div>
                                        </div>
                                    </Link>
                                    </MyMotion>
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