'use client'
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddSpecialty = () => {
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleSubmitFunc = (form) => {
        const {specialtyName, specialtyDescription, specialtyLogo} = form
        axiosSecure.post('/admin/add-specialty', {specialtyName, specialtyDescription, specialtyLogo: specialtyLogo?.[0]}, {headers:{"Content-Type": "multipart/form-data"}}).then(res=> {
            console.log(res?.data);
        }).catch(e=> {
            if(e.response?.data?.errors?.common?.msg){
                toast.error(e.response?.data?.errors?.common?.msg, {
                    position: "bottom-right",
                    autoClose: 5000,
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
                            value: 110,
                            message: "Maximum 110 characters allowed" 
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