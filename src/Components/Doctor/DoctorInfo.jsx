import React from 'react';

const DoctorInfo = ({ doctor }) => {
    const { title, bio, medical_degree, availability, consultationFee, followupFee, doctor_code, patient_attended } = doctor || {}
    const { availabilityDayStart, availabilityDayEnd, availabilityTimeStart, availabilityTimeEnd } = availability || {}
    const { name } = doctor?.personalInformation || {}

    // Converted to 12 hour format
    const convertedTo12HourFormat = (time) => {
        const [hour, minute] = time.split(":")
        const hrs = Number(hour)
        const suffix = hrs >= 12 ? 'PM' : 'AM'
        const convertedHour = hrs % 12 || 12
        const formattedHour = convertedHour.toString().padStart(2, '0')

        return `${formattedHour}:${minute} ${suffix}`

    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* About */}
            <div className='bg-white rounded-md p-2 md:p-4 my-shadow space-y-3 md:space-y-6'>
                <h2 className='font-semibold'>About {title} {name} ({medical_degree})</h2>
                <p>{bio}</p>
            </div>
            {/* Availability and fee */}
            <div className='space-y-3 md:space-y-6'>
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow space-y-2'>
                    <h2 className='font-semibold'>Availability</h2>
                    <div className='pl-2 ml-2 py-1 border-l-2 font-semibold border-primary-main'>
                        <p className='text-gray-500 font-normal'>Instant consultation time</p>
                        <p className='font-semibold'>
                            {availabilityDayStart} - {availabilityDayEnd} ({convertedTo12HourFormat(availabilityTimeStart)} - {convertedTo12HourFormat(availabilityTimeEnd)})
                        </p>
                    </div>
                </div>
                <div className='bg-white rounded-md p-2 md:p-4 my-shadow space-y-2'>
                    <h2 className='font-semibold'>Get in touch</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
                        <div className='pl-2 ml-2 py-1 border-l-2 font-semibold border-primary-main'>
                            <p className='text-gray-500 font-normal'>Consultation fee</p>
                            <p className='font-semibold'>{consultationFee}</p>
                        </div>
                        <div className='pl-2 ml-2 py-1 border-l-2 font-semibold border-primary-main'>
                            <p className='text-gray-500 font-normal'>Followup fee</p>
                            <p className='font-semibold'>{followupFee}</p>
                        </div>
                        <div className='pl-2 ml-2 py-1 border-l-2 font-semibold border-primary-main'>
                            <p className='text-gray-500 font-normal'>Doctor code</p>
                            <p className='font-semibold'>{doctor_code}</p>
                        </div>
                        <div className='pl-2 ml-2 py-1 border-l-2 font-semibold border-primary-main'>
                            <p className='text-gray-500 font-normal'>Patient attended</p>
                            <p className='font-semibold'>{patient_attended}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;