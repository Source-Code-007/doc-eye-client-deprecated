'use client'
import MyLoading from '@/Components/HelpingCompo/MyLoading';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { FaEye, FaMessage, FaTrash } from 'react-icons/fa6';
import useExpectedDoctorAppointmentsData from '@/Hooks/useData/useAppointmentsData';
import { useAuth } from '@/Providers/AuthProvider';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component

const DoctorImageCompo = (props) => {
    return <figure className='h-full flex items-center'><Image src={props.value} alt={props.data?.name} height={40} width={40} /></figure>
}


const ActionCompo = (props) => {

    return <div className='h-full flex items-center gap-1'>
        <span className='cursor-pointer text-xl' title='View appointment details'><FaEye /></span>
        <span className='cursor-pointer text-xl' title='Chat with doctor'><FaMessage /></span>
        <span className='cursor-pointer text-xl' title='Delete appointment'><FaTrash /></span>

    </div>
}


const MyAppointmentsCompo = () => {
    const [control, setControl] = useState(true)
    const { user, authLoading } = useAuth()
    const { expectedDoctorAppointments, expectedDoctorAppointmentsLoading } = useExpectedDoctorAppointmentsData(user?._id)

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "Doctor name", flex: 1},
        { field: "Doctor avatar", flex: 1, cellRenderer: DoctorImageCompo, cellRendererParams: {} },
        { field: "User name", flex: 1 },
        { field: "Appointment date time", flex: 1 },
        {
            field: "action", sortable: false, filter: false, cellRenderer: ActionCompo, cellRendererParams: {
                control: control,
                setControl: setControl
            }
        },
    ]);
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])

    
    useEffect(()=> {
        setRowData(expectedDoctorAppointments.map(elem => ({ _id: elem._id, 'Doctor name': elem.doctorUserInfo?.name, 'Doctor avatar': elem.doctorUserInfo?.avatar, 'User name': elem.patientUserInfo?.avatar, 'Appointment date time': `${new Date(elem.bookedDateTime).toLocaleTimeString()} ${new Date(elem.bookedDateTime).toLocaleDateString()}` })))
    }, [expectedDoctorAppointments])

    // useEffect(() => {
    //     setDoctorsLoading(true)
    //     axiosSecure('/doctor/all-doctors').then(res => {
    //         if (res.data?.data?.length > 0) {
    //             console.log(res.data?.data, 'doctors data');
    //             setRowData(res.data?.data?.map(elem => ({ _id: elem._id, name: elem.personalInformation?.name, title: elem.title, status: elem.status, image: elem.personalInformation?.avatar, current_workplace: elem.current_workplace })))
    //             setDoctorsLoading(false)
    //         } else {
    //             setDoctorsLoading(false)
    //         }
    //     }).catch(e => {
    //         setDoctorsLoading(false)
    //         console.log(e);
    //     })
    // }, [control])


console.log(expectedDoctorAppointmentsLoading, 'expectedDoctorAppointmentsLoading');    console.log(rowData)

    const pagination = true;
    const paginationPageSize = 10;
    const paginationPageSizeSelector = [5, 10, 20];

    return (
        <div>
            <h2 className='font-bold text-2xl md:text-3xl pb-3'>My appointments</h2>


            {
                (expectedDoctorAppointmentsLoading || authLoading) ? <div className='my-h-screen flex items-center justify-center'><MyLoading /></div> : <div
                    className="ag-theme-quartz" // applying the grid theme
                    style={{ height: 500 }} // the grid will fill the size of the parent container
                >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}

                        pagination={pagination}
                        paginationPageSize={paginationPageSize}
                        paginationPageSizeSelector={paginationPageSizeSelector}
                    />
                </div>
            }

        </div>
    );
};

export default MyAppointmentsCompo;