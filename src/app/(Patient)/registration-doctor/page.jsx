'use client'
import React, { useState } from 'react';
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
import useSpecialtiesData from '@/Hooks/useData/useSpecialtiesData';
import Swal from 'sweetalert2';
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import { useRouter } from 'next/navigation';



const RegistrationDoctorPage = () => {
    const [dateOfBirth, setDateOfBirth] = useState();
    const [availabilityTimeStart, setAvailabilityTimeStart] = useState()
    const [availabilityTimeEnd, setAvailabilityTimeEnd] = useState()
    const [loading, setLoading] = useState(false)
    const { user, authLoading } = useAuth()
    const { medicalSpecialties, medicalSpecialtiesLoading } = useSpecialtiesData()
    const axiosSecure = useAxiosSecure()
    const [myErrors, setMyErrors] = useState(null)
    const router = useRouter()

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



    // Manage working experiences
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
        formState: { errors, isSubmitted },
    } = useForm();
    const handleSignupFunc = (form) => {
        setMyErrors(null)
        setLoading(true);
        const { title, doctorType, bio, medical_specialty, total_experience, medical_degree, consultationFee, availabilityDayStart, availabilityDayEnd, followupFee, current_workplace, district } = form;

        const availability = { availabilityDayStart, availabilityDayEnd, availabilityTimeStart, availabilityTimeEnd }

        const newDoctor = { title, doctorType, bio, medical_specialty, total_experience, medical_degree, consultationFee, followupFee, workingExperiences, dateOfBirth, current_workplace, availability, district }


        console.log(newDoctor);


        axiosSecure
            .post("/doctor/doctor-register", newDoctor)
            .then((res) => {
                if (res.data) {
                    setLoading(false);
                    console.log(res.data);

                    Swal.fire({
                        title: "Doctor registration successful. Please wait for admin verification!",
                        html: "I will land homepage after <b></b> milliseconds.",
                        timer: 1500,
                        timerProgressBar: true,
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            router.push("/");
                            console.log("I was closed by the timer");
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error.response?.data?.errors, 'err from register doctor')
                setLoading(false)
                setMyErrors(error.response?.data?.errors)
            });
    };

    // console.log(availabilityTimeStart, 'availabilityTimeStart');
    // console.log(dateOfBirth, 'dateOfBirth');

    return (
        <div className='bg-cover bg-center bg-slate-700 bg-blend-overlay registrationDoctorParent' style={{ backgroundImage: `url(${doctorRegistrationBg.src})` }}>
            <div className='min-h-[93vh] py-5 my-container-2'>
                {
                    authLoading || medicalSpecialtiesLoading ? <div className='flex-1 self-start'> <Skeleton className='block py-2 h-[800px]' count={1} /></div> :
                        <form action="" className='rounded p-5 md:p-10 space-y-3 bg-[#07332Fgg] bg-slate-800 bg-opacity-70' onSubmit={handleSubmit(handleSignupFunc)}>
                            <h2 className='my-subtitle text-white'>Doctor Registration</h2>

                            {/* Title and doctor type */}
                            <div className='md:flex gap-4 space-y-4 md:space-y-0'>

                                {/* Title */}
                                <div className='flex-1'>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Title <span className='text-secondary-main'>*</span> </label>
                                    <select defaultValue={''} id='title' className='my-inp' {...register("title", { required: true })}>
                                        <option value="" disabled>Title</option>
                                        {["Dr.", "Prof. Dr.", "Assoc. Prof. Dr.", "Asst. Prof. Dr."].map((elem, ind) => <option key={ind} value={elem}>{elem}</option>)}
                                    </select>
                                    {errors.title ? <p className="text-red-500">*This field is required</p> : myErrors?.title && <span className='text-red-500'>*{myErrors?.title?.msg}</span>}
                                </div>

                                {/* Doctor Type */}
                                <div className='flex-1'>
                                    <label htmlFor="doctorType" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Doctor Type <span className='text-secondary-main'>*</span></label>
                                    <select defaultValue={''} id='doctorType' className='my-inp' {...register("doctorType", { required: true })}>
                                        { }
                                        <option value="" disabled>Doctor Type</option>
                                        {["Medical", "Dental", "Veterinary"].map((elem, ind) => <option key={ind} value={elem}>{elem}</option>)}
                                    </select>
                                    {errors.doctorType ? <p className="text-red-500">*This field is required</p> : myErrors?.doctorType && <span className='text-red-500'>*{myErrors?.doctorType?.msg}</span>}
                                </div>
                            </div>


                            {/* Medical specialty */}
                            <div className='flex-1'>
                                <label htmlFor="medical_specialty" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Medical specialty <span className='text-secondary-main'>*</span> </label>
                                {medicalSpecialties?.length > 0 ? <><div className='flex flex-wrap items-center gap-2'>
                                    {
                                        medicalSpecialties.map((elem, ind) => {
                                            const { specialtyName } = elem
                                            return <div key={ind} className="form-control">
                                                <label className="cursor-pointer label">
                                                    <input type="checkbox" name='medical_specialty' {...register('medical_specialty', { required: true })} value={specialtyName} className="checkbox checkbox-error mx-1" />
                                                    <span className="label-text !text-white">{specialtyName}</span>
                                                </label>
                                            </div>
                                        })
                                    }
                                </div>
                                    {errors.medical_specialty ? <p className='text-red-500'>*Medical specialty is required</p> : myErrors?.medical_specialty && <span className='text-red-500'>*{myErrors?.medical_specialty?.msg}</span>}
                                </> : <p className='text-white font-bold'>No medical specialties found</p>}
                            </div>

                            {/* Bio */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Bio */}
                                <div className='flex-1'>
                                    <label htmlFor="bio" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Bio <span className='text-secondary-main'>*</span></label>
                                    <textarea id='bio' className='my-inp h-[150px]' placeholder="Write something about you."  {...register("bio", { required: true })} />
                                    {errors.bio ? <p className="text-red-500">*This field is required</p> : myErrors?.bio && <span className='text-red-500'>*{myErrors?.bio?.msg}</span>}
                                </div>
                            </div>


                            {/* Availability */}
                            <div className='!my-6'>
                                <h2 className='font-semibold text-md xl:text-lg text-white mb-2'>Availability</h2>

                                <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>


                                    {/* Availability days */}
                                    <div className='flex-1'>
                                        <div className='md:flex gap-4 space-y-4 md:space-y-0'>
                                            {/* Availability day start */}
                                            <div className='flex-1'>
                                                <label htmlFor="availabilityDayStart" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Availability day start <span className='text-secondary-main'>*</span></label>
                                                <select id='availabilityDayStart' defaultValue={''} className='my-inp' {...register("availabilityDayStart", { required: true })}>
                                                    <option value="">Availability day start</option>
                                                    {
                                                        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((item, ind) => {
                                                            return <option key={ind} value={item}>{item}</option>
                                                        })
                                                    }
                                                </select>
                                                {errors.availabilityDayStart ? <p className="text-red-500">*This field is required</p> : myErrors?.availabilityDayStart && <span className='text-red-500'>*{myErrors?.availabilityDayStart?.msg}</span>}
                                            </div>
                                            {/* Availability day end */}
                                            <div className='flex-1'>
                                                <label htmlFor="availabilityDayEnd" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Availability day end <span className='text-secondary-main'>*</span></label>
                                                <select id='availabilityDayEnd' defaultValue={''} className='my-inp' {...register("availabilityDayEnd", { required: true })}>
                                                    <option value="">Availability day end</option>
                                                    {
                                                        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((item, ind) => {
                                                            return <option key={ind} value={item}>{item}</option>
                                                        })
                                                    }
                                                </select>
                                                {errors.availabilityDayEnd ? <p className="text-red-500">*This field is required</p> : myErrors?.availabilityDayEnd && <span className='text-red-500'>*{myErrors?.availabilityDayEnd?.msg}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Availability times */}
                                    <div className='flex-1'>
                                        <div className='md:flex gap-4 space-y-4 md:space-y-0'>
                                            <div className='flex-1'>
                                                <label htmlFor="availabilityTimeStart" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Time start <span className='text-secondary-main'>*</span></label>
                                                <TimePicker id='availabilityTimeStart' onChange={setAvailabilityTimeStart} value={availabilityTimeStart} className={'w-full rounded-lg'} />
                                                {isSubmitted && !availabilityTimeStart ? <p className="text-red-500">*This field is required</p> : myErrors?.availabilityTimeStart && <span className='text-red-500'>*{myErrors?.availabilityTimeStart?.msg}</span>}
                                            </div>
                                            <div className='flex-1'>
                                                <label htmlFor="availabilityTimeEnd" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Time end <span className='text-secondary-main'>*</span></label>
                                                <TimePicker id='availabilityTimeEnd' onChange={setAvailabilityTimeEnd} value={availabilityTimeEnd} className={'w-full rounded-lg'} />
                                                {isSubmitted && !availabilityTimeEnd ? <p className="text-red-500">*This field is required</p> : myErrors?.availabilityTimeEnd && <span className='text-red-500'>*{myErrors?.availabilityTimeEnd?.msg}</span>}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Consultation fee and follow up fee */}
                            <div className='md:flex gap-4 space-y-4 md:space-y-0'>
                                <div className='flex-1'>
                                    <label htmlFor="consultationFee" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Consultation fee <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='consultationFee' className='my-inp' placeholder="Min- 100, Max- 5000"  {...register("consultationFee", { required: true, min: 100, max: 5000 })} />
                                    {errors.consultationFee?.type === 'required' ? <p className="text-red-500">*This field is required</p>
                                        : (errors.consultationFee?.type === 'min' || errors.consultationFee?.type === 'max') ? <p className="text-red-500">*Consultation fee must be between 100 and 3000</p> : myErrors?.consultationFee && <span className='text-red-500'>*{myErrors?.consultationFee?.msg}</span>}
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="followupFee" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Follow up fee <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='followupFee' className='my-inp' placeholder='Follow up fee (Within 30 days)'  {...register("followupFee", { required: true, min: 100, max: watch("consultationFee") })} />
                                    {errors.followupFee?.type === 'required' ? <p className="text-red-500">*This field is required</p>
                                        : (errors.followupFee?.type === 'min' || errors.followupFee?.type === 'max') ? <p className="text-red-500">*Follow up fee must be between 100 and {watch("consultationFee") || 5000}</p> : myErrors?.followupFee && <span className='text-red-500'>*{myErrors?.followupFee?.msg}</span>}
                                </div>
                            </div>

                            {/* Medical degree and total experience*/}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>

                                {/* Medical degree */}
                                <div className='flex-1'>
                                    <label htmlFor='medical_degree' className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Medical degree <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='medical_degree' className={`my-inp`} placeholder='MBBS, BCS (Health)' {...register("medical_degree", { required: true })} />
                                    {errors.medical_degree ? <p className="text-red-500">*This field is required</p> : myErrors?.medical_degree && <span className='text-red-500'>*{myErrors?.medical_degree?.msg}</span>}
                                </div>

                                {/* Total Experience */}
                                <div className='flex-1'>
                                    <label htmlFor="total_experience" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Total Experience <span className='text-secondary-main'>*</span></label>
                                    <select id='total_experience' defaultValue={''} className='my-inp' {...register("total_experience", { required: true })}>
                                        <option value="" disabled>Total Experiences</option>
                                        {
                                            totalExperiences.map((item, ind) => {
                                                return <option key={ind} value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                    {errors.total_experience ? <p className="text-red-500">*This field is required</p> : myErrors?.total_experience && <span className='text-red-500'>*{myErrors?.total_experience?.msg}</span>}
                                </div>

                            </div>


                            {/* Email & currently working at */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Email */}
                                <div className='flex-1'>
                                    <label className="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Email <span className='text-secondary-main'>*</span></label>
                                    <input type="email" value={user?.email} className={`my-inp pointer-events-none opacity-50`} placeholder='Email' />
                                </div>
                                {/* currently working at */}
                                <div className='flex-1'>
                                    <label htmlFor="current_workplace" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Working at</label>
                                    <input type="text" id='current_workplace' className='my-inp' placeholder="Enter your current workplace/hospital"  {...register("current_workplace", { required: true })} />
                                    {errors.current_workplace ? <p className="text-red-500">*This field is required</p> : myErrors?.current_workplace && <span className='text-red-500'>*{myErrors?.current_workplace?.msg}</span>}
                                </div>

                            </div>

                            {/* Date of birth & District */}
                            <div className='xl:flex gap-4 space-y-4 xl:space-y-0'>
                                {/* Date of birth */}
                                <div className='flex-1'>
                                    <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> Date of Birth <span className='text-secondary-main'>*</span></label>
                                    <DatePicker id='dateOfBirth' onChange={setDateOfBirth} value={dateOfBirth} className={'w-full rounded-lg'} />
                                    {isSubmitted && !dateOfBirth ? <p className="text-red-500">*This field is required</p> : myErrors?.dateOfBirth && <span className='text-red-500'>*{myErrors?.dateOfBirth?.msg}</span>}
                                </div>

                                {/* District */}
                                <div className='flex-1'>
                                    <label htmlFor="district" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> District <span className='text-secondary-main'>*</span></label>
                                    <select id='district' defaultValue={''} className='my-inp' {...register("district", { required: true })}>
                                        <option value="" disabled>District</option>
                                        {
                                            districtsOfBangladesh.map((district, ind) => {
                                                return <option key={ind} value={district}>{district}</option>
                                            })
                                        }
                                    </select>
                                    {errors.district ? <p className="text-red-500">*This field is required</p> : myErrors?.district && <span className='text-red-500'>*{myErrors?.district?.msg}</span>}
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
                                                    <input type="text" id='weWorkplace' name='weWorkplace' className='my-inp' placeholder="Enter workplace/hospital" value={item?.weWorkplace} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    <input type="text" id='weDepartment' name='weDepartment' className='my-inp' placeholder="Enter department" value={item?.weDepartment} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    <input type="text" id='weDesignation' name='weDesignation' className='my-inp' placeholder="Enter working designation" value={item?.weDesignation} onChange={(e) => handleWorkingExperiences(ind, e)} />
                                                    <input type="text" id='wePeriod' name='wePeriod' className='my-inp' placeholder="Enter working period" value={item?.wePeriod} onChange={(e) => handleWorkingExperiences(ind, e)} />
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
                                    <input type="text" id='NID' className='my-inp' placeholder='National ID' {...register("NID", { required: true })} />
                                    {errors.NID ? <p className="text-red-500">*This field is required</p> : myErrors?.NID && <span className='text-red-500'>*{myErrors?.NID?.msg}</span>}
                                </div>

                                {/* BMDC */}
                                <div className='flex-1'>
                                    <label htmlFor="BMDC" className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"> BMDC <span className='text-secondary-main'>*</span></label>
                                    <input type="text" id='BMDC' className='my-inp' placeholder='Registration Number BMDC' {...register("BMDC", { required: true })} />
                                    {errors.BMDC ? <p className="text-red-500">*This field is required</p> : myErrors?.BMDC && <span className='text-red-500'>*{myErrors?.BMDC?.msg}</span>}
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

                            <button className={`${(authLoading || loading) ? 'my-disable-btn-two' : 'my-btn-two'}`} type='submit' disabled={authLoading || loading}>Register</button>

                        </form>
                }

            </div>
            <TermsModal></TermsModal>
        </div>
    );
};

export default RegistrationDoctorPage;