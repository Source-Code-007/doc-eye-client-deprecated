import React from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';

const HealthPlanModal = ({ planForModal }) => {
    console.log(planForModal);
    const { planName, description, price, features } = planForModal
    return (
        <dialog id="health_plan_modal" className="modal">
            <div className="modal-box !p-0 !max-w-5xl" >
                <div className="modal-action relative mt-0">
                    <form method="dialog" className='p-5 pt-14 w-full bg-primary text-white space-y-4'>
                        {/* Cross icon */}
                        <button className="absolute top-2 left-2 text-[#E57373] text-3xl outline-none rounded p-3 cursor-pointer"> <FaXmark></FaXmark> </button>

                        <div className='space-y-2'>
                            <h2 className='my-subtitle'>DocEye Health Care Plans</h2>
                            <h2 className='my-title'>{planName}</h2>
                        </div>
                        <ul className='space-y-3 py-5'>
                            {features?.map((feature, ind) => <li key={ind} className='flex items-center gap-2'> <FaCheck></FaCheck> {feature}</li>)}
                        </ul>

                        <p className='font-semibold'>Choose Plan</p>
                        <div className='grid grid-cols-3 gap-4 text-black'>
                            <div className='bg-white p-4'>
                                <h2>Pay Monthly</h2>
                                <p>{price}</p>
                            </div>
                            <div className='bg-white p-4'>
                                <h2>Pay Quarterly</h2>
                                <p>{price*6}</p>
                            </div>
                            <div className='bg-white p-4'>
                                <h2>Pay annually</h2>
                                <p>{price*6}</p>
                            </div>
                        </div>


                        <button className='my-btn-two'>Subscribe Now</button>

                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default HealthPlanModal;