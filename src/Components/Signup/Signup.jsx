'use client'
import React, { useState } from 'react';
import signinBG from '/public/assets/img/Sign/signinBG.jpg'
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/Providers/AuthProvider';
import useAxiosInstance from '@/Hooks/Axios/useAxiosInstance';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const Signup = () => {
    const { user, setUser, authLoading, setAuthLoading, createUserWithEmailPass, updateProfileFunc } = useAuth()
    const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState({ password: false, confirmPassword: false })
    const axiosInstance = useAxiosInstance()
    const router = useRouter()

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = form => {
        setAuthLoading(true)
        setLoading(true)
        const { email, password, name, signupPhoto, phoneNumber } = form

        axiosInstance.post('/signup', { name, email, phone:parseInt(phoneNumber), password, role: 'user', avatar: signupPhoto?.[0] }, { headers: { "Content-Type": "multipart/form-data" } }).then(res => {
            setAuthLoading(false)

            toast.success('User created successfully!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push('/signin')
            reset()

        }).catch(e => {
            setAuthLoading(false)

            console.log(e, 'err from signup');
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

                {/* signup form left */}
                <div className='w-full xl:w-3/6 bg-slate-50 px-8 py-14 rounded-l'>
                    <div className='mb-12 space-y-2'>
                        <h2 className='my-subtitle text-secondary'>Register your account</h2>
                        <p className='text-gray-400'>Join Us to Unlock a World of Healthcare Opportunities</p>
                    </div>

                    <div className='space-y-4'>
                        {/* Name */}
                        <div>
                            <label htmlFor="signupName" className='text-slate-600'>Your name here</label>
                            <input {...register("name", { required: true })} type='text' id='signupName' className={`sign-my-inp shadow-inner ${errors.name ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Your name here' />
                            {errors.name && <span className='text-red-500'>*Name is required</span>}
                        </div>

                        {/* Phone number */}
                        <div>
                            <label htmlFor="signupNumber" className='text-slate-600'>Your number here</label>
                            <input type='number' {...register("phoneNumber", { required: true })} id='signupNumber' className={`sign-my-inp shadow-inner ${errors.phoneNumber ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Your number here' />
                            {errors.phoneNumber && <span className='text-red-500'>*Number is required</span>}
                        </div>

                        {/* Photo */}
                        <div>
                            <label htmlFor="signupPhoto" className='text-slate-600'>Your photo here</label>
                            <input type='file' {...register("signupPhoto", { required: true })} id='signupPhoto'
                                className={`file-input file-input-bordered file-input-error !p-0 sign-my-inp ${errors.signupPhoto ? 'shadow-red-700' : 'shadow-slate-700'}`}
                                // className="file-input file-input-bordered focus:outline-0 file-input-error my-inp !p-0"

                                placeholder='Your photo here' />
                            {errors.signupPhoto && <span className='text-red-500'>*Photo is required</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="signupEmail" className='text-slate-600'>Your email here</label>
                            <input type='email' {...register("email", { required: true, pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ })} id='signupEmail' className={`sign-my-inp shadow-inner ${errors.email ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Your email here' />
                            {errors.email && <span className='text-red-500'>*{errors?.email?.type === 'pattern' ? 'Please provide valid email' : 'Email is required'}</span>}
                        </div>

                        {/* Pass */}
                        <div>
                            <label htmlFor="signupPass" className='text-slate-600'>Your password here</label>
                            <div className='relative'>
                                <input type={`${showPass.pass ? 'text' : 'password'}`} {
                                    ...register("password", {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                            message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
                                        }
                                    })
                                }
                                    id='signupPass' className={`sign-my-inp !pr-[25px] shadow-inner ${errors.password ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Your password here' />
                                <span onClick={() => setShowPass({ ...showPass, pass: !showPass.pass })} className='cursor-pointer absolute top-[18px] right-2'>{showPass.pass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            </div>

                            {errors.password && <span className='text-red-500'>*{errors?.password?.message}</span>}
                        </div>

                        {/* Confirm Pass */}
                        <div>
                            <label htmlFor="signupConfirmPass" className='text-slate-600'>Confirm your password</label>
                            <div className='relative'>
                                <input type={`${showPass.confirmPass ? 'text' : 'password'}`} {...register("confirmPassword", {
                                    required: "Confirm password is required", validate:
                                        value => value === watch("password") || "Password do not match"

                                })} id='signupConfirmPass' className={`sign-my-inp !pr-[25px] shadow-inner ${errors.confirmPassword ? 'shadow-red-700' : 'shadow-slate-700'}`} placeholder='Confirm password' />
                                <span onClick={() => setShowPass({ ...showPass, confirmPass: !showPass.confirmPass })} className='cursor-pointer absolute top-[18px] right-2'>{showPass.confirmPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            </div>
                            {errors.confirmPassword && <span className='text-red-500'>*{errors?.confirmPassword?.message}</span>}
                        </div>

                        {/* Terms */}
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" name='terms' aria-describedby="terms" type="checkbox" {...register('terms', { required: true })} className="w-4 h-4" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className='text-primary-desc'>Accept <Link className='link-hover link-primary' href={'#'}>Terms and Condition</Link></label>
                                    </div>
                                </div>
                            </div>
                            {errors.terms && <p className='text-red-500'>*You need to checked terms & condition! </p>}
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

            {/* Toast container */}
            {/* <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
              /> */}
        </div>
    );
};

export default Signup;