import React from 'react';
import Skeleton from 'react-loading-skeleton';
import MyMotion from '../MyMotion';

const SpecialtyDoctorsSkeleton = () => {
    return (
        <MyMotion y={20}>
            <Skeleton count={6} className='h-[65px] my-[10px]' />
        </MyMotion>
    );
};

export default SpecialtyDoctorsSkeleton;