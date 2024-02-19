'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const AddSpecialty = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleSubmitFunc = (form) => {
        console.log(form);
    }

    return (
        <div className='p-2 md:p-4'>
            <h2 className='font-bold text-2xl md:text-3xl pb-3'>Add Specialty</h2>

            <form onSubmit={handleSubmit(handleSubmitFunc)} className='space-y-2 w-5/6 md:w-4/6'>
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
                    <input type="text" className={`my-inp`} placeholder='Specialty description' {...register("specialtyDescription", {
                        required: "This field is required",
                        maxLength: { 
                            value: 75,
                            message: "Maximum 75 words allowed" 
                        }
                    })} />
                    {errors.specialtyDescription && (<p className="text-red-500">*{errors.specialtyDescription?.message}</p>)}
                </div>

                <button type='submit' className='my-btn-one !mt-5'>Submit</button>
            </form>

        </div>
    );
};

export default AddSpecialty;