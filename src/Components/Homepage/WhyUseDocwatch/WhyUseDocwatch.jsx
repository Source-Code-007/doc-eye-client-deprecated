import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import React from 'react';
import { FaBell, FaCalendar, FaClock, FaFile, FaLock, FaPrescription, FaTrophy } from 'react-icons/fa6';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WhyUseDocwatch = () => {

    const timelines = [
        {
            "id": 1,
            "title": "Easy Appointment Scheduling",
            "description": "Effortlessly book appointments with your preferred doctors at your convenience.",
            "benefit": "Save time and avoid long waiting periods.",
            "iconBg": '#09528C',
            "icon": <FaCalendar></FaCalendar>
        },
        {
            "id": 2,
            "title": "Secure and Private",
            "description": "Your medical data is kept confidential and secure with advanced encryption.",
            "benefit": "Ensure the privacy of your health information.",
            "iconBg": "#E57373",
            "icon": <FaLock></FaLock>
        },
        {
            "id": 3,
            "title": "Access Medical Records",
            "description": "View and manage your medical records online, anytime, anywhere.",
            "benefit": "Have easy access to your complete medical history.",
            "iconBg": "#8B008B",
            "icon": <FaFile></FaFile>
        },
        {
            "id": 4,
            "title": "Real-time Doctor Availability",
            "description": "Check real-time availability of doctors and make last-minute appointments.",
            "benefit": "Get prompt medical care when you need it most.",
            "iconBg": "#00008B",
            "icon": <FaClock></FaClock>
        },
        {
            "id": 5,
            "title": "Prescription Refills",
            "description": "Request prescription refills quickly and conveniently through the portal.",
            "benefit": "Avoid running out of essential medications.",
            "iconBg": "#07332F",
            "icon": <FaPrescription></FaPrescription>
        },
        {
            "id": 6,
            "title": "Health Reminders",
            "description": "Receive timely health reminders and notifications for check-ups and vaccinations.",
            "benefit": "Stay on top of your health and never miss an important appointment.",
            "iconBg": "#F7A582",
            "icon": <FaBell></FaBell>
        }
    ]



    return (
        <div className='py-20'>

            <div className='my-container space-y-8 md:space-y-16'>
                <CommonSectionTitle title={'Why use DocWatch?'}></CommonSectionTitle>
                <VerticalTimeline>
                    {
                        timelines.map((timeline) => {
                            const { id, title, description, benefit, icon, iconBg } = timeline
                            return <VerticalTimelineElement
                                key={id}
                                iconStyle={{ background: `${iconBg}`, color: '#fff' }}
                                icon={icon}
                            >
                                <h2 className='font-bold text-3xl'>{title}</h2>
                                <p>{description}</p>
                                <p className='flex gap-2 items-center'> <span className='text-xl !opacity-50'><FaTrophy></FaTrophy></span> {benefit}</p>
                            </VerticalTimelineElement>
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default WhyUseDocwatch;