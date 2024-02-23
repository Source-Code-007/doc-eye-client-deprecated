import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex flex-col gap-1 items-center justify-center'>
            <h2> Page not found!</h2>
            <Link href={'/'}>
                <button className='my-btn-one'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;