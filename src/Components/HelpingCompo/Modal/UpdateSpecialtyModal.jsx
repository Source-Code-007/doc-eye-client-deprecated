import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { FaFile, FaXmark } from 'react-icons/fa6';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image';
import { toast } from 'react-toastify';

const UpdateSpecialtyModal = ({ currentSpecialty, control, setControl }) => {
    const axiosSecure = useAxiosSecure()
    const [specialtyImg, setSpecialtyImg] = useState('')
    const [specialtyImgError, setSpecialtyImgError] = useState('')

    // console.log(control, setControl, 'control and setControl from modal ');

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitted },
    } = useForm();

    // Dropzone
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles, 'acceptedFiles');
        if (acceptedFiles?.[0]?.type === 'image/png' || acceptedFiles?.[0]?.type === 'image/jpg' || acceptedFiles?.[0]?.type === 'image/jpeg') {
            setSpecialtyImg(acceptedFiles)
            setSpecialtyImgError('')
        } else {
            setSpecialtyImgError('Only .jpg, .jpeg and .png format allowed!')
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    
    // Handle reset modal data
    const handleResetModalData = ()=> {
        reset()
        setSpecialtyImg('')
        setSpecialtyImgError('')
    }

    // Handle update specialty function
    const handleSubmitFunc = (form) => {

        const { specialtyName, specialtyDescription } = form

        console.log(form, currentSpecialty?.image, 'submit');

        if(specialtyImgError){
            return
        }
        axiosSecure.patch(`/admin/update-specialty/${currentSpecialty?._id}`, { specialtyName, specialtyDescription, specialtyLogo: specialtyImg? specialtyImg : currentSpecialty?.image }, { headers: { "Content-Type": "multipart/form-data" } }).then(res => {

            console.log(res, 39);
            if (res?.data?.id) {
                console.log('done');
                console.log(res?.data?.id, 'id');

                // TODO: not working this toast
                toast.success(res?.data?.msg, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                handleResetModalData()
                setControl(!control) // Update specialty data
            }
        }).catch(e => {
            if (e.response?.data?.errors?.common?.msg || e.response?.data?.errors?.multer?.msg) {
                toast.error(e.response?.data?.errors?.common?.msg || e.response?.data?.errors?.multer?.msg, {
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


    return (
        <dialog id="update_specialty_modal" className="modal">
            <div className="modal-box relative">
                <form onSubmit={handleSubmit(handleSubmitFunc)} className='space-y-2 '>

                    <div className="flex-1">

                        <div {...getRootProps()} className='h-[160px] border border-dotted border-primary-main p-2 rounded flex items-center justify-center font-bold overflow-hidden'>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>Drop the file here ...</p> : currentSpecialty?.image || specialtyImg?.[0] ? <Image src={specialtyImg?.[0]? URL.createObjectURL(specialtyImg?.[0]) : currentSpecialty?.image} alt={currentSpecialty?.name} height={50} width={50}/> :
                                    <p className='flex items-center gap-1 flex-col'>Drag and drop a file here, or click to select file <FaFile className='text-3xl text-primary-main' /></p>
                            }
                        </div>
                        {isSubmitted && specialtyImgError && (<p className="text-red-500">*{specialtyImgError}</p>)}
                    </div>

                    {/* <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-primary-desc dark:text-white">Specialty logo</label>
                        <input type="file" className={`my-file-inp`} {...register("specialtyLogo", { required: true })} />
                        {errors.specialtyLogo && (<p className="text-red-500">*This field is required</p>)}
                    </div> */}
                    <div >
                        <label className="block mb-2 text-sm font-medium text-primary-desc dark:text-white">Specialty name <span className='text-secondary-main'>*</span></label>
                        <input type="text" className={`my-inp`} defaultValue={currentSpecialty.name} placeholder='Specialty name' {...register("specialtyName", { required: true })} />
                        {errors.specialtyName && (<p className="text-red-500">*This field is required</p>)}
                    </div>
                    <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-primary-desc dark:text-white">Specialty description<span className='text-secondary-main'>*</span></label>
                        <textarea type="text" className={`my-textarea`} defaultValue={currentSpecialty.description} placeholder='Specialty description within 110 characters' {...register("specialtyDescription", {
                            required: "This field is required",
                            maxLength: {
                                value: 110,
                                message: "Maximum 110 characters allowed"
                            }
                        })}></textarea>
                        {errors.specialtyDescription && (<p className="text-red-500">*{errors.specialtyDescription?.message}</p>)}
                    </div>

                    <button type='submit' className='my-btn-one !mt-5'>Submit</button>
                </form>


                <div className="modal-action absolute top-0 right-1 mt-0">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-red-500 text-2xl" onClick={() => handleResetModalData()}><FaXmark /></button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default UpdateSpecialtyModal;