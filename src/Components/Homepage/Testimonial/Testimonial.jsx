import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';

const Testimonial = () => {
    return (
        <div>
            <div className='my-container grid grid-cols-1 lg:grid-cols-2'>
                {/* Testimonial left */}
                <div>
                    <CommonSectionTitle title={'What Our Patients Say About Us'} subTitle={'Testimonial'}></CommonSectionTitle>
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-screen"
                    >
                        <SwiperSlide className='h-full'>Slide 1</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 2</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 3</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 4</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 5</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 6</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 7</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 8</SwiperSlide>
                        <SwiperSlide className='h-full'>Slide 9</SwiperSlide>
                    </Swiper>
                </div>

                {/* Testimonial right */}
                <div>

                </div>

            </div>
        </div>
    );
};

export default Testimonial;