import React from 'react';
import { FaArrowTrendDown, FaArrowTrendUp, FaFileMedical, FaHandHoldingMedical, FaUserDoctor } from 'react-icons/fa6';
import { GiProfit } from "react-icons/gi";
const AdminDashboardHome = () => {
    return (
        <div className='p-2 md:p-4'>

            {/* Admin dashboard home stats */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* Total patient */}
                <div className='bg-white rounded-lg p-3 md:p-4 shadow'>
                    <div className='flex items-center gap-3 mb-4 md:mb-5'>
                        <span className='p-2 rounded-md bg-primary-main bg-opacity-20 border border-primary-main text-primary-main'><FaHandHoldingMedical /></span>
                        <div className='space-y-1'>
                            <h2 className='font-semibold text-md md:text-lg'>Total patient in this month</h2>
                            <p className='text-primary-desc text-sm'>Total patient visited to your portal in this month</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-xl md:text-2xl'>1550</h2>
                        <div className='flex items-center gap-1'>
                            {/* TODO: Need condition to show this data */}
                            <span className='text-success-desc'><FaArrowTrendUp /></span> <span className='text-success-desc'>+32%</span> up from last months!
                        </div>
                    </div>

                </div>

                {/* Total doctors */}
                <div className='bg-white rounded-lg p-3 md:p-4 shadow'>
                    <div className='flex items-center gap-3 mb-4 md:mb-5'>
                        <span className='p-2 rounded-md bg-secondary-main bg-opacity-20 border border-secondary-main text-secondary-main'><FaUserDoctor /></span>
                        <div className='space-y-1'>
                            <h2 className='font-semibold text-md md:text-lg'>Total doctor in this month</h2>
                            <p className='text-primary-desc text-sm'>Total doctor join to your portal in this month</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-xl md:text-2xl'>16</h2>
                        <div className='flex items-center gap-1'>
                            {/* TODO: Need condition to show this data */}
                            <span className='text-danger-desc'><FaArrowTrendDown /></span> <span className='text-danger-desc'>-13%</span> down from last months!
                        </div>
                    </div>

                </div>

                {/* Total appointment */}
                <div className='bg-white rounded-lg p-3 md:p-4 shadow'>
                    <div className='flex items-center gap-3 mb-4 md:mb-5'>
                        <span className='p-2 rounded-md bg-success-desc bg-opacity-20 border border-success-desc text-success-desc'><FaFileMedical /></span>
                        <div className='space-y-1'>
                            <h2 className='font-semibold text-md md:text-lg'>Total appointment in this month</h2>
                            <p className='text-primary-desc text-sm'>Total appointments scheduled for this month</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-xl md:text-2xl'>1250</h2>
                        <div className='flex items-center gap-1'>
                            {/* TODO: Need condition to show this data */}
                            <span className='text-success-desc'><FaArrowTrendUp /></span> <span className='text-success-desc'>15%</span> down from last months!
                        </div>
                    </div>

                </div>

                {/* Total revenue */}
                <div className='bg-white rounded-lg p-3 md:p-4 shadow'>
                    <div className='flex items-center gap-3 mb-4 md:mb-5'>
                        <span className='p-2 rounded-md bg-secondary-main-2 bg-opacity-20 border border-secondary-main-2 text-secondary-main-2'><GiProfit /></span>
                        <div className='space-y-1'>
                            <h2 className='font-semibold text-md md:text-lg'>Total revenue in this month</h2>
                            <p className='text-primary-desc text-sm'>Total revenue earned from patients this month</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-xl md:text-2xl'>$3250</h2>
                        <div className='flex items-center gap-1'>
                            {/* TODO: Need condition to show this data */}
                            <span className='text-danger-desc'><FaArrowTrendDown /></span> <span className='text-danger-desc'>-5%</span> down from last months!
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;