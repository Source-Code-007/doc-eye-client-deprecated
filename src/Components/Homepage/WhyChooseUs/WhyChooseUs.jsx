import React from 'react';
import WhyChooseUsBg from '/public/assets/img/Homepage/WhyChooseUs/WhyChooseUs.svg'
import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import { FaCaretUp, FaHouseTsunami, FaPlus, FaUserDoctor } from 'react-icons/fa6';


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
            subTitle: 'DocWatch is at your service 24×7 aiming to provide the best services.',
            icon: <FaHouseTsunami></FaHouseTsunami>
        },
    ]

    return (
        <div className='min-h-screen bg-left md:bg-bottom' style={{ backgroundImage: `url(${WhyChooseUsBg.src})` }}>
            <div className='my-container space-y-8 pr-0 lg:pr-[300px] pt-[50px] md:pt-[100px]'>
                <CommonSectionTitle subTitle={'Why Choose Us'} title={'Why people Choose DocWatch'}></CommonSectionTitle>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                <ul>
                    <li></li>
                </ul>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10'>
                    {
                        whyChooseUs.map((item, ind) => {
                            return <div key={ind} className='rounded-lg px-8 py-5 pt-14 space-y-4 text-center bg-white my-shadow relative group mb-6 xl:mb-0'>
                                    <span className='p-4 inline-block rounded bg-primary text-white absolute -top-5 left-1/2 -translate-x-1/2 group-hover:scale-110 group-hover:my-shadow transition duration-500'>{item.icon}</span>
                                    <h2 className='my-subtitle !xl:text-3xl'>{item.title}</h2>
                                    <p>{item.subTitle}</p>
                                    <button className='flex items-center gap-3 my-btn-one-outline mx-auto'>Learn more <FaPlus></FaPlus></button>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>
    );
};

export default WhyChooseUs;