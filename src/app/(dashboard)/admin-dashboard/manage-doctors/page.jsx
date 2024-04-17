'use client'
import ViewDoctorModal from '@/Components/HelpingCompo/Modal/Dashboard/Admin/ViewDoctorModal';
import MyLoading from '@/Components/HelpingCompo/MyLoading';
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import { AgGridReact } from 'ag-grid-react';
import Image from 'next/image';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { FaEye } from 'react-icons/fa6';
import { MdBlock, MdDelete } from 'react-icons/md';
import { FaCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const DoctorImageCompo = (props) => {
    // console.log(props.data?.name, props.value, 'from image compo');
    return <figure className='h-full flex items-center'><Image src={props.value} alt={props.data?.name} height={40} width={40} /></figure>
}


const ActionCompo = (props) => {
    const [currentDoctor, setCurrentDoctor] = useState({})
    const [statusLoading, setStatusLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { status } = props.data
    const { control, setControl } = props


    const doctorActionHandler = (_id, status) => {
        setStatusLoading(true)


        if (status === 'approve' || status === 'reject') {
            axiosSecure.patch(`/doctor/${status}-doctor/${_id}`).then(res => {
                console.log(res?.data);
                if (status === 'approve') {
                    toast.success(res?.data?.message, {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else if (status === 'reject') {
                    toast.error(res?.data?.message, {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                }
                setControl(!control)
                setStatusLoading(false)
            }).catch(e => {
                setStatusLoading(false)
                console.log(e?.response);
            })
        } else if (status === 'delete') {


            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#09528C",
                cancelButtonColor: "#E57373",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  axiosSecure.delete(`/doctor/delete-doctor/${_id}`).then(res => {
                    if (res.status == 200) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Doctor has been deleted.",
                        icon: "success"
                      });
                      setControl(!control)
                    }
                  }).catch(e => {
                    if (e.response?.data?.errors?.common?.msg) {
                      toast.error(e.response?.data?.errors?.common?.msg, {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    } else {
                      console.log(e.response?.data?.errors);
                    }
                  })
                }
              });

        }
    }

    return <div className='h-full flex items-center gap-1'>
        <span className='cursor-pointer text-xl' title='View doctor' onClick={() => { setCurrentDoctor(props.data); document.getElementById('view_doctor_modal').showModal() }}><FaEye /></span>
        <span className={`cursor-pointer text-xl text-success-desc ${(status === 'approve' || statusLoading) && 'opacity-30 pointer-events-none'}`} title='Approve doctor' onClick={() => doctorActionHandler(props.data?._id, 'approve')}><FaCheck /></span>
        <span className={`cursor-pointer text-xl text-danger-desc ${(status === 'reject' || statusLoading) && 'opacity-30 pointer-events-none'}`} title='Reject doctor' onClick={() => doctorActionHandler(props.data?._id, 'reject')}><MdBlock /></span>
        <span className='cursor-pointer text-xl text-danger-desc' title='Delete doctor' onClick={() => doctorActionHandler(props.data?._id, 'delete')}><MdDelete /></span>

        {/* Modal */}
        <ViewDoctorModal currentDoctor={currentDoctor} />
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
        { field: "title" },
        { field: "current_workplace" },
        { field: "status" },
        { field: "image", cellRenderer: DoctorImageCompo },
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

    useEffect(() => {
        setDoctorsLoading(true)
        axiosSecure('/doctor/all-doctors').then(res => {
            if (res.data?.data?.length > 0) {
                console.log(res.data?.data, 'doctors data');
                setRowData(res.data?.data?.map(elem => ({ _id: elem._id, name: elem.personalInformation?.name, title: elem.title, status: elem.status, image: elem.personalInformation?.avatar, current_workplace: elem.current_workplace })))
                setDoctorsLoading(false)
            } else {
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