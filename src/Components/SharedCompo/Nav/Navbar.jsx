'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import logo from '/public/assets/img/logo.png'
import MyMenu from '@/Components/HelpingCompo/MyMenu';
import { useAuth } from '@/Providers/AuthProvider';
import MyLoading from '@/Components/HelpingCompo/MyLoading';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import { GoSignOut } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";


const Navbar = () => {
    const [isTop, setIsTop] = useState(true)
    const { user, authLoading, setAuthLoading, signOutFunc } = useAuth()
    const pathName = usePathname()
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const userDropdownRef = useRef(null);


    // modify nav when in top
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

    // // Close user dropdown by clicking outside of the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        }

        // Add a click event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [userDropdownRef, isUserMenuOpen]);


    // signout func
    const handleSignOutFunc = () => {
        setAuthLoading(true);
        return signOutFunc()
    }

    return (
        <nav className={` ${isTop ? 'bg-transparent shadow-md' : 'bg-slate-100 shadow-lg'} sticky left-0 right-0 top-0 z-50`}>
            <div className='py-4 my-container flex justify-between'>
                <Link href={'/'}><Image height={40} width={40} src={logo} alt='DocEye'></Image></Link>
                <ul className='flex gap-10 items-center text-slate-700 text-xl'>
                    <MyMenu href={'/'}>Home</MyMenu>
                    <MyMenu href={'/health-plans'}>Health Plans</MyMenu>
                    <MyMenu href={'/order-medicine'}>Order Medicine</MyMenu>
                    <MyMenu href={'/feature'}>Feature</MyMenu>
                    <MyMenu href={'/contact'}>Contact</MyMenu>
                    <MyMenu href={'/for-doctors'}>For Doctors</MyMenu>
                    <MyMenu href={'/services'}>Services</MyMenu>
                </ul>

                {authLoading ? <MyLoading className='h-12 w-12' /> : !user ? <Link href={'signin'}>
                    <button className='my-btn-one'>Login</button>
                </Link> : <div className="relative">
                    <div className='text-primary-desc cursor-pointer relative' ref={userDropdownRef}>
                        <div className='relative h-10 w-10' onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                            <Image
                                src={user?.photoURL || 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_640.jpg'}
                                alt={user.displayName || 'user'}
                                layout='fill'
                                style={{
                                    objectFit: 'cover',
                                }}
                                className='rounded-full'
                            />
                        </div>

                        {/* user dropdown */}
                        {isUserMenuOpen && <ul className={`w-[220px] triangle-dropdown  rounded-[10px] font-bold text-[12px] p-[10px] text-primary-desc absolute top-[140%] right-[-87px] -translate-x-1/3 rounded-b-md transition-all duration-500 !z-[998] !bg-primary-main ${isUserMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>

                            <li className='py-[16px] px-[10px] flex items-center gap-[10px] hover:bg-dark-4 cursor-pointer rounded-[10px]'>
                                <div>
                                    <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                                        <Image
                                            src={user?.photoURL || 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_640.jpg'}
                                            alt={user.displayName || 'user'}
                                            layout='fill'
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                            className='rounded-full'
                                        />
                                    </div>
                                </div>
                                <div className='text-white space-y-px text-[12px]'>
                                    <p className='font-bold'>{user?.displayName}</p>
                                    <p className='text-primary-desc opacity-60'>{user?.uid}</p>
                                </div>

                            </li>

                            <Link href='/user-dashboard' className='py-[16px] px-[10px] flex items-center gap-2 hover:bg-dark-4 cursor-pointer rounded-[10px]'>
                                <LuLayoutDashboard className='h-[24px] w-[24px]' /> Dashboard</Link>
                            <li className='py-[16px] px-[10px] flex items-center gap-2 hover:bg-dark-4 cursor-pointer rounded-[10px]' onClick={handleSignOutFunc}> <GoSignOut className='h-[24px] w-[24px]' /> Log Out</li>
                        </ul>}
                    </div>
                </div>
                }

            </div>
        </nav>
    );
};

export default Navbar;
