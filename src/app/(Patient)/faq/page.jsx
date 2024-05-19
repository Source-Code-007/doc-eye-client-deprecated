import FAQuestions from '@/Components/HelpingCompo/FAQuestions';
import FAQbg from '../../../../public/assets/img/Homepage/FAQ/FAQ-doctor-portal.png'
import React from 'react';


const faqPage = () => {
    return (
        <div className='py-16' style={{backgroundImage: `url(${FAQbg.src})`}}>
            <div className='my-container space-y-8'>
                <h2 className='my-title'>Commonly asked question</h2>
                <FAQuestions></FAQuestions>
            </div>
        </div>
    );
};

export default faqPage;