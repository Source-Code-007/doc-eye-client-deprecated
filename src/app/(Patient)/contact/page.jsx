import React from 'react';
import contactBanner from '/public/assets/img/contactBannerOne.jpg'
import CommonBanner from '@/Components/HelpingCompo/CommonBanner';
import { FaMessage, FaPhone } from 'react-icons/fa6';

const ContactPage = () => {
    return (
        <div className=''>
            <CommonBanner img={contactBanner} title={'Contact with us'} subtitle={'Leading the way in daily healthcare excellence'}></CommonBanner>
            <div className='my-container'>
                <div className='bg-[#07332F] rounded px-8 py-6 grid grid-cols-12 gap-4 text-slate-100 relative -top-24'>
                    {/* contact box left */}
                    <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                        <h2 className='my-subtitle !text-3xl mb-8'>Contact With Us</h2>

                        <div className='space-y-6'>
                            <p>At DocWatch, we value your feedback, questions, and concerns. Our dedicated team is here to assist you with any inquiries you may have about our services, medical information, or website functionality</p>
                            <h2 className='my-subtitle flex items-center gap-4'> <FaPhone className='text-secondary'></FaPhone> +880170678-5160</h2>
                            <h2 className='my-subtitle flex items-center gap-4'> <FaMessage className='text-secondary'></FaMessage> utsho926@gmail.com</h2>
                            <p className='text-slate-100'>Working Time: <span className='text-slate-300'>Mon - Sat / 12:00 AM - 12:00 PM  <br /> Sunday / 10:00 AM - 08:00 PM</span></p>

                        </div>
                    </div>

                    {/* contact box right */}
                    <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                        <h2 className='my-subtitle !text-3xl mb-8'>Request appointment</h2>
                        <div className='space-y-5'>

                            <div className='flex gap-4'>
                                <input type="text" className='contact-inp' placeholder='Name' />
                                <input type="text" className='contact-inp' placeholder='Email' />
                            </div>
                            <div className='flex gap-4'>
                                <input type="text" className='contact-inp' placeholder='Mobile' />
                                <input type="text" className='contact-inp' placeholder='Doctor' />
                            </div>
                            <div className='flex gap-4'>
                                <input type="text" className='rounded-lg px-4 py-3 outline-none focus:border-l-2 focus:border-[#E57373] w-full' placeholder='Date' style={{ background: 'rgba(255, 255, 255, 0.05)' }} />
                                <input type="text" className='contact-inp' placeholder='Time' />
                            </div>
                            <textarea type="text" placeholder="your query here..." className="contact-inp h-52" />

                            <div className='text-center'>
                                <button className='my-btn-two w-3/6'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi impedit voluptas debitis expedita aspernatur ullam magnam esse sed mollitia, ipsam veniam fuga numquam doloribus. Dolorem ratione repellendus sed libero saepe.
            </div>
        </div>
    );
};

export default ContactPage;