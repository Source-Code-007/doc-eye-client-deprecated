'use client'
import React from 'react';
import Lottie from "lottie-react";
import doctorRegistrationLottie from '/public/assets/lottieAnimation/doctor-registration-lottie.json'
import doctorRegistrationBg from '/public/assets/img/doctor-registration-bg.jpg'


const page = () => {
    return (
        <div className='min-h-[93vh] flex gap-6 items-center justify-center bg-cover bg-center bg-slate-700 bg-blend-overlay ' style={{backgroundImage: `url(${doctorRegistrationBg.src})`}}>
            <div className='hidden md:block md:w-6/12 xl:w-7/12'>
                <Lottie animationData={doctorRegistrationLottie} />
            </div>

            <form action="" className='flex-1 rounded p-5 md:p-10 space-y-6 bg-[#07332Fgg] w-3/6'>
                <h2 className='my-subtitle text-white'>Doctor Registration</h2>
                <input type="text" className='my-inp-2' placeholder='name' />
                <select defaultValue={''} className='my-inp-2'>
                    <option value="" disabled>Designation</option>
                    <option value="Prof">Prof</option>
                    <option value="A. Prof">A. Prof</option>
                    <option value="Sub Prof">Sub Prof</option>
                </select>
            </form>
        </div>
    );
};

export default page;