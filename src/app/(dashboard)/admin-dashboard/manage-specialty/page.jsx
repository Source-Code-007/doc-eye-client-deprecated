'use client'

import AddSpecialty from "@/Components/Dashboard/Admin/Specialty/AddSpecialty";
import UpdateSpecialty from "@/Components/Dashboard/Admin/UpdateSpecialty";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const ManageSpecialty = () => {

    const [currPageStatus, setCurrPageStatus] = useState('Add specialty')


    return (
        <div className='p-2 md:p-4'>

            <Tabs >
                <TabList>
                    {
                        ['Add specialty', 'Manage specialty'].map((elem, ind) => {
                            return <Tab key={ind}><button onClick={()=> setCurrPageStatus(elem)} className={`${elem === currPageStatus? 'my-tab-btn-one' : 'my-tab-btn-one-outline'}`}>{elem}</button></Tab>
                        })
                    }
                </TabList>

                <TabPanel>
                   <AddSpecialty/>
                </TabPanel>
                <TabPanel>
                   <UpdateSpecialty/>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ManageSpecialty;