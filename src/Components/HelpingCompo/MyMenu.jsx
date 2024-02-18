import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyMenu = ({ href, children }) => {
    const pathname = usePathname()
    // console.log(pathname);
    const isActive = pathname === href
    return (
        <li>
            <Link href={href} className={`inline-block text-slate-700 hover:text-primary-main font-semibold pb-2 ${isActive && '!text-primary-main border-b-2 border-primary-main'}`}>{children}</Link>
        </li>
    );
};

export default MyMenu;