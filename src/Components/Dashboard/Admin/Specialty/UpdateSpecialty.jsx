import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import UpdateSpecialtyModal from '@/Components/HelpingCompo/Modal/UpdateSpecialtyModal';
import useAxiosInstance from '@/Hooks/Axios/useAxiosInstance';

// AG grid
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

// SWAL
import Swal from 'sweetalert2';


const SpecialtyActionCompo = (props) => {
  const [currentSpecialty, setCurrentSpecialty] = useState({})
  const axiosInstance = useAxiosInstance()
  const {control, setControl} = props


  // Delete specialty handler
  const deleteSpecialty = (id) => {
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
        axiosInstance.delete(`/admin/delete-specialty/${id}`).then(res => {
          if (res.status == 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        }).catch(e => {
          console.log(e);
        })
      }
    });

  }

  return <div className='h-full flex items-center gap-1'>
    <span className='cursor-pointer text-xl ' onClick={() => { document.getElementById('update_specialty_modal').showModal(); setCurrentSpecialty(props.data) }}><CiEdit /></span>
    <span className='cursor-pointer text-xl text-danger-desc' onClick={() => deleteSpecialty(props.data?._id)}><MdDelete /></span>

    {/* Modal */}
    <UpdateSpecialtyModal currentSpecialty={currentSpecialty} control={control} setControl={setControl} />
  </div>
};

const SpecialtyImageCompo = (props) => {
  // console.log(props.data?.name, props.value, 'from image compo');
  return <figure className='h-full flex items-center'><Image src={props.value} alt={props.data?.name} height={50} width={50} /></figure>
}



const UpdateSpecialty = () => {
  const axiosSecure = useAxiosSecure()
  const [specialties, setSpecialties] = useState([])
  const [control, setControl] = useState(true)


  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name" },
    { field: "description", flex: 1 },
    { field: "image", cellRenderer: SpecialtyImageCompo },
    { field: "action", sortable: false, filter: false, cellRenderer: SpecialtyActionCompo, cellRendererParams: {
      control: control,
      setControl: setControl
    } },
  ]);
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true
  }), [])

  useEffect(() => {
    axiosSecure('/admin/specialties').then(res => {
      if (res.data?.length > 0) {
        console.log(res?.data);
        setRowData(res.data.map(elem => ({ _id: elem._id, name: elem.specialtyName, description: elem.specialtyDescription, image: elem.specialtyLogo })))
        setSpecialties(res.data)
        console.log(res.data);
      }
    }).catch(e => {
      console.log(e);
    })
  }, [axiosSecure, control])

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 20];
  return (
    <div>
      <h2 className='font-bold text-2xl md:text-3xl pb-3'>Manage Specialty</h2>

      {/* <div className='overflow-hidden overflow-x-auto text-nowrap'>
        <table className='min-w-full w-full table-auto mb-1 border border-black'>
          <thead>
            <tr>
              <th className='border border-black p-3'>Name</th>
              <th className='border border-black p-3'>Description</th>
              <th className='border border-black p-3'>Image</th>
              <th className='border border-black p-3'>Action</th>
            </tr>
          </thead>

          <tbody className=' text-center font-semibold'>
            {specialties.map((elem, ind) => {
              const { specialtyName, specialtyDescription, specialtyLogo } = elem
              return <tr key={ind} >
                <td className='border border-black p-3'>{specialtyName}</td>
                <td className='border border-black p-3'>{specialtyDescription}</td>
                <td className='border border-black p-3'>
                    <Image src={specialtyLogo} height={100} width={100} alt={specialtyName}/>
                </td>
                <td className='border border-black p-3'>
                    <div className='flex items-center gap-1'>
                        <span className='cursor-pointer text-xl'><CiEdit /></span>
                        <span className='cursor-pointer text-xl'><MdDelete /></span>
                        <span className='cursor-pointer text-xl'><FaEye /></span>
                    </div>
                </td>
              </tr>
            })
            }
          </tbody>
        </table>
      </div> */}

      <div
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

    </div>

  );
};

export default UpdateSpecialty;