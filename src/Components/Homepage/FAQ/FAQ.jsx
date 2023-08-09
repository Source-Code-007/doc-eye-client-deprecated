import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import FAQuestions from '@/Components/HelpingCompo/FAQuestions';
import Link from 'next/link';
import React from 'react';
import FAQbg from '/public/assets/img/Homepage/FAQ/FAQ-doctor-portal.png'

const FAQ = () => {
    return (
        <div className='py-24 bg-cover bg-center' style={{backgroundImage: `url(${FAQbg.src})`}}>
            <div className='my-container space-y-8'>
                <CommonSectionTitle title={'Commonly asked question'} subTitle={'Exploring Common Queries About Our Services'}></CommonSectionTitle>

                {/* Accordion */}
                <div>
                    <FAQuestions limit={5}></FAQuestions>
                    <div className='text-center mt-16'>
                        <Link href={'/faq'}><button className='my-btn-one-outline'>View all FAQ's</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;