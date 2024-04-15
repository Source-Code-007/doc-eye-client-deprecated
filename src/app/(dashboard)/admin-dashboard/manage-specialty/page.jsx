'use client'

import AddSpecialty from "@/Components/Dashboard/Admin/Specialty/AddSpecialty";
import UpdateSpecialty from "@/Components/Dashboard/Admin/Specialty/UpdateSpecialty";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const ManageSpecialty = () => {

    const [currPageStatus, setCurrPageStatus] = useState('Add specialty')

    return (
        <div className='p-2 md:p-4'>

            <Tabs >
                <TabList>
                    {
                        ['Add specialty', 'Manage specialties'].map((elem, ind) => {
                            return <Tab key={ind}><button onClick={()=> setCurrPageStatus(elem)} className={`${elem === currPageStatus? 'my-tab-btn-one' : 'my-tab-btn-one-outline'}`}>{elem}</button></Tab>
                        })
                    }
                </TabList>

{
    ['Add specialty', 'Manage specialties'].map((elem,ind)=> {
                return <TabPanel key={ind}>
                   {currPageStatus === 'Add specialty' && <AddSpecialty/>}
                   {currPageStatus === 'Manage specialties' && <UpdateSpecialty/>}
                </TabPanel>
    })
}
                {/* <TabPanel>
                   <UpdateSpecialty/>
                </TabPanel> */}
            </Tabs>

        </div>
    );
};

export default ManageSpecialty;