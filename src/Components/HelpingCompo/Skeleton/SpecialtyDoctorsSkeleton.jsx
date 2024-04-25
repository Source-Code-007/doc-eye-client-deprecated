import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SpecialtyDoctorsSkeleton = () => {
    return (
        <div>
            <Skeleton count={6} className='h-[65px] my-[10px]' />
        </div>
    );
};

export default SpecialtyDoctorsSkeleton;