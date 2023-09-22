import React from 'react';
import { FaXmark } from 'react-icons/fa6';

const HealthPlanModal = () => {
    return (
        <dialog id="health_plan_modal" className="modal">
            <div className="modal-box !p-0 !max-w-5xl" >
                <div className="modal-action relative mt-0">
                    <form method="dialog" className='p-5 pt-14 w-full bg-primary'>
                        {/* Cross icon */}
                        <button className="absolute top-2 left-2 text-red-500 text-3xl outline-none rounded p-3"> <FaXmark></FaXmark> </button>

                        <h2 className='my-subtitle'>Health Plan</h2>
                        
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default HealthPlanModal;