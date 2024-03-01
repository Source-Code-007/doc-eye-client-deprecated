import React from 'react';
import logo from '../../../public/assets/img/logo.png'
import Image from 'next/image';
import DashboardLink from './DashboardLink';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

const DashboardLayout = ({ children }) => {
    const role = 'admin'
    return (
        <div className='flex'>

            <div className='h-screen w-[250px] overflow-y-auto bg-slate-100 border-r border-r-primary-main border-opacity-25'>
                <Link href={'/'}>
                    <Image src={logo} height={40} width={40} alt='logo' className='mx-auto py-2' />
                </Link>

                <div className='mt-6 p-2'>
                    {role === 'admin' &&
                        <ul>
                            <DashboardLink href={'/dashboard/admin'}> Dashboard </DashboardLink>
                            <DashboardLink href={'/dashboard/admin/add-specialty'}> Add a specialty </DashboardLink>
                            <DashboardLink href={'/dashboard/admin/add-a-doctor'}> Add a doctor </DashboardLink>
                            <DashboardLink href={'/dashboard/admin/manage-doctors'}>Manage doctors</DashboardLink>
                        </ul>
                    }

                </div>
            </div>
            <div className='flex-1 bg-slate-100'>
                {children}
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