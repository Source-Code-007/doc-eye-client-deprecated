import Navbar from '@/Components/SharedCompo/Nav/Navbar';
import React from 'react';

const loading = () => {
    return (
        <>
            <Navbar />
            <div className='my-h-screen flex items-center justify-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        </>
    );
};

export default loading;