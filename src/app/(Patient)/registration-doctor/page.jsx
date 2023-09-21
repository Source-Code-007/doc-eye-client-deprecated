'use client'
import React, { useState } from 'react';
import Lottie from "lottie-react";
import doctorRegistrationLottie from '/public/assets/lottieAnimation/doctor-registration-lottie.json'
import doctorRegistrationBg from '/public/assets/img/doctor-registration-bg.jpg'
import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useForm } from 'react-hook-form';
import TermsModal from '@/Components/HelpingCompo/TermsModal';



const RegistrationDoctorPage = () => {
    const [registrationTime, setRegistrationTime] = useState(new Date());
    const districtsOfBangladesh = [
        "Dhaka",
        "Chittagong",
        "Rajshahi",
        "Khulna",
        "Barishal",
        "Sylhet",
        "Rangpur",
        "Mymensingh",
        "Narayanganj",
        "Comilla",
        "Gazipur",
        "Bogra",
        "Dinajpur",
        "Tangail",
        "Jessore",
        "Faridpur",
        "Jamalpur",
        "Pabna",
        "Noakhali",
        "Feni",
        "Netrokona",
        "Naogaon",
        "Kushtia",
        "Magura",
        "Narsingdi",
        "Lakshmipur",
        "Kishoreganj",
        "Jhenaidah",
        "Sherpur",
        "Thakurgaon",
        "Chuadanga",
        "Natore",
        "Munshiganj",
        "Satkhira",
        "Bagerhat",
        "Sirajganj",
        "Chapai Nawabganj",
        "Joypurhat",
        "Meherpur",
        "Cox's Bazar",
        "Feni",
        "Chandpur",
        "Lalmonirhat",
        "Kurigram",
        "Pirojpur",
        "Panchagarh",
        "Patuakhali",
        "Bhola",
        "Sunamganj",
        "Habiganj",
        "Moulvibazar",
        "Manikganj",
        "Rajbari",
        "Madaripur",
        "Gopalganj",
        "Shariatpur",
        "Chuadanga",
        "Mymensingh",
        "Rangamati",
        "Bandarban",
        "Khagrachari",
        "Cox's Bazar",
        "Munshiganj"
    ];


    const formData = new FormData();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const handleSignupFunc = (form) => {
        setLoading(true);
        const { firstName, secondName, photo, email, phone, password, confirmPassword, terms } = form;

        formData.append("image", photo[0]);

        if (!terms) {
            setError("*Please check terms and condition!");
            return;
        }
        if (password !== confirmPassword) {
            setError("*Your password is not match!");
            return;
        }

        // password regexp
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
            );
            return;
        }

        // After hosting photo then post register info
        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_HOSTING_API_KEY}`;
        axios
            .post(url, formData)
            .then((res) => {
                const photo_url = res.data.data.url;
                const user = { name, photo_url, email, password };

                axiosSecure
                    .post("/register", user)
                    .then((res) => {
                        if (res.data) {
                            setSuccess("Registration successful");
                            setLoading(false);

                            // navigate to signin page after 3 seconds
                            Swal.fire({
                                title: "Navigate to signin page!",
                                html: "I will land signin page after <b></b> milliseconds.",
                                timer: 1500,
                                timerProgressBar: true,
                            }).then((result) => {
                                /* Read more about handling dismissals below */
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    location.href = "/signin";
                                    console.log("I was closed by the timer");
                                }
                            });
                        }
                    })
                    .catch((error) => console.log(error));
            })
            .catch((e) => console.log(e.message));
    };


    return (
        <div className='bg-cover bg-center bg-slate-700 bg-blend-overlay ' style={{ backgroundImage: `url(${doctorRegistrationBg.src})` }}>

            <div className='min-h-[93vh] py-5 my-container-2 flex gap-6 items-center justify-center'>
                <div className='hidden lg:block lg:w-6/12 justify-start'>
                    <Lottie animationData={doctorRegistrationLottie} />
                </div>

                <form action="" className='flex-1 rounded p-5 md:p-10 space-y-3 bg-[#07332Fgg] w-3/6 bg-slate-800 bg-opacity-70' onSubmit={handleSubmit(handleSignupFunc)}>
                    <h2 className='my-subtitle text-white'>Doctor Registration</h2>

                    {/* Title and doctor type */}
                    <div className='md:flex gap-4 space-y-4 md:space-y-0'>

                        {/* Title */}
                        <div className='flex-1'>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Title</label>
                            <select defaultValue={''} id='title' className='my-inp-2' {...register("title", { required: true })}>
                                <option value="" disabled>Title</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Prof. Dr.Prof">Prof. Dr.</option>
                                <option value="Assoc. Prof. Dr.">Assoc. Prof. Dr.</option>
                                <option value="Asst. Prof. Dr.">Asst. Prof. Dr.</option>
                            </select>
                            {errors.title && (<p className="text-red-500">This field is required</p>)}
                        </div>

                        {/* Doctor Type */}
                        <div className='flex-1'>
                            <label htmlFor="doctorType" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Doctor Type</label>
                            <select defaultValue={''} id='doctorType' className='my-inp-2' {...register("doctorType", { required: true })}>
                                <option value="" disabled>Doctor Type</option>
                                <option value="Medical">Medical</option>
                                <option value="Dental">Dental</option>
                                <option value="Veterinary">Veterinary</option>
                            </select>
                            {errors.doctorType && (<p className="text-red-500">This field is required</p>)}
                        </div>
                    </div>

                    {/* First name and last name */}
                    <div className='md:flex gap-4 space-y-4 md:space-y-0'>
                        <div className='flex-1'>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> First Name</label>
                            <input type="text" id='firstName' className='my-inp-2' placeholder='First name'  {...register("firstName", { required: true })} />
                            {errors.firstName && (<p className="text-red-500">This field is required</p>)}
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Last Name</label>
                            <input type="text" id='lastName' className='my-inp-2' placeholder='Last name'  {...register("lastName", { required: true })} />
                            {errors.lastName && (<p className="text-red-500">This field is required</p>)}
                        </div>
                    </div>


                    {/* Email & phone */}
                    <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                        {/* Email */}
                        <div className='flex-1'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Email</label>
                            <input type="email" id='email' className='my-inp-2' placeholder='Email' {...register("email", { required: true })} />
                            {errors.email && (<p className="text-red-500">This field is required</p>)}
                        </div>

                        {/* Number */}
                        <div className='flex-1'>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Phone</label>
                            <input type="number" id='phone' className='my-inp-2' placeholder='Phone' {...register("phone", { required: true })} />
                            {errors.phone && (<p className="text-red-500">This field is required</p>)}
                        </div>
                    </div>

                    {/* Password & confirm password */}
                    <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                        {/* Password */}
                        <div className='flex-1'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Password</label>
                            <input type="password" id='password' className='my-inp-2' placeholder='Password' {...register("password", { required: true })} />
                            {errors.password && (<p className="text-red-500">This field is required</p>)}
                        </div>

                        {/*Confirm Password */}
                        <div className='flex-1'>
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Confirm Password</label>
                            <input type="password" id='confirmPassword' className='my-inp-2' placeholder='Confirm Password' {...register("confirmPassword", { required: true })} />
                            {errors.confirmPassword && (<p className="text-red-500">This field is required</p>)}
                        </div>

                    </div>

                    {/* Photos */}
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Photo </label>
                        <input type="file" className="file-input file-input-bordered focus:outline-0 file-input-error my-inp-2 !p-0" {...register("photo", { required: true })} />
                        {errors.photo && (<p className="text-red-500">This field is required</p>)}
                    </div>

                    {/* District & Date of birth*/}
                    <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                        {/* Date of birth */}
                        <div className='flex-1'>
                            <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Date of Birth </label>
                            <DatePicker id='dateOfBirth' onChange={setRegistrationTime} value={registrationTime} className={'w-full rounded-lg'} />
                            {!registrationTime && (<p className="text-red-500">This field is required</p>)}
                        </div>

                        {/* District */}
                        <div className='flex-1'>
                            <label htmlFor="district" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> District </label>
                            <select id='district' defaultValue={''} className='my-inp-2' {...register("district", { required: true })}>
                                <option value="" disabled>District</option>
                                {
                                    districtsOfBangladesh.map((district, ind) => {
                                        return <option key={ind} value={district}>{district}</option>
                                    })
                                }
                            </select>
                            {errors.district && (<p className="text-red-500">This field is required</p>)}
                        </div>
                    </div>

                    {/* NID & BMDC */}
                    <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                        {/* National ID */}
                        <div className='flex-1'>
                            <label htmlFor="NID" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> National ID</label>
                            <input type="text" id='NID' className='my-inp-2' placeholder='National ID' {...register("NID", { required: true })} />
                            {errors.NID && (<p className="text-red-500">This field is required</p>)}
                        </div>

                        {/* BMDC */}
                        <div className='flex-1'>
                            <label htmlFor="BMDC" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> BMDC</label>
                            <input type="text" id='BMDC' className='my-inp-2' placeholder='Registration Number BMDC' {...register("BMDC", { required: true })} />
                            {errors.BMDC && (<p className="text-red-500">This field is required</p>)}
                        </div>
                    </div>

                    {/* Accept Terms and condition */}
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" name="terms" aria-describedby="terms" type="checkbox" {...register("terms", { required: true })} className="w-4 h-4" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-slate-300"> Accept
                                        <span className="link-hover link-primary" onClick={() => document.getElementById('terms_modal').showModal()}> Terms and Condition  </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {errors.terms && (
                            <p className="text-red-500">You need to checked terms & condition!</p>
                        )}
                    </div>

                    <button className='my-btn-two' type='submit'>Signup</button>

                </form>
            </div>
            <TermsModal></TermsModal>
        </div>
    );
};

export default RegistrationDoctorPage;