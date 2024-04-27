'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import logo from '/public/assets/img/logo.png'
import MyMenu from '@/Components/HelpingCompo/MyMenu';
import { useAuth } from '@/Providers/AuthProvider';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { GoSignOut } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMenu } from 'react-icons/io5';
import MyMobileMenu from '@/Components/HelpingCompo/MyMobileMenu';


const Navbar = () => {
    const [isTop, setIsTop] = useState(true)
    const { user, authLoading, setAuthLoading, signOutFunc } = useAuth()
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const mobileMenuDropdownRef = useRef(null);
    const userDropdownRef = useRef(null);

    const isRole = user?.role

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
            if (mobileMenuDropdownRef.current && !mobileMenuDropdownRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false)
            }
        }

        // Add a click event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    // signout func
    const handleSignOutFunc = () => {
        setAuthLoading(true);
        signOutFunc()
    }

    console.log(user, 'user from navbar');

    return (
        <nav className={` ${isTop ? 'bg-transparent shadow-sm' : 'bg-opacity-75 backdrop-filter backdrop-blur-md backdrop-saturate-180 shadow'} sticky left-0 right-0 top-0 z-50`}>
            <div className='py-4 my-container flex justify-between'>
                <Link href={'/'}><Image height={40} width={40} src={logo} alt='DocEye'></Image></Link>

                <div className='flex-1 flex justify-end md:justify-between gap-2'>
                    <div></div>
                    {/* Desktop menu */}
                    <ul className='hidden md:flex md:gap-2 lg:gap-4 2xl:gap-6 items-center text-slate-700 text-xl'>
                        <MyMenu href={'/services'}>Services</MyMenu>
                        <MyMenu href={'/health-plans'}>Health Plans</MyMenu>
                        <MyMenu href={'/order-medicine'}>Order Medicine</MyMenu>
                        <MyMenu href={'/feature'}>Feature</MyMenu>
                        <MyMenu href={'/contact'}>Contact</MyMenu>
                        <MyMenu href={'/for-doctors'}>For Doctors</MyMenu>
                    </ul>

                    {/* Mobile menu */}
                    <div className='relative flex md:hidden items-center' ref={mobileMenuDropdownRef}>
                        <span className='inline-block text-2xl cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}><IoMenu /></span>
                        <ul className={`w-[250px] triangle-dropdown  rounded-[10px] font-bold text-[12px] p-[10px] text-primary-desc absolute top-[140%] right-[-87px] -translate-x-1/3 rounded-b-md transition-all duration-500 !z-[998] !bg-primary-main space-y-1 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                            <MyMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} href={'/services'}>Services</MyMobileMenu>
                            <MyMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} href={'/health-plans'}>Health Plans</MyMobileMenu>
                            <MyMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} href={'/order-medicine'}>Order Medicine</MyMobileMenu>
                            <MyMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} href={'/feature'}>Feature</MyMobileMenu>
                            <MyMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} href={'/contact'}>Contact</MyMobileMenu>
                            <MyMobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} href={'/for-doctors'}>For Doctors</MyMobileMenu>
                        </ul>
                    </div>


                    {authLoading ? <Skeleton className='h-10 w-10 rounded-full' /> : !user ? <Link href={'signin'}>
                        <button className='my-btn-one'>Login</button>
                    </Link> : <div className="relative">
                        <div className='text-primary-desc cursor-pointer relative' ref={userDropdownRef}>
                            <figure className='relative h-10 w-10' onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                                <Image
                                    src={user?.avatar || 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_640.jpg'}
                                    alt={user.name || 'user'}
                                    layout='fill'
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className='rounded-full'
                                />
                            </figure>

                            {/* user dropdown */}
                            {isUserMenuOpen && <ul className={`w-[220px] triangle-dropdown  rounded-[10px] font-bold text-[12px] p-[10px] text-primary-desc absolute top-[140%] right-[-87px] -translate-x-1/3 rounded-b-md transition-all duration-500 !z-[998] !bg-primary-main ${isUserMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>

                                <li className='py-[16px] px-[10px] flex items-center gap-[10px] hover:bg-dark-4 cursor-pointer rounded-[10px]'>
                                    <div>
                                        <figure className='relative h-10 w-10'>
                                            {/* TODO: replace actual user?.avatar */}
                                            <Image
                                                src={user?.avatar || 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_640.jpg'}
                                                alt={user.name || 'user'}
                                                layout='fill'
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                                className='rounded-full'
                                            />
                                        </figure>
                                    </div>
                                    <div className='text-white space-y-px text-[12px] w-[140px] break-words'>
                                        <h2 className='font-bold'>{user?.name}</h2>
                                        <p className='text-primary-desc opacity-60'>{`DocEye-${user?._id.slice(-9)}`}</p>
                                    </div>

                                </li>

                                <Link href={`${isRole === 'admin' ? '/admin-dashboard' : isRole === 'doctor' ? '/doctor-dashboard' : isRole === 'user' && '/user-dashboard'}`} className='py-[16px] px-[10px] flex items-center gap-2 hover:bg-dark-4 cursor-pointer rounded-[10px]'>
                                    <LuLayoutDashboard className='h-[24px] w-[24px]' /> Dashboard</Link>
                                <li className='py-[16px] px-[10px] flex items-center gap-2 hover:bg-dark-4 cursor-pointer rounded-[10px]' onClick={handleSignOutFunc}> <GoSignOut className='h-[24px] w-[24px]' /> Log Out</li>
                            </ul>}
                        </div>
                    </div>
                    }
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
