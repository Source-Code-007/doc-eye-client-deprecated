'use client'
import React, { useState } from 'react';
import signinBG from '/public/assets/img/Sign/signinBG.jpg'
import Link from 'next/link';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/Providers/AuthProvider';


const Signup = () => {
    const { user, setUser, loading, setLoading, createUserWithEmailPass, updateProfileFunc } = useAuth()
    const [error, setError] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = form => {
        setLoading(true)
        const { email, password, confirmPassword } = form

        if(password === confirmPassword){
            setError('Your password is not match')
            return
        }

        // create user func
        createUserWithEmailPass(email, password).then(res => {
            setLoading(false)
            // setUser(res.user)
            console.log(res);
        }).catch(e=>{
            // if(e.status.code === ''){
                
            // }
            setLoading(false)
            setError(e.message)
        })
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-cover bg-center bg-slate-800 bg-blend-overlay my-28 md:my-0' style={{ backgroundImage: `url(${signinBG.src})` }}>

            <form onSubmit={handleSubmit(onSubmit)} className=' my-shadow-2 w-5/6 md:w-8/12 xl:w-7/12 mx-auto block xl:flex flex-row my-5 md:my-32'>

                {/* signup form left */}
                <div className='w-full xl:w-3/6 bg-slate-50 px-8 py-14 rounded-l'>
                    <div className='mb-12 space-y-2'>
                        <h2 className='my-subtitle text-secondary'>Register your account</h2>
                        <p className='text-gray-400'>Join Us to Unlock a World of Healthcare Opportunities</p>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <label htmlFor="signupName" className='text-slate-600'>Your name here</label>
                            <input {...register("name", { required: true })} type='text' id='signupName' className={`sign-my-inp ${errors.name && 'border border-r-2 border-red-500'}`} placeholder='Your name here' />
                            {errors.name && <span className='text-red-500'>*Name is required</span>}
                        </div>
                        <div>
                            <label htmlFor="signupNumber" className='text-slate-600'>Your number here</label>
                            <input type='number' {...register("number", { required: true })} id='signupNumber' className={`sign-my-inp ${errors.number && 'border border-r-2 border-red-500'}`} placeholder='Your number here' />
                            {errors.number && <span className='text-red-500'>*Number is required</span>}
                        </div>
                        <div>
                            <label htmlFor="signupEmail" className='text-slate-600'>Your email here</label>
                            <input type='email' {...register("email", { required: true })} id='signupEmail' className={`sign-my-inp ${errors.email && 'border border-r-2 border-red-500'}`} placeholder='Your email here' />
                            {errors.email && <span className='text-red-500'>*Email is required</span>}
                        </div>

                        <div>
                            <label htmlFor="signupPass" className='text-slate-600'>Your password here</label>
                            <input type='password' {...register("password", { required: true }) } id='signupPass' className={`sign-my-inp ${errors.password && 'border border-r-2 border-red-500'}`} placeholder='Your password here' />
                            {errors.password && <span className='text-red-500'>*Password is required</span>}
                        </div>
                        <div>
                            <label htmlFor="signupConfirmPass" className='text-slate-600'>Confirm your password</label>
                            <input type='password' {...register("confirmPassword", { required: true }) } id='signupConfirmPass' className={`sign-my-inp ${errors.signupConfirmPass && 'border border-r-2 border-red-500'}`} placeholder='Confirm password' />
                            {errors.signupConfirmPass && <span className='text-red-500'>*Password is required</span>}
                        </div>

                        <div className='w-5/6 mx-auto'>
                            <button type="submit" className='my-btn-one w-full'>Signup</button>
                        </div>
                        <p className='text-slate-700'>Already have an account? <Link href={'/signin'}><button className='text-primary cursor-pointer font-bold'>Signin</button></Link></p>
                        <div className='flex gap-3 items-center'>
                            <hr className='h-px w-full bg-slate-500' />
                            <span className='text-slate-500'>or</span>
                            <hr className='h-px w-full bg-slate-500' />
                        </div>
                        <div>
                            <p className='text-slate-700 flex items-center gap-2'>Continue with?  <span className='text-xl cursor-pointer hover:scale-110 transition text-[#09528C] hover:text-[#E57373]'><FaFacebook></FaFacebook></span> <span className='text-xl cursor-pointer hover:scale-110 transition text-[#09528C] hover:text-[#E57373]'><FaGithub></FaGithub></span>  </p>
                        </div>
                    </div>
                </div>

                {/* signup right */}
                <div className='bg-slate-800 bg-opacity-40 hidden xl:flex items-center justify-center text-white rounded-r flex-1 p-5'>
                    <div className='space-y-4'>
                        <h2 className='my-subtitle'>Your Health, Our Priority</h2>
                        <p className='text-slate-400'>Streamlined Healthcare Services at Your Fingertips</p>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Signup;