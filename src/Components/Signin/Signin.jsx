'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import signinBG from '/public/assets/img/Sign/signinBG.jpg'
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from 'react-icons/fa6';
import { useAuth } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';
import useAxiosInstance from '@/Hooks/Axios/useAxiosInstance';
import { toast } from 'react-toastify';
import useCookies from '@/Hooks/useCookies';

const Signin = () => {
    const [showPass, setShowPass] = useState(false)
    const { signinUserFunc, setAuthLoading, profileControl, setProfileControl } = useAuth()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const router = useRouter()
    const axiosInstance = useAxiosInstance()
    const cookies = useCookies()

    const onSubmit = form => {
        const { email, password } = form
        axiosInstance.post('/signin', { email, password }).then(res => {
            setAuthLoading(false)
            
            cookies.remove('docEyeAccessToken')
            cookies.set('docEyeAccessToken', res?.data?.token);

            toast.success('User signin successfully!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setProfileControl(!profileControl)
            router.push('/')
            reset()

        }).catch(e => {
            setAuthLoading(false)

            if (e?.response?.data?.message) {
                toast.error(e?.response?.data?.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                console.log(e?.message);
            }
        })
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-cover bg-center bg-slate-800 bg-blend-overlay my-28 md:my-0' style={{ backgroundImage: `url(${signinBG.src})` }}>

            <form onSubmit={handleSubmit(onSubmit)} className=' my-shadow-2 w-5/6 md:w-8/12 xl:w-7/12 mx-auto block xl:flex flex-row my-5 md:my-32'>

                {/* signin form left */}
                <div className='w-full xl:w-3/6 bg-slate-50 px-8 py-14 rounded-l'>
                    <div className='mb-12 space-y-2'>
                        <h2 className='my-subtitle text-secondary'>Hello and welcome </h2>
                        <p className='text-gray-400'>Access Your Personalized Healthcare Services</p>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <label htmlFor="signinEmail">Your email here</label>
                            <input {...register("email", { required: true })} type='email' id='signinEmail' className={`sign-my-inp shadow-inner ${errors.email ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Your email here' />
                            {errors.email && <span className='text-red-500'>*Email is required</span>}
                        </div>

                        <div>
                            <label htmlFor="signinPassword">Your password here</label>
                            <div className='relative'>
                                <input {...register("password", { required: true })} type={`${showPass ? 'text' : 'password'}`} id='signinPassword' className={`sign-my-inp shadow-inner ${errors.password ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Your password here' />
                                <span onClick={() => setShowPass(!showPass)} className='cursor-pointer absolute top-[18px] right-2'>{showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            </div>
                            {errors.password && <span className='text-red-500'>*Password is required</span>}
                        </div>
                        <button type="submit" className='my-btn-one'>Signin</button>

                        <p className='text-slate-700'>New here? <Link href={'/signup'}><button className='text-primary cursor-pointer font-bold'>Signup</button></Link></p>
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

                {/* signin right */}
                <div className='bg-slate-800 bg-opacity-40 hidden xl:flex items-center justify-center text-white rounded-r flex-1 p-5'>
                    <div className='space-y-4'>
                        <h2 className='my-subtitle'>Welcome to <span className='text-secondary'>DocEye</span></h2>
                        <p className='text-slate-400'>Login to access your account</p>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Signin;