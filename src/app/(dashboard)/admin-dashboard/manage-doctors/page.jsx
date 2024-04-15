'use client'
import ViewDoctorModal from '@/Components/HelpingCompo/Modal/ViewDoctorModal';
import MyLoading from '@/Components/HelpingCompo/MyLoading';
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import { AgGridReact } from 'ag-grid-react';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { FaEye } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from "react-icons/fa6";

const DoctorImageCompo = (props) => {
    // console.log(props.data?.name, props.value, 'from image compo');
    return <figure className='h-full flex items-center'><Image src={props.value} alt={props.data?.name} height={50} width={50} /></figure>
}
const MedicalSpecialtyCompo = (props)=> {
    console.log(props.value, ' props.value from specialy  compo from doctor manage page');
    if(props?.value?.length> 0){
        return props?.value?.map((elem, ind)=> {
            return <div key={ind} className='py-[2px] text-green-500'>{elem}</div>
        })
    } else{
        return <div className='text-red-500'>No medical specialty</div>
    }
}

const ActionCompo = (props)=> {
    const [currentDoctor, setCurrentDoctor] = useState({})

    const doctorActionHandler = (_id, status)=> {
        if(status === 'reject'){
            console.log('Reject');
        } else if(status === 'approve'){    
        console.log('Approve');
        }
    }

    return <div className='h-full flex items-center gap-1'>
    <span className='cursor-pointer text-xl ' onClick={() => { document.getElementById('view_doctor_modal').showModal(); setCurrentDoctor(props.data) }}><FaEye /></span>
    <span className='cursor-pointer text-xl text-danger-desc' onClick={() => doctorActionHandler(props.data?._id, 'reject')}><MdDelete /></span>
    <span className='cursor-pointer text-xl text-danger-desc' onClick={() => doctorActionHandler(props.data?._id, 'approve')}><FaCheck /></span>

    {/* Modal */}
    <ViewDoctorModal currentDoctor={currentDoctor}/>
  </div>
}

const ManageDoctorsPage = () => {
    const axiosSecure = useAxiosSecure()
    const [doctorsLoading, setDoctorsLoading] = useState(false)
    const [control, setControl] = useState(true)


    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "name" },
        { field: "title", flex: 1 },
        { field: "specialty", cellRenderer:  MedicalSpecialtyCompo},
        { field: "current_workplace" },
        { field: "action", cellRenderer: ActionCompo },
    ]);
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])

    useEffect(() => {
        setDoctorsLoading(true)
        axiosSecure('/doctor/all-doctors').then(res => {
            if (res.data?.data?.length > 0) {
                console.log(res.data?.data, 'doctors data');
                setRowData(res.data?.data?.map(elem => ({ _id: elem._id, name: elem.personalInformation?.name, title: elem.title, specialty: elem.medical_specialty, current_workplace: elem.current_workplace })))
                setDoctorsLoading(false)
            } else{
                setDoctorsLoading(false)
            }
        }).catch(e => {
            setDoctorsLoading(false)
            console.log(e);
        })
    }, [control])

    console.log(rowData)

    const pagination = true;
    const paginationPageSize = 10;
    const paginationPageSizeSelector = [5, 10, 20];

    return (
        <div className='p-2 md:p-4'>
            <h2 className='font-bold text-2xl md:text-3xl pb-3'>Manage doctors</h2>

            {
                doctorsLoading ? <div className='my-h-screen flex items-center justify-center'><MyLoading /></div> : <div
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

export default ManageDoctorsPage;