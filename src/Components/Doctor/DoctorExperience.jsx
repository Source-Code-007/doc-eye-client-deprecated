import React from 'react';

const DoctorExperience = ({ experience }) => {
    if (!experience?.length > 0) {
        return <div className='h-[50vh] flex items-center justify-center'>
            <h2 className='font-bold text-lg md:text-xl p-2 bg-slate-100 shadow-xl'>No experiences found!</h2>
        </div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {
                experience.map((elem, ind) => {
                    const { weWorkplace, weDesignation, weDepartment, wePeriod } = elem || {}
                    return <div key={ind} className='bg-white rounded-md p-2 md:p-4 my-shadow space-y-2 md:space-y-4'>
                        <h2 className='font-bold'>{weWorkplace}</h2>
                        <div className='space-y-1'>
                            <p className='text-gray-500'>Designation</p>
                            <p className='font-semibold'>{weDesignation}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-500'>Department</p>
                            <p className='font-semibold'>{weDepartment}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-500'>Period</p>
                            <p className='font-semibold'>{wePeriod}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default DoctorExperience;