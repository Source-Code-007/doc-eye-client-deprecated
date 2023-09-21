'use client'
import React from 'react';
import areYouDoctorBanner from '/public/assets/img/areYouDoctor.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const ForDoctorsPage = () => {


    const doctorsReviews = [
        {
            id: 1,
            doctorName: "Dr. Emily Johnson",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTclBNN9eDwLvwUXKKlVNRM17KlxH4cQALEw&usqp=CAU",
            designation: "Cardiologist",
            review: "DocEye is an incredible platform! It has made finding the right doctor so easy. I appreciate the user-friendly interface and the wealth of information available."
        },
        {
            id: 2,
            doctorName: "Dr. Michael Anderson",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnebrXWR9QrstpZpUegAwb6IAI_dwKc9DEw&usqp=CAU",
            designation: "Pediatrician",
            review: "I've been using DocEye for a while now, and it's been a valuable resource. The search filters make it simple to find doctors in my area. Great job!"
        },
        {
            id: 3,
            doctorName: "Dr. Sarah Patel",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdhF6VxejYogtSE7zG62kCvZAIDF-4lbJOQ&usqp=CAU",
            designation: "Dermatologist",
            review: "As a healthcare professional, I find DocEye to be a helpful tool in connecting with colleagues and staying updated on medical advancements. It's an excellent platform for doctors."
        },
        {
            id: 4,
            doctorName: "Dr. James Smith",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaBZtrWnm0cphFunwJl_okJZ0uMELfuGbaQ&usqp=CAU",
            designation: "Orthopedic Surgeon",
            review: "I recently discovered DocEye, and it's already become my go-to for medical information. The articles and forums are informative, and the community is supportive."
        },
        {
            id: 5,
            doctorName: "Dr. Maria Garcia",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1TyJQ03YBov4qQVoKkDJabOZejHbcKdy5g&usqp=CAU",
            designation: "OB/GYN",
            review: "DocEye has been a lifesaver for me. I found a fantastic specialist for my condition through the platform, and the appointment booking feature is super convenient."
        },
        {
            id: 6,
            doctorName: "Dr. John Williams",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZzEpp-d9NprFlXmFWX6lPQF210LQwAUOlucpIiL1o_S-zc6bmfjdKupzD1paGMLRQrs&usqp=CAU",
            designation: "Psychiatrist",
            review: "DocEye simplifies appointment scheduling, both for my patients and me. The user-friendly interface allows patients to book appointments online easily, reducing phone calls and administrative tasks."
        },
        {
            id: 7,
            doctorName: "Dr. Laura Davis",
            doctorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSwkFVxLzEPl3udFM2J8PFMMeFQylSLsGqg&usqp=CAU",
            designation: "Family Physician",
            review: "As a practicing physician, I've had the privilege of using DocEye, and I can confidently say that it has revolutionized the way I manage my medical practice. This doctor portal website offers a comprehensive suite of features tailored to the unique needs of healthcare."
        }
    ];


    return (
        <div className=''>

            {/* banner */}
            <div className='h-[93vh] bg-cover bg-center bg-slate-600 bg-blend-overlay' style={{ backgroundImage: `url(${areYouDoctorBanner.src})` }}>
                <div className='my-container h-full flex flex-col justify-center gap-5 text-black'>
                    <h2 className='my-title'>Are you <br /> A Certified Doctor?</h2>
                    <h6 className='my-subtitle'>Join Our Healthcare Network</h6>
                    <p className='pr-20 md:pr-[520px] xl:pr-[830px]'>Join DocEye network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service. As a member of our healthcare network, you{"'"}ll gain access to a wealth of medical knowledge, research, and the latest advancements in the field.</p>
                    <Link href={'/registration-doctor'}>
                        <button className='my-btn-two w-fit'>Join now</button>
                    </Link>

                </div>
                <div>

                </div>
            </div>


            <div className='my-container py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                <div className='space-y-4'>
                    <h2 className='my-subtitle'>Benefits of joining</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda dolorum, neque illo ullam minima alias atque dicta suscipit! Quia sapiente cumque autem ab. Quas laborum quidem quisquam temporibus optio voluptas aliquid, nostrum voluptatum molestias minus consequatur? In modi mollitia ipsa itaque ipsam praesentium commodi quam maxime, sint error asperiores.</p>
                </div>

                <div className='p-8'>
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {
                            doctorsReviews.map(dr => {
                                return <SwiperSlide key={dr.id} className=' bg-white p-5'>
                                    <div className='my-shadow-2 p-5 space-y-4 rounded-lg min-h-[300px]'>
                                        <div className='flex gap-4'>
                                            <figure className='h-20 w-20 relative'>
                                                <Image src={dr.doctorImg} alt={dr.doctorName} fill={true} className='rounded-full border border-[#E57373]'></Image>
                                            </figure>
                                            <div>
                                                <h2>{dr.doctorName}</h2>
                                                <p>{dr.designation}</p>
                                            </div>
                                        </div>
                                        <p className='leading-relaxed'>{dr.review}</p>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ForDoctorsPage;