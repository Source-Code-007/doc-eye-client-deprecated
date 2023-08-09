import CommonSectionTitle from '@/Components/HelpingCompo/CommonSectionTitle';
import FAQuestions from '@/Components/HelpingCompo/FAQuestions';
import React from 'react';

const page = () => {
    return (
        <div className='pt-28 pb-8'>
            <div className='my-container space-y-8'>
                <h2 className='my-title'>Commonly asked question</h2>
                <FAQuestions></FAQuestions>
            </div>
        </div>
    );
};

export default page;