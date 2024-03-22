'use client'
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ManageDoctorsPage = () => {
    
    const [currPageStatus, setCurrPageStatus] = useState('Add doctor')


    return (
        <div className='p-2 md:p-4'>

            <Tabs>
                <TabList>
                    {
                        ['Add doctor', 'Manage doctors'].map((elem, ind) => {
                            return <Tab key={ind}><button onClick={()=> setCurrPageStatus(elem)} className={`${elem === currPageStatus? 'my-tab-btn-one' : 'my-tab-btn-one-outline'}`}>{elem}</button></Tab>
                        })
                    }
                </TabList>

                <TabPanel>
                   Add doctor
                </TabPanel>
                <TabPanel>
                   Update doctor
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ManageDoctorsPage;