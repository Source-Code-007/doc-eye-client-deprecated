import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import CountUp from 'react-countup';
import successfulPatient from '../../../../public/assets/img/Homepage/Testimonial/successful-patient.png'
import doctorSpecialist from '../../../../public/assets/img/Homepage/Testimonial/doctor-specialist.png'
import healthServices from '../../../../public/assets/img/Homepage/Testimonial/healthServices.png'



const Testimonial = () => {

    const testimonials = [
        {
            name: "Sarah Johnson",
            designation: "Patient",
            photo: "https://i.ibb.co/Sm7LJjh/pexels-andrea-piacquadio-774909-removebg-preview.png",
            message: "I'm truly grateful for the exceptional care I received from the doctors here. Their expertise and compassionate approach made my recovery journey smooth and reassuring."
        },
        {
            name: "Dr. Alex Parker",
            designation: "Specialist",
            photo: "https://i.ibb.co/H7m3nmY/business-academy-lecturer-man-formal-clothes-hold-notepad-white-explain-business-topic-business-scho.jpg",
            message: "Being part of this healthcare team has been incredibly rewarding. Witnessing patients regain their health and smile is a reminder of why I chose this profession."
        },
        {
            name: "David Lee",
            designation: "Patient's Family",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCM5-3zQr2GG22CzIJbBnhYOTMTzVU7sVWlZhvpjBnyRxDhnRYGIDS07FkPzOTg0VM48&usqp=CAU",
            message: "The doctors went above and beyond to ensure my mother's comfort during her treatment. Their dedication and support made a challenging time more manageable."
        },
        {
            name: "Emily Turner",
            designation: "Patient",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&usqp=CAU",
            message: "The doctor's personalized care and attention to detail made me feel heard and valued as a patient. I couldn't have asked for a better healthcare experience."
        },
        {
            name: "Dr. Sophia Mitchell",
            designation: "Surgeon",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkAkDkyXCzErdPKvQbrwYySzZ_k9I4f1HfQ&usqp=CAU",
            message: "Every surgical procedure presents unique challenges. It's incredibly fulfilling to contribute to patients' well-being and recovery, and to see them return to their lives."
        },
        {
            name: "Michael Carter",
            designation: "Patient's Friend",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vldhezhiZE_ZX6qTp9U8TFFXAJ4f7mMYyw&usqp=CAU",
            message: "I've witnessed the transformation in my friend's health under the care of these doctors. Their commitment to healing extends not only to patients but to loved ones as well."
        }
    ];
    const testimonialsCounterUp = [
        {
            img: successfulPatient,
            title: 'Happy patient',
            number: 2500
        },
        {
            img: doctorSpecialist,
            title: 'Specialist available',
            number: 120
        },
        {
            img: healthServices,
            title: 'Health services',
            number: 160
        },
    ]

    
    return (
        <div className='py-24'>
            <div className='my-container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
                {/* Testimonial left */}
                <div className='space-y-8'>
                    <CommonSectionTitle title={'What Our Patients Says'} subTitle={'Testimonial'}></CommonSectionTitle>
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper !pb-[120px]"
                    >
                        {
                            testimonials.map((testimonial, ind) => {
                                return <SwiperSlide key={ind} className='space-y-8'>
                                    <div className='flex flex-col gap-3'>
                                        <span className='text-lg md:text-3xl'><FaQuoteLeft></FaQuoteLeft></span>
                                        <p className='text-slate-700 '>{testimonial.message}</p>
                                        <span className='text-lg md:text-3xl mx-auto'><FaQuoteRight></FaQuoteRight></span>
                                    </div>
                                    <div className='flex gap-4'>
                                        <figure className='h-20 w-20 relative'>
                                            <Image src={testimonial.photo} alt={testimonial.name} fill={true} className='rounded-full border border-[#E57373]'></Image>
                                        </figure>
                                        <div className='flex flex-col gap-3 justify-center'>
                                            <h2 className='my-subtitle'>{testimonial.name}</h2>
                                            <p className='text-secondary font-semibold'>{testimonial.designation}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>

                {/* Testimonial right */}
                <div className='flex items-center justify-center'>
                    <div className='rounded-xl p-16 bg-secondary flex flex-col gap-6 items-center justify-center'>
                        {testimonialsCounterUp.map((tcu, ind) => {
                            return <div key={ind} className='w-full flex gap-6'>
                                <figure className='h-16 w-16 relative'>
                                    <Image src={tcu.img} alt={tcu.title} fill={true}></Image>
                                </figure>
                                <div className='text-slate-50 space-y-2'>
                                    <span className='flex gap-1 items-center my-subtitle'><CountUp
                                        start={0}
                                        end={tcu.number}
                                        duration={2.75}
                                        enableScrollSpy={true}
                                    /> <span>+</span></span>
                                    <h2>{tcu.title}</h2>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;