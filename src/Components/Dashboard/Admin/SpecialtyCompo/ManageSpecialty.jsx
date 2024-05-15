import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import UpdateSpecialtyModal from '@/Components/HelpingCompo/Modal/Dashboard/Admin/UpdateSpecialtyModal';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component



// SWAL
import Swal from 'sweetalert2';
import MyLoading from '@/Components/HelpingCompo/MyLoading';


const SpecialtyActionCompo = (props) => {
  const [currentSpecialty, setCurrentSpecialty] = useState({})
  const axiosSecure = useAxiosSecure()
  const { control, setControl } = props


  // Delete specialty handler
  const deleteSpecialtyHandler = (id) => {
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
        axiosSecure.delete(`/admin/delete-specialty/${id}`).then(res => {
          if (res.status == 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
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

  return <div className='h-full flex items-center gap-1'>
    <span className='cursor-pointer text-xl ' onClick={() => { document.getElementById('update_specialty_modal').showModal(); setCurrentSpecialty(props.data) }}><CiEdit /></span>
    <span className='cursor-pointer text-xl text-danger-desc' onClick={() => deleteSpecialtyHandler(props.data?._id)}><MdDelete /></span>

    {/* Modal */}
    <UpdateSpecialtyModal currentSpecialty={currentSpecialty} control={control} setControl={setControl} />
  </div>
};

const SpecialtyImageCompo = (props) => {
  // console.log(props.data?.name, props.value, 'from image compo');
  return <figure className='h-full flex items-center'><Image src={props.value} alt={props.data?.name} height={50} width={50} /></figure>
}



const ManageSpecialty = () => {
  const axiosSecure = useAxiosSecure()
  const [specialtiesLoading, setSpecialtiesLoading] = useState(false)
  const [specialties, setSpecialties] = useState([])
  const [control, setControl] = useState(true)


  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name" },
    { field: "description", flex: 1 },
    { field: "image", cellRenderer: SpecialtyImageCompo },
    {
      field: "action", sortable: false, filter: false, cellRenderer: SpecialtyActionCompo, cellRendererParams: {
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
    setSpecialtiesLoading(true)
    axiosSecure('/admin/specialties').then(res => {
      if (res.data?.data?.length > 0) {
        setRowData(res.data?.data.map(elem => ({ _id: elem._id, name: elem.specialtyName, description: elem.specialtyDescription, image: elem.specialtyLogo })))
        setSpecialties(res.data?.data)
        setSpecialtiesLoading(false)
      } else {
        setSpecialtiesLoading(false)
      }
    }).catch(e => {
      setSpecialtiesLoading(false)
      console.log(e);
    })
  }, [control])

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 20];
  return (
    <div>
      <h2 className='font-bold text-2xl md:text-3xl pb-3'>Manage Specialty</h2>

      {
        specialtiesLoading ? <div className='my-h-screen flex items-center justify-center'><MyLoading /></div> : <div
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

export default ManageSpecialty;