'use client'
import React, { useState } from 'react';
import contactBanner from '../../../../public/assets/img/contactBannerOne.jpg'
import CommonBanner from '@/Components/HelpingCompo/CommonBanner';
import { FaLocationArrow, FaMessage, FaPhone } from 'react-icons/fa6';
import Link from 'next/link';
import MyMotion from '@/Components/HelpingCompo/MyMotion';


import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { useForm } from 'react-hook-form';


{/* TODO: need to update department from API */ }
const ContactPage = () => {
    const [appointmentDate, setAppointmentDate] = useState(null)
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [appointmentTime, setAppointmentTime] = useState(null)

    const {
        register, handleSubmit, formState: { errors, isSubmitted }, watch
    } = useForm()

    // Handle submit appointment func
    const handleAppointmentSubmit = (form) => {
        if(!appointmentDate || !dateOfBirth || !appointmentTime) return

        
        console.log({...form, appointmentDate, appointmentTime, dateOfBirth});
    }

    return (
        <div className='pb-20'>
            <CommonBanner img={contactBanner} title={'Contact with us'} subtitle={'Leading the way in daily healthcare excellence'}></CommonBanner>
            <div className='my-container'>

                {/* contact box */}
                <MyMotion delay={.2} scale={1.2}>
                    <div className='bg-[#07332F] rounded px-8 py-6 grid grid-cols-12 gap-4 text-slate-100 relative -top-24'>
                        {/* contact box left */}
                        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                            <h2 className='my-subtitle !text-3xl mb-8'>Contact With Us</h2>

                            <div className='space-y-6'>
                                <p className='text-primary-desc'>At DocEye, we value your feedback, questions, and concerns. Our dedicated team is here to assist you with any inquiries you may have about our services, medical information, or website functionality</p>
                                <h2 className='my-subtitle flex items-center gap-4 text-slate-200'> <FaPhone className='text-secondary'></FaPhone> +880170678-5160</h2>
                                <h2 className='my-subtitle flex items-center gap-4 text-slate-200'> <FaMessage className='text-secondary'></FaMessage> utsho926@gmail.com</h2>
                                <h2 className='my-subtitle flex items-center gap-4 text-slate-200'> <FaLocationArrow className='text-secondary'></FaLocationArrow> Badda, Dhaka</h2>
                                <p className='text-slate-100'>Working Time: <span className='text-slate-300'>Mon - Sat / 12:00 AM - 12:00 PM  <br /> Sunday / 10:00 AM - 08:00 PM</span></p>

                            </div>
                        </div>

                        {/* contact box right */}
                        <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                            <h2 className='my-subtitle !text-3xl mb-8'>Request appointment</h2>
                            <form className='space-y-5' onSubmit={handleSubmit(handleAppointmentSubmit)}>

                                {/* TODO: need to update department from API */}
                                {/* Department and mobile */}
                                <div className='flex gap-4'>
                                    <div className='flex-1'>
                                        <label htmlFor='appointmentDept' className='my-inp-label'>Department <span className='text-secondary-main'>*</span></label>
                                        <select defaultValue={''} id='appointmentDept' className='my-inp' {...register("appointmentDept", { required: true })}>
                                            <option value="">Department</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                        </select>
                                        {errors.appointmentDept && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor='mobile' className='my-inp-label'>Mobile <span className='text-secondary-main'>*</span></label>
                                        <input type="number" id='mobile' className='my-inp' placeholder='Mobile' {...register("mobile", { required: true })}/>
                                        {errors.mobile && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>
                                </div>

                                {/* Name and email */}
                                <div className='flex gap-4'>
                                    <div className='flex-1'>
                                        <label htmlFor='name' className='my-inp-label'>Name <span className='text-secondary-main'>*</span></label>
                                        <input type="text" id='name' className='my-inp' placeholder='Name' {...register("name", { required: true })} />
                                        {errors.name && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>
                                    <div className='flex-1'>
                                        <label htmlFor='email' className='my-inp-label'>Email <span className='text-secondary-main'>*</span></label>
                                        <input type="text" id='email' className='my-inp' placeholder='Email'  {...register('username', {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })} />
                                        {errors.email && (<p className="text-red-500 mt-1">*{errors.email?.message}</p>)}
                                    </div>
                                </div>

                                {/* Date and birth and gender */}
                                <div className='flex flex-wrap gap-4'>
                                    <div className='flex-1 text-black'>
                                        <label htmlFor='dateOfBirth' className='my-inp-label'>Date of birth <span className='text-secondary-main'>*</span></label>
                                        <DatePicker onChange={setDateOfBirth} value={dateOfBirth} className={'w-full rounded-lg'} />
                                        {isSubmitted && !dateOfBirth && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>

                                    <div className="flex-1">
                                        <label htmlFor='gender' className='my-inp-label'>Gender<span className='text-secondary-main'>*</span></label>
                                        <div className='flex items-center gap-3'>
                                            {
                                                ['Male', 'Female'].map((item, ind) => {
                                                    return <div key={ind} className='flex items-center gap-2'>
                                                        <input type="radio" id={item} value={item} name='gender' {...register('gender', { required: true })} className='radio radio-sm radio-error' />
                                                        <label htmlFor={item} className='my-inp-label !mb-0'>{item}</label>
                                                    </div>
                                                })
                                            }
                                        </div>
                                        {errors.gender && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>

                                </div>

                                {/* Appointment date and time */}
                                <div className='flex gap-4'>
                                    <div className='flex-1 text-black'>
                                        <label htmlFor='appointmentDate' className='my-inp-label'>Appointment date <span className='text-secondary-main'>*</span></label>
                                        <DatePicker onChange={setAppointmentDate} value={appointmentDate} className={'w-full rounded-lg'} />
                                        {isSubmitted && !appointmentDate && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>

                                    <div className='flex-1 text-black'>
                                        <label htmlFor='appointmentTime' className='my-inp-label'>*Appointment time <span className='text-secondary-main'>*</span></label>
                                        <TimePicker onChange={setAppointmentTime} value={appointmentTime} className={'w-full rounded-lg'} />
                                        {isSubmitted && !appointmentTime && (<p className="text-red-500 mt-1">*This field is required</p>)}
                                    </div>
                                </div>

                                {/* Query */}
                                <div className='w-full'>
                                    <label htmlFor='query' className='my-inp-label'>Your message<span className='text-secondary-main'>*</span></label>
                                    <textarea type="text" id='query' placeholder="your query here..." className="my-inp min-h-[150px] h-52 max-h-[350px]" {...register('query', { required: true })} />
                                    {errors.query && <p className='text-red-500 mt-1'>*This field is required</p>}
                                </div>

                                <div className='text-center'>
                                    <button className='my-btn-two w-3/6'>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </MyMotion>

                {/* Get help quickly FAQ */}
                <MyMotion delay={.1} scale={.8}>
                    <div className='border-t-4 border-[#E57373] w-full md:w-5/6 mx-auto my-shadow p-5 space-y-5'>
                        <div className='text-center px-4 md:px-14 space-y-3'>
                            <h2 className='my-subtitle !text-3xl'>Get help quickly</h2>
                            <p className='text-xl'>Browse our most frequently asked questions (FAQs) for quick answers about Doctor On Demand and our services.</p>
                        </div>
                        <ul className='list-disc pl-5'>
                            <li>General Questions</li>
                            <li>Excuse Notes & Medical Records</li>
                            <li>Payment, Insurance & Billing</li>
                            <li>Prescriptions & Pharmacy</li>
                            <li>Troubleshooting</li>
                            <li>Managing my Account</li>
                        </ul>
                        <Link href={'/faq'} className='inline-block'> <button className='my-btn-one'>FAQ</button> </Link>
                    </div>
                </MyMotion>

            </div>
        </div>
    );
};

export default ContactPage;