import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateSpecialtyModal = ({ currentSpecialty }) => {
    const axiosSecure = useAxiosSecure()


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const handleSubmitFunc = (form) => {
        const {specialtyName, specialtyDescription, specialtyLogo} = form
        axiosSecure.patch(`/admin/update-specialty/`, {specialtyName, specialtyDescription, specialtyLogo: specialtyLogo?.[0]}, {headers:{"Content-Type": "multipart/form-data"}}).then(res=> {
            if(res?.data?._id){
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
                    reset()
            }
        }).catch(e=> {
            if(e.response?.data?.errors?.common?.msg || e.response?.data?.errors?.multer?.msg){
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
            } else{
                console.log(e.response?.data?.errors);
            }
        })
    }

    console.log(currentSpecialty, 'from update modal');
    return (
        <dialog id="update_specialty_modal" className="modal">
            <div className="modal-box relative">
                <h3 className="font-bold text-lg">Hello!</h3>
                <form onSubmit={handleSubmit(handleSubmitFunc)} className='space-y-2 '>
                    <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-primary-desc dark:text-white">Specialty logo <span className='text-secondary-main'>*</span></label>
                        <input type="file" className={`my-file-inp`} {...register("specialtyLogo", { required: true })} />
                        {errors.specialtyLogo && (<p className="text-red-500">*This field is required</p>)}
                    </div>
                    <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-primary-desc dark:text-white">Specialty name <span className='text-secondary-main'>*</span></label>
                        <input type="text" className={`my-inp`} placeholder='Specialty name' {...register("specialtyName", { required: true })} />
                        {errors.specialtyName && (<p className="text-red-500">*This field is required</p>)}
                    </div>
                    <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-primary-desc dark:text-white">Specialty description<span className='text-secondary-main'>*</span></label>
                        <textarea type="text" className={`my-textarea`} placeholder='Specialty description within 110 characters' {...register("specialtyDescription", {
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


                <div className="modal-action mt-0 absolute top-0 right-0">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">X</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default UpdateSpecialtyModal;