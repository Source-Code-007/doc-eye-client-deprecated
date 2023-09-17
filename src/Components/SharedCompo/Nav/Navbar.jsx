'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '/public/assets/img/logo.png'
import MyMenu from '@/Components/HelpingCompo/MyMenu';
import { useAuth } from '@/Providers/AuthProvider';
import MyLoading from '@/Components/HelpingCompo/MyLoading';
import Image from 'next/image';

const Navbar = () => {
    const [isTop, setIsTop] = useState(true)
    const { user, authLoading } = useAuth()

    useEffect(() => {
        const isTopFunc = () => {
            if (window.scrollY > 30) {
                setIsTop(false)
            } else {
                setIsTop(true)
            }
        }
        window.addEventListener('scroll', isTopFunc)
        return () => {
            window.removeEventListener('scroll', isTopFunc)
        }
    }, [])
console.log(user, authLoading);

    return (
        <nav className={` ${isTop ? 'bg-green-500' : 'bg-slate-100 shadow'} fixed left-0 right-0 top-0 z-50`}>
            <div className='py-4 my-container flex justify-between'>
                <Link href={'/'}><Image height={40} width={40} src={logo} alt='DocEye'></Image></Link>
                <ul className='flex gap-10 items-center text-slate-700 text-xl'>
                    <MyMenu href={'/'}>Home</MyMenu>
                    <MyMenu href={'/about'}>About</MyMenu>
                    <MyMenu href={'/order-medicine'}>Order Medicine</MyMenu>
                    <MyMenu href={'/feature'}>Feature</MyMenu>
                    <MyMenu href={'/contact'}>Contact</MyMenu>
                    <MyMenu href={'/for-doctor'}>For Doctor</MyMenu>
                    <MyMenu href={'/services'}>Services</MyMenu>
                </ul>

                {
                    // <Image height={50} width={50} className='rounded-full border-primary' src={user?.photoURL} alt={user.displayName}></Image>
                        authLoading? <MyLoading className='h-12 w-12'/> : user ? 'image' : <Link href={'signin'}>
                        <button className='my-btn-one'>Login</button>
                    </Link>
                }

            </div>
        </nav>
    );
};

export default Navbar;