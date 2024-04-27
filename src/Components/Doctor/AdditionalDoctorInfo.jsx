'use client'
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import DoctorInfo from './DoctorInfo';
import DoctorExperience from './DoctorExperience';
import DoctorReviews from './DoctorReviews';
import { IoBagCheckSharp, IoInformationCircle } from "react-icons/io5";
import { MdRateReview } from 'react-icons/md';

const AdditionalDoctorInfo = ({ doctor }) => {
    const [currentDoctorInfo, setCurrentDoctorInfo] = useState('Info')

    const { _id, title, medical_degree, medical_specialty, current_workplace, consultationFee, total_experience_year, BMDC, patient_attended, createdAt, workingExperiences } = doctor || {}
    const { name, avatar } = doctor?.personalInformation || {}

    return (
        <div>
            <Tabs>
                <TabList className='mb-8 flex gap-2 md:gap-3'>
                    {
                        ['Info', 'Experience', 'Review'].map((elem, ind) => <Tab key={ind}><button className={`font-semibold p-2 flex items-center gap-1
                        ${currentDoctorInfo !== elem && 'hover:border-b-2 hover:border-b-primary-main'}  
                        ${currentDoctorInfo === elem && 'rounded text-white bg-primary-main'}`}
                            onClick={() => setCurrentDoctorInfo(elem)}>
                            {elem === 'Info' ? <IoInformationCircle /> : elem === 'Experience' ? <IoBagCheckSharp /> : elem === 'Review' && <MdRateReview />}{elem}
                        </button></Tab>
                        )
                    }
                </TabList>

                {
                    ['Info', 'Experience', 'Review'].map((elem, ind) => {
                        return <TabPanel key={ind}>
                            {currentDoctorInfo === 'Info' && <DoctorInfo doctor={doctor} />}
                            {currentDoctorInfo === 'Experience' && <DoctorExperience experience={workingExperiences} />}
                            {currentDoctorInfo === 'Review' && <DoctorReviews doctor={doctor} />}
                        </TabPanel>
                    })
                }
            </Tabs>
        </div>
    );
};

export default AdditionalDoctorInfo;