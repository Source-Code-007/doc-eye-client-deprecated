import Link from 'next/link';
import React from 'react';

const MyMenu = ({href, children}) => {
    return (
        <li>
           <Link href={href} className='inline-block hover:text-[#136afb] font-semibold'>{children}</Link> 
        </li>
    );
};

export default MyMenu;