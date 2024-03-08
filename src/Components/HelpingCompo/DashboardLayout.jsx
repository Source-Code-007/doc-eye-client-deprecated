import React from 'react';
import logo from '../../../public/assets/img/logo.png'
import Image from 'next/image';
import DashboardLink from './DashboardLink';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '@/Providers/AuthProvider';
import MyLoading from './MyLoading';
import DashboardLayoutSkeleton from './Skeleton/DashboardLayoutSkeleton';

const DashboardLayout = ({ children }) => {
    const { user, authLoading } = useAuth()
    const isRole = user?.role

    console.log(user, 'from  dashboard layout');

    return (
        <div className='flex'>

            <div className='min-h-screen w-[250px] overflow-y-auto bg-slate-100 border-r border-r-primary-main border-opacity-25'>
                <Link href={'/'}>
                    <Image src={logo} height={40} width={40} alt='logo' className='mx-auto py-2' />
                </Link>

                {/* Render dashboard route conditionally based on role */}
                <div className='mt-6 p-2'>
                    {
                        authLoading ? <DashboardLayoutSkeleton /> :
                            <>
                                {isRole === 'admin' ?
                                    <ul>
                                        <DashboardLink href={'/admin-dashboard'}> Dashboard </DashboardLink>
                                        <DashboardLink href={'/admin-dashboard/add-specialty'}> Add a specialty </DashboardLink>
                                        <DashboardLink href={'/admin-dashboard/add-a-doctor'}> Add a doctor </DashboardLink>
                                        <DashboardLink href={'/admin-dashboard/manage-doctors'}>Manage doctors</DashboardLink>
                                    </ul> : isRole === 'doctor' ?
                                        <ul>
                                            <DashboardLink href={'/doctor-dashboard'}> Dashboard </DashboardLink>
                                        </ul> : isRole === 'user' &&
                                        <ul>
                                            <DashboardLink href={'/user-dashboard'}> Dashboard </DashboardLink>
                                            <DashboardLink href={'/user-dashboard/my-appointments'}> My appointments </DashboardLink>
                                            <DashboardLink href={'/user-dashboard/my-history'}> My history </DashboardLink>
                                        </ul>
                                }
                            </>
                    }

                </div>
            </div>
            <div className='flex-1 bg-slate-100'>
                {authLoading ? <div className='my-h-screen flex items-center justify-center'><MyLoading /></div> :  children }
            </div>

            {/* Toast container */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default DashboardLayout;