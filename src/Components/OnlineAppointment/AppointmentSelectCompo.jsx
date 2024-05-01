'use client'
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import useExpectedDoctorAppointmentsData from '@/Hooks/useData/useAppointmentsData';
import { useAuth } from '@/Providers/AuthProvider';
import React, { useState } from 'react';

const AppointmentSelectCompo = ({ doctor }) => {
    const { availabilityDayStart, availabilityDayEnd, availabilityTimeStart, availabilityTimeEnd } = doctor?.availability || {}
    const [activeAppointmentDate, setActiveAppointmentDate] = useState('')
    const [activeAppointmentTime, setActiveAppointmentTime] = useState('')
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()


    const { expectedDoctorAppointments, expectedDoctorAppointmentsLoading } = useExpectedDoctorAppointmentsData(doctor?._id)
    console.log(expectedDoctorAppointments, 'expectedDoctorAppointments');



    // Last 30 days ****
    const allMonthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    // Get the current date
    let currentDate = new Date();

    // Object to store days grouped by month
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

        // set default value of first date
        if(i===0 && !activeAppointmentDate){
                setActiveAppointmentDate(`${year}-${allMonthNames.indexOf(month)+1}-${formattedDate.split(' ')?.[0]}`)
        }

        // Push the formatted date into the corresponding month array
        next30Days[year][month].push(formattedDate);
    }


    // No appointment days ****
    const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const getDayIndex = (day) => {
        return allDays.indexOf(day)
    }
    const firstDayIndex = getDayIndex(availabilityDayStart)
    const lastDayIndex = getDayIndex(availabilityDayEnd)
    const noAppointmentDays = allDays.filter((day, ind) => {
        return ind < firstDayIndex || ind > lastDayIndex
    })



    // All time schedules ****
    function roundTimeToNearest15Minutes(timeString) {
        let [hours, minutes] = timeString.split(':').map(Number);
        let roundedMinutes = Math.round(minutes / 15) * 15; // Round minutes up to the nearest 15

        // Adjust hours and minutes
        if (roundedMinutes === 60) {
            roundedMinutes = 0;
            hours += 1;
        }

        let roundedTime = `${String(hours).padStart(2, '0')}:${String(roundedMinutes).padStart(2, '0')}`;
        return roundedTime;
    }
    function generateTimeSchedule(startTime, endTime) {
        const modifiedStartTime = roundTimeToNearest15Minutes(startTime)
        const modifiedEndTime = roundTimeToNearest15Minutes(endTime)

        let times = []; // to store time intervals
        let current = new Date(); // to help with time manipulation
        let start = current.setHours(parseInt(modifiedStartTime.split(':')[0]), parseInt(modifiedStartTime.split(':')[1]), 0);
        let end = current.setHours(parseInt(modifiedEndTime.split(':')[0]), parseInt(modifiedEndTime.split(':')[1]), 0);

        while (start <= end) {
            // Format time in AM/PM format
            let time = new Date(start);
            let formattedTime = time.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            times.push({ twentyFourHourFormat: time.toLocaleTimeString('en-US', { hour12: false }), twelveHourFormat: formattedTime });
            start += 15 * 60000; // increment time by interval (15 minutes)
        }

        return times;
    }
    const allTimeSchedules = generateTimeSchedule(availabilityTimeStart, availabilityTimeEnd)
    // console.log(allTimeSchedules);


    // Booked date ****
    // const bookedDateTime = (activeAppointmentDate && activeAppointmentTime) ? new Date(activeAppointmentDate) : ''
    // if (bookedDateTime) {
    //     const [hour, minute, second] = activeAppointmentTime.split(':')
    //     bookedDateTime.setHours(hour, minute, second)
    // }

    // book appointment handler ****
    const bookAppointmentHandler = () => {
        const { _id: doctorId } = doctor || {}
        const { _id: userId } = user || {}

        // console.log(activeAppointmentDate, 'activeAppointmentDate');
        // console.log(activeAppointmentTime, 'activeAppointmentTime');
        // console.log(bookedDateTime, doctorId, userId, 'bookedDateTime, doctorId, userId');


        // Split the date string into year, month, and day components
        const [year, month, day] = activeAppointmentDate.split('-').map(Number);
        // Split the time string into hour, minute, and second components
        const [hour, minute, second] = activeAppointmentTime.split(':').map(Number);

        // Create a new Date object with the given date and time components
        const combinedAppointmentDateTime = new Date(Date.UTC(year, month, day, hour, minute, second));

        // console.log(combinedAppointmentDateTime, 'combinedAppointmentDateTime');


        axiosSecure.post('/doctor/book-appointment', { doctorId, userId, bookedDateTime: combinedAppointmentDateTime }).then(res => {
            console.log(res?.data?.data);
        }).catch(e => {
            console.log(e);
        })
    }

    console.log(activeAppointmentDate, 'activeAppointmentDate');
    console.log(next30Days, 'next30Days');
    console.log(activeAppointmentTime, 'activeAppointmentTime');
    // console.log(`${activeAppointmentDate}T${activeAppointmentTime}`, 'activeAppointmentDateTime');

    return (
        <div>
            {/* Date and time to select appointment */}
            <div className='grid grid-cols-12 gap-2'>

                {/* All dates */}
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow col-span-12 md:col-span-2 max-h-auto md:max-h-[442px] overflow-y-scroll my-scrollbar'>
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

                                                    // const isSameDate = activeAppointmentDate && (String(activeAppointmentDate.getDate()) === day.split(' ')?.[0] &&
                                                    //     String(allMonthNames[activeAppointmentDate.getMonth()]) === month &&
                                                    //     String(activeAppointmentDate.getFullYear()) === year);
                                                    const isSameDate = activeAppointmentDate && (String(activeAppointmentDate.split('-')?.[2]) === day.split(' ')?.[0] &&
                                                        Number(activeAppointmentDate.split('-')?.[1]) === allMonthNames.indexOf(month)+1 &&
                                                        String(activeAppointmentDate.split('-')?.[0]) === year);

                                                    return <li key={ind} className={`py-3 px-2 border-x md:border-x-0 border-y-0 md:border-y cursor-pointer whitespace-nowrap text-center ${isNoAppointmentDay && '!opacity-30 !cursor-not-allowed'} ${isSameDate && '!bg-primary-main !text-white'}`}
                                                        // onClick={() => !isNoAppointmentDay ? setActiveAppointmentDate(new Date(`${month} ${day.split(' ')[0]}, ${year}`)) : ''}
                                                        onClick={() => !isNoAppointmentDay ? setActiveAppointmentDate(`${year}-${allMonthNames.indexOf(month)+1}-${day.split(' ')?.[0]}`) : ''}
                                                        disabled={isNoAppointmentDay}>
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

                {/* All times schedules */}
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow col-span-12 md:col-span-10 '>
                    <div className='h-full w-full relative pb-[75px]'>
                        <h2 className='font-bold text-lg md:text-xl mb-3'>Select your appointment time</h2>

                        {/* Schedule times */}
                        <div className='max-h-[300px] overflow-y-scroll my-scrollbar'>
                            <ul className='pr-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4'>
                                {allTimeSchedules.map((elem, ind) => {
                                    const [currentHours, currentMinutes] = elem?.twentyFourHourFormat?.split(":")

                                    const isUnavailableTime = expectedDoctorAppointments.find(elem=> {
                                        const date = new Date(elem?.bookedDateTime)
                                        const hours = date.getHours()-6
                                        const minutes = date.getMinutes()

                                        console.log(hours, minutes, 'hours minutes');
                                        console.log(currentHours, currentMinutes, 'currentHours, currentMinutes');
                                        return (currentHours == hours) && (currentMinutes == minutes)
                                        // elem.
                                    }) 
                                    console.log(isUnavailableTime, 'isUnavailableTime');
                                    return <li key={ind} className={`p-2 bg-white border rounded cursor-pointer text-center 
                                    ${activeAppointmentTime === elem?.twentyFourHourFormat && '!bg-primary-main !text-white'}
                                    ${isUnavailableTime && '!cursor-not-allowed !pointer-events-none !opacity-30'}
                                    `} onClick={() => setActiveAppointmentTime(elem?.twentyFourHourFormat)}>{elem?.twelveHourFormat}</li>
                                })}
                            </ul>
                        </div>

{/* Booking indicator color and confirm button */}
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
                            <button className={`${(activeAppointmentDate && activeAppointmentTime) ? 'my-btn-one' : 'my-disable-btn-one'}`} onClick={() => bookAppointmentHandler()}>Confirm</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AppointmentSelectCompo;