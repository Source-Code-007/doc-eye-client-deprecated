import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyMenu = ({ href, children }) => {
    const pathname = usePathname()
    // console.log(pathname);
    const isActive = pathname === href
    return (
        <li>
            <Link href={href} className={`inline-block text-slate-700 hover:text-[#09528C] font-semibold pb-2 ${isActive && '!text-[#09528C] border-b-2 border-[#09528C]'}`}>{children}</Link>
        </li>
    );
};

export default MyMenu;