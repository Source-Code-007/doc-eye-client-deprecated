import React from 'react';
import logo from '/public/assets/img/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import DownloadOnGooglePlay from '/public/assets/img/Homepage/AppSection/DownloadOnGooglePlay.png'
import DownloadOnAppStore from '/public/assets/img/Homepage/AppSection/DownloadOnAppStore.png'
import { FaAngleRight, FaFacebook, FaInstagram, FaLocationArrow, FaMessage, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa6';


const Footer = () => {

    const footerLink = [{link:'about', text:'About us'}, {link:'services', text:'Services'}, {link:'appointment', text:'Appointment'}, {link:'blogs', text:'Blogs'}, {link:'contact-us', text:'FAQ'}, {link:'terms', text:'Terms of use'}, {link:'doctor-portal', text:'Doctor Portal'}, {link:'patient-portal', text:'Patient Portal'}]

    return (
        <div className='bg-[#09528C] bg-opacity-20 footer-top'>
            {/* Footer top */}
            <div className='my-container grid gap-10 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-20'>

                {/* Contact info */}
                <div className='space-y-4'>
                    <Link href={'/'} className='font-bold text-xl flex gap-3 items-center'><Image height={40} width={40} src={logo} alt='DocEye'></Image> <span className='flex'>Doc<span className='text-secondary'>Watch</span></span></Link>
                    <p className='flex items-center gap-3'><span className='inline-block p-3 bg-slate-900 text-slate-50 rounded-full'><FaPhone></FaPhone></span> 0170678-5160</p>
                    <p className='flex items-center gap-3'><span className='inline-block p-3 bg-slate-900 text-slate-50 rounded-full'><FaMessage></FaMessage></span> utsho926@gmail.com</p>
                    <p className='flex items-center gap-3'><span className='inline-block p-3 bg-slate-900 text-slate-50 rounded-full'><FaLocationArrow></FaLocationArrow></span> 25/fa/3 Satarkul, Badda, Dhaka, Bangladesh</p>
                    <div className='flex gap-3'>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50 cursor-pointer hover:scale-110 transition'><FaFacebook></FaFacebook></span>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50 cursor-pointer hover:scale-110 transition'><FaTwitter></FaTwitter></span>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50 cursor-pointer hover:scale-110 transition'><FaInstagram></FaInstagram></span>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50 cursor-pointer hover:scale-110 transition'><FaWhatsapp></FaWhatsapp></span>
                    </div>
                </div>

                {/* Useful link */}
                <div className='space-y-4'>
                        {
                            footerLink.slice(0,4).map((fl, ind)=>{
                                return <Link key={ind} href={`/${fl.link}`} className='font-semibold text-md flex gap-3 items-center hover:text-[#E57373] transition group'> <span className='group-hover:translate-x-2 transition text-[#E57373]'><FaAngleRight></FaAngleRight></span>{fl.text}</Link>
                            })
                        }
                </div>
                <div className='space-y-4'>
                        {
                            footerLink.slice(4).map((fl, ind)=>{
                                return <Link key={ind} href={`/${fl.link}`} className='font-semibold text-md flex gap-3 items-center hover:text-[#E57373] transition group'> <span className='group-hover:translate-x-2 transition text-[#E57373]'><FaAngleRight></FaAngleRight></span>{fl.text}</Link>
                            })
                        }
                </div>

                {/* Download our app */}
                <div className='space-y-4'>
                    <h2 className='my-subtitle'>Download our app</h2>
                    <figure className='space-y-4 flex flex-col justify-center'>
                        <Image src={DownloadOnGooglePlay} alt='DownloadOnGooglePlay' height={55} width={130} className='cursor-pointer'></Image>
                        <Image src={DownloadOnAppStore} alt='DownloadOnAppStore' height={55} width={130} className='cursor-pointer'></Image>
                    </figure>
                </div>

            </div>
            {/* Footer bottom */}
            <div className='bg-[#09528C] bg-opacity-30 text-slate-50 py-6 border-t border-slate-300 text-center'>
                <p className='text-slate-700 font-semibold'> Copyright © 2023 <span className='text-secondary'>DocWatch</span>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;