import React from 'react';
import WhyChooseUsBg from '/public/assets/img/Homepage/WhyChooseUs/WhyChooseUs.svg'
import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import { FaCaretUp, FaHouseTsunami, FaUserDoctor } from 'react-icons/fa6';


const WhyChooseUs = () => {
    const whyChooseUs = [
        {
            title: 'Qualified Doctors',
            subTitle: 'a person who holds a degree recognised by the Medical Council is registered',
            icon: <FaUserDoctor></FaUserDoctor>
        },
        {
            title: 'Trusted Treatment',
            subTitle: 'DocWatch has many types of treatment to relieve symptoms for all types illness.',
            icon: <FaCaretUp></FaCaretUp>
        },
        {
            title: '24/7 Services',
            subTitle: 'DocWatch is at your service 24×7 aiming to provide the best services that a top notch medical',
            icon: <FaHouseTsunami></FaHouseTsunami>
        },
    ]
    return (
        <div className='h-screen bg-bottom bg-no-repeat' style={{ backgroundImage: `url(${WhyChooseUsBg.src})` }}>
            <div className='my-container space-y-5 pr-[300px] pt-[200px]'>
                <CommonSectionTitle subTitle={'Why Choose Us'} title={'Why people Choose DocWatch'}></CommonSectionTitle>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                <ul>
                    <li></li>
                </ul>

                <div className='grid grid-cols-3 gap-5'>
                    {
                        whyChooseUs.map((item, ind) => {
                            return <div key={ind} className='rounded-lg px-8 py-5 space-y-4 text-center bg-white shadow'>
                                    <span className='p-4 inline-block rounded bg-primary text-white'>{item.icon}</span>
                                    <h2 className='my-title'>{item.title}</h2>
                                    <p>{item.subTitle}</p>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;