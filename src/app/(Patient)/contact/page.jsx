import React from 'react';
import contactBanner from '/public/assets/img/contactBannerOne.jpg'
import CommonBanner from '@/Components/HelpingCompo/CommonBanner';
import { FaLocationArrow, FaMessage, FaPhone } from 'react-icons/fa6';
import Link from 'next/link';
import MyMotion from '@/Components/HelpingCompo/MyMotion';

const ContactPage = () => {
    return (
        <div className='pb-20'>
            <CommonBanner img={contactBanner} title={'Contact with us'} subtitle={'Leading the way in daily healthcare excellence'}></CommonBanner>
            <div className='my-container'>

                {/* contact box */}
                <MyMotion delay={.2} scale={1.2}>
                    <div className='bg-[#07332F] rounded px-8 py-6 grid grid-cols-12 gap-4 text-slate-100 relative -top-24'>
                        {/* contact box left */}
                        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                            <h2 className='my-subtitle !text-3xl mb-8'>Contact With Us</h2>

                            <div className='space-y-6'>
                                <p>At DocWatch, we value your feedback, questions, and concerns. Our dedicated team is here to assist you with any inquiries you may have about our services, medical information, or website functionality</p>
                                <h2 className='my-subtitle flex items-center gap-4 text-slate-200'> <FaPhone className='text-secondary'></FaPhone> +880170678-5160</h2>
                                <h2 className='my-subtitle flex items-center gap-4 text-slate-200'> <FaMessage className='text-secondary'></FaMessage> utsho926@gmail.com</h2>
                                <h2 className='my-subtitle flex items-center gap-4 text-slate-200'> <FaLocationArrow className='text-secondary'></FaLocationArrow> Badda, Dhaka</h2>
                                <p className='text-slate-100'>Working Time: <span className='text-slate-300'>Mon - Sat / 12:00 AM - 12:00 PM  <br /> Sunday / 10:00 AM - 08:00 PM</span></p>

                            </div>
                        </div>

                        {/* contact box right */}
                        <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                            <h2 className='my-subtitle !text-3xl mb-8'>Request appointment</h2>
                            <div className='space-y-5'>

                                <div className='flex gap-4'>
                                    <input type="text" className='my-inp-2' placeholder='Name' />
                                    <input type="text" className='my-inp-2' placeholder='Email' />
                                </div>
                                <div className='flex gap-4'>
                                    <input type="text" className='my-inp-2' placeholder='Mobile' />
                                    <input type="text" className='my-inp-2' placeholder='Doctor' />
                                </div>
                                <div className='flex gap-4'>
                                    <input type="text" className='rounded-lg px-4 py-3 outline-none focus:border-l-2 focus:border-[#E57373] w-full' placeholder='Date' style={{ background: 'rgba(255, 255, 255, 0.05)' }} />
                                    <input type="text" className='my-inp-2' placeholder='Time' />
                                </div>
                                <textarea type="text" placeholder="your query here..." className="my-inp-2 h-52" />

                                <div className='text-center'>
                                    <button className='my-btn-two w-3/6'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MyMotion>

                {/* Get help quickly FAQ */}
                <MyMotion delay={.1} scale={.8}>
                    <div className='border-t-4 border-[#E57373] w-full md:w-5/6 mx-auto my-shadow p-5 space-y-5'>
                        <div className='text-center px-4 md:px-14 space-y-3'>
                            <h2 className='my-subtitle !text-3xl'>Get help quickly</h2>
                            <p className='text-xl'>Browse our most frequently asked questions (FAQs) for quick answers about Doctor On Demand and our services.</p>
                        </div>
                        <ul className='list-disc pl-5'>
                            <li>General Questions</li>
                            <li>Excuse Notes & Medical Records</li>
                            <li>Payment, Insurance & Billing</li>
                            <li>Prescriptions & Pharmacy</li>
                            <li>Troubleshooting</li>
                            <li>Managing my Account</li>
                        </ul>
                        <Link href={'/faq'} className='inline-block'> <button className='my-btn-one'>FAQ</button> </Link>
                    </div>
                </MyMotion>

            </div>
        </div>
    );
};

export default ContactPage;