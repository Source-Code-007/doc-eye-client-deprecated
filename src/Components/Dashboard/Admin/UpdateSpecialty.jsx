import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid



const CustomButtonComponent = (props) => {
  return <button className='bg-primary-main px-2 py-[2px] rounded text-white font-semibold' onClick={() => console.log(props?.data, 'data')}>Push Me!</button>;
};

const UpdateSpecialty = () => {
  const axiosSecure = useAxiosSecure()
  const [specialties, setSpecialties] = useState([])


  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name", filter: true },
    { field: "description", flex: 1},
    { field: "action", sortable: false, cellRenderer: CustomButtonComponent },
  ]);
  useEffect(() => {
    axiosSecure('/admin/specialties').then(res => {
      if (res.data?.length > 0) {
        setRowData(res.data.map(elem=> ( {name: elem.specialtyName, description: elem.specialtyDescription})))
        setSpecialties(res.data)
        console.log(res.data);
      }
    }).catch(e => {
      console.log(e);
    })
  }, [axiosSecure])

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

          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>


    </div>
  );
};

export default UpdateSpecialty;