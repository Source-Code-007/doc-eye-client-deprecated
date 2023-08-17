'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '/public/assets/img/logo.png'
import Image from 'next/image';
import MyMenu from '@/Components/HelpingCompo/MyMenu';
import { useAuth } from '@/Providers/AuthProvider';
import MyLoading from '@/Components/HelpingCompo/MyLoading';

const Navbar = () => {
    const [isTop, setIsTop] = useState(true)
    const { user, loading } = useAuth()

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


    return (
        <nav className={`${isTop ? '' : 'bg-slate-100 shadow'} fixed left-0 right-0 top-0 z-50`}>
            <div className='py-4 my-container flex justify-between'>
                <Link href={'/'}><Image height={40} width={40} src={logo} alt='DocEye'></Image></Link>
                <ul className='flex gap-10 items-center text-slate-700 text-xl'>
                    <MyMenu href={'/'}>Home</MyMenu>
                    <MyMenu href={'/about'}>About</MyMenu>
                    <MyMenu href={'/contact'}>Contact</MyMenu>
                    <MyMenu href={'/feature'}>Feature</MyMenu>
                    <MyMenu href={'/services'}>Services</MyMenu>
                </ul>

                {
                        loading? <MyLoading height={50} width={50}/> : user ? <Image height={50} width={50} className='rounded-full border-primary' src={user.photoURL} alt={user.displayName}></Image> : <Link href={'signin'}>
                        <button className='my-btn-one'>Login</button>
                    </Link>
                }

            </div>
        </nav>
    );
};

export default Navbar;