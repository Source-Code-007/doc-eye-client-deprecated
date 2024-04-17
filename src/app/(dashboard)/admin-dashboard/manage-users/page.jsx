'use client'
import ManageUsers from '@/Components/Dashboard/Admin/UserCompo/ManageUsers';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ManageUsersPage = () => {
    const [currPageStatus, setCurrPageStatus] = useState('Add user')


    return (
        <div className='p-2 md:p-4'>

            <Tabs>
                <TabList>
                    {
                        ['Add user', 'Manage users'].map((elem, ind) => {
                            return <Tab key={ind}><button onClick={()=> setCurrPageStatus(elem)} className={`${elem === currPageStatus? 'my-tab-btn-one' : 'my-tab-btn-one-outline'}`}>{elem}</button></Tab>
                        })
                    }
                </TabList>

                <TabPanel>
                   Add user
                </TabPanel>
                <TabPanel>
                   <ManageUsers/>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ManageUsersPage;