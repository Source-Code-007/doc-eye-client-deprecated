import Link from 'next/link';
import React from 'react';
import logo from '/public/assets/img/logo.png'
import Image from 'next/image';
import MyMenu from '@/Components/HelpingCompo/MyMenu';

const Navbar = () => {
    return (
        <nav className='bg-slate-200'>
            <div className='py-4 my-container flex justify-between'>
                <Link href={'/'}><Image height={40} width={40} src={logo} alt='DocEye'></Image></Link>
                <ul className='flex gap-5 items-center text-slate-700 text-xl'>
                    <MyMenu href={'/'}>Home</MyMenu>
                    <MyMenu href={'/about'}>About</MyMenu>
                    <MyMenu href={'/contact'}>Contact</MyMenu>
                    <MyMenu href={'/feature'}>Feature</MyMenu>
                    <MyMenu href={'/services'}>Services</MyMenu>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;