'use client'
import React, { useState } from 'react';
import Lottie from "lottie-react";
import doctorRegistrationLottie from '/public/assets/lottieAnimation/doctor-registration-lottie.json'
import doctorRegistrationBg from '/public/assets/img/doctor-registration-bg.jpg'
import DateTimePicker from 'react-datetime-picker';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';



const RegistrationDoctorPage = () => {

    const [value, onChange] = useState(new Date());

    console.log(value);

    return (
        <div className='bg-cover bg-center bg-slate-700 bg-blend-overlay ' style={{ backgroundImage: `url(${doctorRegistrationBg.src})` }}>

            <div className='min-h-[93vh] my-container-2 flex gap-6 items-center justify-center'>
                <div className='hidden md:block md:w-6/12 justify-start'>
                    <Lottie animationData={doctorRegistrationLottie} />
                </div>

                <form action="" className='flex-1 rounded p-5 md:p-10 space-y-6 bg-[#07332Fgg] w-3/6 bg-slate-800 bg-opacity-50'>
                    <h2 className='my-subtitle text-white'>Doctor Registration</h2>
                    <input type="text" className='my-inp-2' placeholder='Title' />
                    <div className='flex gap-2'>
                        <input type="text" className='my-inp-2' placeholder='First name' />
                        <input type="text" className='my-inp-2' placeholder='Last name' />
                    </div>

                    <DateTimePicker onChange={onChange} value={value} className={'w-full rounded-lg'}/>

                    <select defaultValue={''} className='my-inp-2'>
                        <option value="" disabled>Designation</option>
                        <option value="Prof">Prof</option>
                        <option value="A. Prof">A. Prof</option>
                        <option value="Sub Prof">Sub Prof</option>
                    </select>
                </form>
            </div>

        </div>
    );
};

export default RegistrationDoctorPage;