import React from 'react';
import Skeleton from 'react-loading-skeleton';

const DashboardLayoutSkeleton = () => {
    return (
        <div>
            <Skeleton count={5}  className='h-[34px]'/>
        </div>
    );
};

export default DashboardLayoutSkeleton;