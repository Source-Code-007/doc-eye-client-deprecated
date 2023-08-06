import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='my-container'>
            <div className='grid grid-cols-2'>
                <div></div>
                <div>
                    <CommonSectionTitle title={'Your Health, Our Priority'} subTitle={'About us'}></CommonSectionTitle>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;