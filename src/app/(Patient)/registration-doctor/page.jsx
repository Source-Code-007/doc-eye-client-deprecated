'use client'
import React, { useState } from 'react';
import Lottie from "lottie-react";
import doctorRegistrationLottie from '/public/assets/lottieAnimation/doctor-registration-lottie.json'
import doctorRegistrationBg from '/public/assets/img/doctor-registration-bg.jpg'

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import { useForm } from 'react-hook-form';
import TermsModal from '@/Components/HelpingCompo/TermsModal';
import { FaPlus, FaXmark } from 'react-icons/fa6';
import { useAuth } from '@/Providers/AuthProvider';
import Skeleton from 'react-loading-skeleton';


// Need API for specialties - can be handle in admin dashboard (add, delete)

const RegistrationDoctorPage = () => {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [availabilityTimeStart, setAvailabilityTimeStart] = useState(new Date())
    const [availabilityTimeEnd, setAvailabilityTimeEnd] = useState(new Date())
    const [loading, setLoading] = useState(false)
    const { user, authLoading } = useAuth()

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
    const totalExperiences = [
        '1 year',
        '2 years',
        '3 years',
        '4 years',
        '5 years',
        '6 years',
        '7 years',
        '8 years',
        '9 years',
        '10 years',
        '11 years',
        '12 years',
        '13 years',
        '14 years',
        '15 years',
        '16 years',
        '17 years',
        '18 years',
        '19 years',
        '20 years',
        '21 years',
        '22 years',
        '23 years',
        '24 years',
        '25 years',
        '26 years',
        '27 years',
        '28 years',
        '29 years',
        '30 years'
    ];
    const availabilityDaysOptions = [
        { value: 'sat-thu', label: 'Sat - Thu' },
        { value: 'sun-fri', label: 'Sun - Fri' },
        { value: 'mon-sat', label: 'Mon - Sat' },
        { value: 'sun-sat', label: 'Sun - Sat' },
    ];


    const [workingExperiences, setWorkingExperiences] = useState([{ id: 1, weWorkplace: '', weDesignation: '', weDepartment: '', wePeriod: '' }])
    const handleWorkingExperiences = (ind, e) => {
        const { name, value } = e.target;
        const list = [...workingExperiences];
        list[ind][name] = value;
        setWorkingExperiences(list);
    }
    const handleRemoveWorkingExperience = (id) => {
        const restWorkingExperience = workingExperiences?.filter(item => item?.id != id)
        setWorkingExperiences([...restWorkingExperience])
    }
    const handleAddWorkingExperiences = () => {
        const newId = workingExperiences?.length + 1
        setWorkingExperiences([...workingExperiences, { id: newId, weWorkplace: '', weDesignation: '', weDepartment: '', wePeriod: '' }])
    }



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const handleSignupFunc = (form) => {
        setLoading(true);
        const { title, doctorType, bio, total_experience, educationalExcellent, consultationFee, availabilityDays, followupFee, current_workplace } = form;

        console.log({ title: title, doctorType: doctorType, bio: bio, total_experience: total_experience, educationalExcellent: educationalExcellent, consultationFee: consultationFee, followupFee: followupFee, workingExperiences: workingExperiences, dateOfBirth: dateOfBirth, availabilityDays: availabilityDays, availabilityTimeStart: availabilityTimeStart, availabilityTimeEnd: availabilityTimeEnd, current_workplace: current_workplace, joined_docEye: new Date(Date.now) });


        

   setLoading(false) //TODO: remove

        return

        // TODO: Need to replace register API
        axiosSecure
            .post("/doctor-register", user)
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
    };



    return (
        <div className='bg-cover bg-center bg-slate-700 bg-blend-overlay ' style={{ backgroundImage: `url(${doctorRegistrationBg.src})` }}>
            <div className='min-h-[93vh] py-5 my-container-2'>
                {
                    authLoading ? <div className='flex-1 self-start'> <Skeleton className='block py-2 h-[800px]' count={1} /></div> :
                        <form action="" className='rounded p-5 md:p-10 space-y-3 bg-[#07332Fgg] bg-slate-800 bg-opacity-70' onSubmit={handleSubmit(handleSignupFunc)}>
                            <h2 className='my-subtitle text-white'>Doctor Registration</h2>

                            {/* Title and doctor type */}
                            <div className='md:flex gap-4 space-y-4 md:space-y-0'>

                                {/* Title */}
                                <div className='flex-1'>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Title <span className='text-secondary-main'>*</span> </label>
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
                                    <label htmlFor="doctorType" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Doctor Type <span className='text-secondary-main'>*</span></label>
                                    <select defaultValue={''} id='doctorType' className='my-inp-2' {...register("doctorType", { required: true })}>
                                        <option value="" disabled>Doctor Type</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Dental">Dental</option>
                                        <option value="Veterinary">Veterinary</option>
                                    </select>
                                    {errors.doctorType && (<p className="text-red-500">This field is required</p>)}
                                </div>
                            </div>

                            {/* Bio */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Bio */}
                                <div className='flex-1'>
                                    <label htmlFor="bio" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Bio <span className='text-secondary-main'>*</span></label>
                                    <textarea id='bio' className='my-inp-2 h-[150px]' placeholder="Write something about you."  {...register("bio", { required: true })} />
                                    {errors.bio && (<p className="text-red-500">This field is required</p>)}
                                </div>
                            </div>


                            {/* Availability */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Availability days */}
                                <div className='flex-1'>
                                    <label htmlFor="availabilityDays" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Availability days <span className='text-secondary-main'>*</span></label>
                                    <select id='availabilityDays' defaultValue={''} className='my-inp-2' {...register("availabilityDays", { required: true })}>
                                        <option value="">Availability days</option>
                                        {
                                            availabilityDaysOptions.map((item, ind) => {
                                                return <option key={ind} value={item?.value}>{item?.label}</option>
                                            })
                                        }
                                    </select>
                                    {errors.availabilityDays && (<p className="text-red-500">This field is required</p>)}
                                </div>

                                {/* Availability times */}
                                <div className='flex-1'>
                                    <div className='md:flex gap-4 space-y-4 md:space-y-0'>
                                        <div className='flex-1'>
                                            <label htmlFor="availabilityTimeStart" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Time start <span className='text-secondary-main'>*</span></label>
                                            <TimePicker id='availabilityTimeStart' onChange={setAvailabilityTimeStart} value={availabilityTimeStart} className={'w-full rounded-lg'} />
                                            {!availabilityTimeStart && (<p className="text-red-500">This field is required</p>)}
                                        </div>
                                        <div className='flex-1'>
                                            <label htmlFor="availabilityTimeEnd" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Time end <span className='text-secondary-main'>*</span></label>
                                            <TimePicker id='availabilityTimeEnd' onChange={setAvailabilityTimeEnd} value={availabilityTimeEnd} className={'w-full rounded-lg'} />
                                            {!availabilityTimeEnd && (<p className="text-red-500">This field is required</p>)}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Consultation fee and follow up fee */}
                            <div className='md:flex gap-4 space-y-4 md:space-y-0'>
                                <div className='flex-1'>
                                    <label htmlFor="consultationFee" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Consultation fee <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='consultationFee' className='my-inp-2' placeholder="Min- 100, Max- 5000"  {...register("consultationFee", { required: true, min: 100, max: 5000 })} />
                                    {errors.consultationFee?.type === 'required' && (<p className="text-red-500">This field is required</p>)}
                                    {(errors.consultationFee?.type === 'min' || errors.consultationFee?.type === 'max') && (<p className="text-red-500">Consultation fee must be between 100 and 3000</p>)}
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="followupFee" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Follow up fee <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='followupFee' className='my-inp-2' placeholder='Follow up fee (Within 30 days)'  {...register("followupFee", { required: true, min: 100, max: watch("consultationFee") })} />
                                    {errors.followupFee?.type === 'required' && (<p className="text-red-500">This field is required</p>)}
                                    {(errors.followupFee?.type === 'min' || errors.followupFee?.type === 'max') && (<p className="text-red-500">Follow up fee must be between 100 and {watch("consultationFee") || 5000}</p>)}
                                </div>
                            </div>

                            {/* Educational excellent */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Educational excellent */}
                                <div className='flex-1'>
                                    <label className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Educational excellent <span className='text-secondary-main'>*</span></label>
                                    <input type="text" className={`my-inp-2`} placeholder='BSc (Psychology), MPhil (Psychology), Diploma (Psychology) (UK), MS (Psychology)' {...register("educationalExcellent", { required: true })} />
                                    {errors.educationalExcellent && (<p className="text-red-500">This field is required</p>)}
                                </div>

                            </div>

                            {/* Email & currently working at */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Email */}
                                <div className='flex-1'>
                                    <label className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Email <span className='text-secondary-main'>*</span></label>
                                    <input type="email" value={user?.email} className={`my-inp-2 pointer-events-none opacity-50`} placeholder='Email' {...register("email")} />
                                </div>
                                {/* currently working at */}
                                <div className='flex-1'>
                                    <label htmlFor="current_workplace" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Working at</label>
                                    <input type="text" id='current_workplace' className='my-inp-2' placeholder="Enter your current workplace/hospital"  {...register("current_workplace")} />
                                </div>

                            </div>

                            {/* Date of birth & District */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Date of birth */}
                                <div className='flex-1'>
                                    <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Date of Birth <span className='text-secondary-main'>*</span></label>
                                    <DatePicker id='dateOfBirth' onChange={setDateOfBirth} value={dateOfBirth} className={'w-full rounded-lg'} />
                                    {!dateOfBirth && (<p className="text-red-500">This field is required</p>)}
                                </div>

                                {/* District */}
                                <div className='flex-1'>
                                    <label htmlFor="district" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> District <span className='text-secondary-main'>*</span></label>
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

                            {/* Total Experience & Gender */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Total Experience */}
                                <div className='flex-1'>
                                    <label htmlFor="total_experience" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Total Experience <span className='text-secondary-main'>*</span></label>
                                    <select id='total_experience' defaultValue={''} className='my-inp-2' {...register("total_experience", { required: true })}>
                                        <option value="" disabled>Total Experiences</option>
                                        {
                                            totalExperiences.map((item, ind) => {
                                                return <option key={ind} value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                    {errors.total_experience && (<p className="text-red-500">This field is required</p>)}
                                </div>

                                {/* Gender */}
                                <div className='flex-1'>
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Gender <span className='text-secondary-main'>*</span></label>
                                    <select id='gender' defaultValue={''} className='my-inp-2' {...register("gender", { required: true })}>
                                        <option value="" disabled>Gender</option>
                                        {
                                            ['Male', 'Female'].map((gender, ind) => {
                                                return <option key={ind} value={gender}>{gender}</option>
                                            })
                                        }
                                    </select>
                                    {errors.gender && (<p className="text-red-500">This field is required</p>)}
                                </div>
                            </div>

                            {/* Working experience */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>

                                {/* Working Experience */}
                                <div className='flex-1'>
                                    <label htmlFor="working_experience" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Working Experience </label>
                                    <div className='space-y-3'>
                                        {
                                            workingExperiences?.map((item, ind) => {
                                                return <div key={ind} className='flex items-center gap-2'>
                                                    <input type="text" id='weWorkplace' name='weWorkplace' className='my-inp-2' placeholder="Enter workplace/hospital" value={item?.weWorkplace} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    <input type="text" id='weDepartment' name='weDepartment' className='my-inp-2' placeholder="Enter department" value={item?.weDepartment} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    <input type="text" id='weDesignation' name='weDesignation' className='my-inp-2' placeholder="Enter working designation" value={item?.weDesignation} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    <input type="text" id='wePeriod' name='wePeriod' className='my-inp-2' placeholder="Enter working period" value={item?.wePeriod} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    {item?.id !== 1 && <span className='text-secondary-main cursor-pointer' onClick={() => handleRemoveWorkingExperience(item?.id)}><FaXmark /></span>}
                                                </div>
                                            })
                                        }
                                        <button onClick={() => handleAddWorkingExperiences()} className='my-btn-one' title='Add More Experience'><FaPlus /></button>
                                    </div>
                                </div>
                            </div>


                            {/* NID & BMDC */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* National ID */}
                                <div className='flex-1'>
                                    <label htmlFor="NID" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> National ID <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='NID' className='my-inp-2' placeholder='National ID' {...register("NID", { required: true })} />
                                    {errors.NID && (<p className="text-red-500">This field is required</p>)}
                                </div>

                                {/* BMDC */}
                                <div className='flex-1'>
                                    <label htmlFor="BMDC" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> BMDC <span className='text-secondary-main'>*</span></label>
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
                                                <span className="link-hover link-primary text-primary-main-2" onClick={() => document.getElementById('terms_modal').showModal()}> Terms and Condition  </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {errors.terms && (
                                    <p className="text-red-500">You need to checked terms & condition!</p>
                                )}
                            </div>

                            <button className={`my-btn-two ${(authLoading || loading) && 'opacity-50'}`} type='submit' disabled={authLoading || loading}>Signup</button>

                        </form>
                }

            </div>
            <TermsModal></TermsModal>
        </div>
    );
};

export default RegistrationDoctorPage;