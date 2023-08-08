import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import doctorConsultation from '/public/assets/img/Homepage/Services/doctorConsultation.png'
import healthRecord from '/public/assets/img/Homepage/Services/healthRecord.png'
import medicationReminder from '/public/assets/img/Homepage/Services/medicationReminder.png'
import support from '/public/assets/img/Homepage/Services/support.png'
import Image from 'next/image';


const Services = () => {

    const servicesData = [
        {
            title: "Online Consultations",
            description: "Connect with experienced doctors for virtual medical consultations any time.",
            img: doctorConsultation
        },
        {
            title: "Health Records",
            description: "Securely store and access your medical records online for easy reference.",
            img: healthRecord
        },
        {
            title: "Medication Reminders",
            description: "Receive timely reminders for taking medications to ensure your well-being.",
            img: medicationReminder
        },
        {
            title: "24/7 Support",
            description: "Access round-the-clock assistance for medical queries and concerns.",
            img: support
        },
    ];


    return (
        <div className='py-28'>
            <div className='my-container grid grid-cols-2 gap-5'>

                <div></div>

                <div className='space-y-5'>
                    <CommonSectionTitle subTitle={'Services'} title={'Main services by DocWatch'}></CommonSectionTitle>
                    <p>We at Kivicare offer world-class solutions in cardiac treatments with the help of advanced tools and the experience of pioneer cardiology team</p>
                    <button className='flex items-center gap-3 my-btn-one-outline'>Learn more <FaPlus></FaPlus></button>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 space-y-6 md:space-y-0 absolute left-0 right-0 pr-32 pl-[400px] py-14'>
                        {
                            servicesData.map((service, ind) => {
                                return <div key={ind} className='rounded-lg px-8 py-5 pt-14 space-y-4 text-center bg-white my-shadow relative'>
                                    {/* <span className='p-4 inline-block rounded bg-primary text-white absolute -top-5 left-1/2 -translate-x-1/2'>{service.icon}</span> */}
                                    <figure className='absolute left-1/2 -top-5 -translate-x-1/2 p-4 bg-slate-50 shadow-md border rounded'>
                                        <Image src={service.img} alt='doctorConsultation' height={40} width={40}></Image>
                                    </figure>
                                    <h2 className='my-subtitle !xl:text-3xl'>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <button className='flex items-center gap-3 my-btn-one-outline mx-auto'>Learn more <FaPlus></FaPlus></button>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;