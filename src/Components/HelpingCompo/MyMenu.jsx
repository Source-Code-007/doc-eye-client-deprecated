import Link from 'next/link';
import React from 'react';

const MyMenu = ({href, children}) => {
    return (
        <li>
           <Link href={href} className='inline-block text-slate-700 hover:text-[#09528C] font-semibold'>{children}</Link> 
        </li>
    );
};

export default MyMenu;