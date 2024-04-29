'use client'
import React, { useState } from 'react';

const AppointmentSelectCompo = ({ doctor }) => {
    const { availabilityDayStart, availabilityDayEnd, availabilityTimeStart, availabilityTimeEnd } = doctor.availability || {}
    const [activeAppointmentDate, setActiveAppointmentDate] = useState('')

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    // Get the current date
    let currentDate = new Date();

    // Object to store days grouped by month
    // let next30Days = {};
    const next30Days = {}

    // Loop to generate the next 30 days
    for (let i = 0; i < 30; i++) {
        // Get the date for the current iteration
        let nextDate = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000));

        // Get the month and year of the current date
        let month = nextDate.toLocaleString('en-US', { month: 'long' });
        let year = nextDate.getFullYear();

        // Format the date as "Day, Month Date"
        let formattedDate = nextDate.toLocaleString('en-US', { weekday: 'long', day: 'numeric' });

        // Check if the month exists in the object, if not create it
        if (!next30Days[year]) {
            next30Days[year] = {};
        }
        if (!next30Days[year][month]) {
            next30Days[year][month] = [];
        }

        // Push the formatted date into the corresponding month array
        next30Days[year][month].push(formattedDate);
    }


    // No appointment days
    const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const getDayIndex = (day) => {
        return allDays.indexOf(day)
    }
    const firstDayIndex = getDayIndex(availabilityDayStart)
    const lastDayIndex = getDayIndex(availabilityDayEnd)
    const noAppointmentDays = allDays.filter((day, ind) => {
        return ind < firstDayIndex || ind > lastDayIndex
    })


    return (
        <div>
            {/* Date and time to select appointment */}
            <div className='grid grid-cols-12 gap-2'>
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow col-span-12 md:col-span-2 max-h-auto md:max-h-[442px] overflow-y-scroll'>
                        {Object.keys(next30Days).map((year, ind) => {
                            return <div key={ind}>
                                {
                                    Object.keys(next30Days[year]).map((month, ind) => {
                                        // return   <li key={ind} className='py-3 px-2 border-x md:border-y'>{month}</li>
                                        return <div key={ind} className='mt-4'>
                                            <h2 className='font-bold mb-1'>{month} {year}</h2>
                                            <ul className='flex gap-2 md:block overflow-x-scroll md:overflow-x-auto'>
                                                {
                                                    next30Days[year][month].map((day, ind) => {
                                                        const isNoAppointmentDay = noAppointmentDays.includes(day.split(' ')[1])
                                                        const isSameDate = activeAppointmentDate && (String(activeAppointmentDate.getDate()) === day.split(' ')[0] &&
                                                            String(monthNames[activeAppointmentDate.getMonth()]) === month &&
                                                            String(activeAppointmentDate.getFullYear()) === year);

                                                        return <li key={ind} className={`py-3 px-2 border-x md:border-x-0 border-y-0 md:border-y cursor-pointer whitespace-nowrap ${isNoAppointmentDay && '!opacity-30 !cursor-default'} ${isSameDate && '!bg-primary-main !text-white'}`} onClick={() => !isNoAppointmentDay ? setActiveAppointmentDate(new Date(`${month} ${day.split(' ')[0]}, ${year}`)) : ''} disable={isNoAppointmentDay}>
                                                            {day}
                                                        </li>
                                                    })
                                                }
                                            </ul>

                                        </div>
                                    })
                                }
                            </div>
                        })}
                </div>

                <div className='bg-white rounded-md p-2 md:p-4 my-shadow col-span-12 md:col-span-10 '>
                    <div className='h-full w-full relative pb-[70px]'>
                        <h2 className='font-bold text-lg md:text-xl mb-3'>Select your appointment time</h2>
                        <div className='max-h-[300px] overflow-y-scroll'>
                            <ul>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, ind) => {
                                    return <li key={ind} className='py-3 px-2 border-y'>{elem}</li>
                                })}
                            </ul>
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between p-2 bg-white border-t border-primary-main absolute bottom-0 left-0 right-0'>
                            {/* Booking Indicator color */}
                            <div className='flex flex-wrap gap-1 md:gap-2'>
                                <div className='flex items-center gap-1'>
                                    <span className='h-4 w-4 rounded-md bg-white border'></span>
                                    <p>Available</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='h-4 w-4 rounded-md bg-gray-500 border'></span>
                                    <p>Not available</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='h-4 w-4 rounded-md bg-primary-main border'></span>
                                    <p>Booked</p>
                                </div>
                            </div>
                            <button className='my-btn-one'>Confirm</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AppointmentSelectCompo;