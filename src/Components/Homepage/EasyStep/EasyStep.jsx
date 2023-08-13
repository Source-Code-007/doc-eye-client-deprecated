import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import React, { useState } from 'react';
import videoConsultationMockup1 from '/public/assets/img/Homepage/EasyStep/videoConsultationMockup1.svg'
import onlinePrescriptionMockup2 from '/public/assets/img/Homepage/EasyStep/onlinePrescriptionMockup2.svg'
import Image from 'next/image';
import { FaUserDoctor } from 'react-icons/fa6';

const EasyStep = () => {
    const [mockup, setMockup] = useState(videoConsultationMockup1)
    const easySteps = [
        {
            title: "Video Consultation",
            description: "Connect with experienced doctors through secure video consultations. Receive personalized medical advice and guidance from the comfort of your home."
        },
        {
            title: "Instant Prescription",
            description: "Get your prescriptions instantly. Our qualified doctors will diagnose your condition and provide accurate prescriptions, allowing you to quickly access the medications you need."
        },
        {
            title: "Order Medicine Online",
            description: "Conveniently order your prescribed medications online. Our platform offers a seamless experience to have your medicines delivered to your doorstep, ensuring you never miss a dose."
        }
    ];

    return (
        <div className='py-24'>
            <div className='my-container'>
                <CommonSectionTitle title={'Simple Ways to Quickly Improve Your Well-being'} subTitle={'Small Changes for a Rapid Boost in Your Overall Health'}></CommonSectionTitle>

                <div className='md:flex gap-5 py-12'>
                    <div className='w-full md:w-2/6 flex items-center relative'>
                        <figure className='w-full h-[250px]'>
                            <Image src={mockup} alt='videoConsultationMockup' fill={true}></Image>
                        </figure>
                    </div>
                    <div className='flex-1 flex md:flex-col justify-center md:justify-between gap-5 md:gap-10 py-10 md:py-20'>

                        {
                            easySteps.map((step, ind) => {
                                return <div key={ind} className='flex gap-4 md:gap-8 xl:gap-12 items-center p-4 md:p-8'>
                                    <span className='my-title hidden md:block'>{ind + 1}</span>
                                    <span className={`p-6 rounded my-shadow cursor-pointer ${step.title === mockup ? 'bg-primary text-slate-50' : 'bg-slate-50 text-slate-800'}`} onClick={() => { setMockup(step.title) }}>
                                        <FaUserDoctor></FaUserDoctor>
                                    </span>
                                    <div className='space-y-4 hidden md:block'>
                                        <h2 className='my-subtitle'>{step.title}</h2>
                                        <p>{step.description}</p>
                                    </div></div>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EasyStep;