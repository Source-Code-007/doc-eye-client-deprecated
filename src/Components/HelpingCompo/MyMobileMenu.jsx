import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyMobileMenu = ({href, setIsMobileMenuOpen, children}) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <Link onClick={()=> setIsMobileMenuOpen(false)} href={href} className={`block py-[16px] px-[10px] hover:bg-dark-4 ${isActive && 'bg-dark-4'} cursor-pointer rounded-[10px]`}>{children}</Link>
    );
};

export default MyMobileMenu;