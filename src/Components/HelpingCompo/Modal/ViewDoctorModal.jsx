import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { FaFile, FaXmark } from 'react-icons/fa6';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image';
import { toast } from 'react-toastify';

const ViewDoctorModal = ({ doctor }) => {





    return (
        <dialog id="view_doctor_modal" className="modal">
            <div className="modal-box relative">
                <form className='space-y-2 '>


                   Doctor modal

                    <button type='submit' className='my-btn-one !mt-5 !pt-0 !pb-0'>Submit</button>
                </form>


                <div className="modal-action absolute top-0 right-1 mt-0">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-red-500 text-2xl"><FaXmark /></button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ViewDoctorModal;