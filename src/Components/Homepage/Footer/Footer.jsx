import React from 'react';
import logo from '/public/assets/img/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLocationArrow, FaMessage, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa6';



const Footer = () => {
    return (
        <div className='bg-[#09528C] bg-opacity-20 footer-top'>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-20'>
                <div className='space-y-4'>
                    <Link href={'/'} className='font-bold text-xl flex gap-3 items-center'><Image height={40} width={40} src={logo} alt='DocEye'></Image> DocWatch</Link>
                    <p className='flex items-center gap-3'><span className='inline-block p-3 bg-slate-900 text-slate-50 rounded-full'><FaPhone></FaPhone></span> 0170678-5160</p>
                    <p className='flex items-center gap-3'><span className='inline-block p-3 bg-slate-900 text-slate-50 rounded-full'><FaMessage></FaMessage></span> utsho926@gmail.com</p>
                    <p className='flex items-center gap-3'><span className='inline-block p-3 bg-slate-900 text-slate-50 rounded-full'><FaLocationArrow></FaLocationArrow></span> 25/fa/3 Satarkul, Badda, Dhaka, Bangladesh</p>
                    <div className='flex gap-3'>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50'><FaFacebook></FaFacebook></span>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50'><FaTwitter></FaTwitter></span>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50'><FaInstagram></FaInstagram></span>
                        <span className='inline-block p-3 rounded-full bg-slate-500 text-slate-50'><FaWhatsapp></FaWhatsapp></span>
                    </div>
                </div>
            </div>
            <div className='bg-[#09528C] bg-opacity-30 text-slate-50 py-6 border-t border-slate-300 text-center'>
                <p className='text-slate-700'> Copyright © 2023 <span className='text-primary'>DocWatch</span>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;