import React from 'react';
import Skeleton from 'react-loading-skeleton';

const loading = () => {
    return (
        <div className='container mx-4 md:mx-auto my-8 space-y-4'>

            <div className='bg-white rounded-md p-2 md:p-4 my-shadow flex flex-wrap justify-center sm:justify-normal gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center'>
                <div>
                    <Skeleton count={1} className='h-[34px] !w-[300px]' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Skeleton count={1} className='!h-[40px] !w-[40px] !rounded-full' />
                    <div>
                        <Skeleton count={1} className='!h-[25px] !w-[100px]' />
                        <Skeleton count={1} className='!h-[25px] !w-[100px]' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-2'>
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow col-span-12 md:col-span-2 max-h-[442px] overflow-y-scroll my-scrollbar'>
                    <div className='hidden md:block'>
                    <Skeleton count={25} className='h-[34px] !w-full' />
                    </div>
                    <div className='block md:hidden'>
                    <Skeleton count={1} className='h-[50px] !w-full' />
                    </div>
                </div>
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow col-span-12 md:col-span-10 max-h-[442px] overflow-y-scroll my-scrollbar'>
                    <Skeleton count={20} className='h-[34px] !w-full' />
                </div>
            </div>

        </div>
    );
};

export default loading;