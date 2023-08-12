import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import React from 'react';
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import about1 from '/public/assets/img/Homepage/About/about1.jpg'
import about2 from '/public/assets/img/Homepage/About/about2.jpg'
import about3 from '/public/assets/img/Homepage/About/about3.jpg'
import about4 from '/public/assets/img/Homepage/About/about4.jpg'
import Image from 'next/image';


const AboutUs = () => {
    return (
        <div className='my-container pt-24 pb-36'>
            <div className='grid grid-cols-2 gap-8'>
                {/* About us left */}
                <div className='flex items-center relative'>
                    <Image src={about1} alt='about1' height='auto'></Image>
                    <figure className='absolute -left-28 -bottom-24'>
                        <Image src={about2} alt='about2' width='300' height='300'></Image>
                    </figure>
                    <figure className='absolute -left-28 -top-24'>
                        <Image src={about3} alt='about3' width='300' height='300'></Image>
                    </figure>
                    {/* <Image src={about4} alt='about4' width='40%' height='auto'></Image> */}
                </div>


                {/* About us right */}
                <div className='space-y-5'>
                    <CommonSectionTitle title={'Your Health, Our Priority'} subTitle={'About us'}></CommonSectionTitle>
                    <p>Our goal is to eliminate or control disabling or troubling symptoms so the patient can function better. This treatment involves a talking relationship between a therapist & patient.</p>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='space-y-4 flex flex-col justify-between'>
                            <ul className='space-y-4 pb-7 border-b border-slate-200'>
                                <li className='flex items-center gap-2 font-semibold text-slate-500'> <span className='text-primary'><FaArrowRight /></span> We{"'"}re here to help you feel better.</li>
                                <li className='flex items-center gap-2 font-semibold text-slate-500'> <span className='text-primary'><FaArrowRight /></span> Your health is important.</li>
                                <li className='flex items-center gap-2 font-semibold text-slate-500'> <span className='text-primary'><FaArrowRight /></span> Trust us with your care.</li>
                                <li className='flex items-center gap-2 font-semibold text-slate-500'> <span className='text-primary'><FaArrowRight /></span> Your health is our goal.</li>
                            </ul>
                            <div className='flex gap-4'>
                                <span className='bg-primary text-white p-4 rounded-full'><FaPhone></FaPhone></span>
                                <div>
                                    <p className='font-semibold text-slate-500'>Feel free to contact us here</p>
                                    <h3>+880170678-5160</h3>
                                </div>
                            </div>
                        </div>

                        <div className='bg-blue-100 rounded text-center my-shadow p-8 space-y-4'>
                            <span className='my-title text-primary'>100%</span>
                            <p className='my-subtitle'>Satisfaction guarantees</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;