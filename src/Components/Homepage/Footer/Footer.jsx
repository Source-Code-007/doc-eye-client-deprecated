import React from 'react';
import logo from '/public/assets/img/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-4'>
                <div>
                    <Link href={'/'}><Image height={40} width={40} src={logo} alt='DocEye'></Image></Link>
                    <p className='flex items-center gap-3'><span className='p-3 bg-slate-900 text-slate-50 rounded-full'><FaPhone></FaPhone> 0170678-5160</span></p>
                </div>
            </div>
            <div className='py-6 border-t'>
                <p className='text-slate-700'> Copyright © 2023 <span className='text-primary'>DocWatch</span>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;