import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import React from 'react';
import { FaArrowRight, FaList, FaPhone, IconName } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <div className='my-container'>
            <div className='grid grid-cols-2'>
                <div></div>

                {/* About us right */}
                <div className='space-y-5'>
                    <CommonSectionTitle title={'Your Health, Our Priority'} subTitle={'About us'}></CommonSectionTitle>
                    <p>Our goal is to eliminate or control disabling or troubling symptoms so the patient can function better. This treatment involves a talking relationship between a therapist & patient.</p>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='space-y-4 flex flex-col justify-between'>
                            <ul className='space-y-4 pb-7 border-b border-slate-200'>
                                <li className='flex items-center gap-2 font-semibold text-slate-500'> <span className='text-primary'><FaArrowRight /></span> We're here to help you feel better.</li>
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

                        <div className='bg-blue-100 rounded text-center shadow-lg p-8 space-y-4'>
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