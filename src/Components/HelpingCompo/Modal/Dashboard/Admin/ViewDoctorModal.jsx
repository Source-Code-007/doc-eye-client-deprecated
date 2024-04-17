import { FaXmark } from 'react-icons/fa6';

const ViewDoctorModal = ({ currentDoctor }) => {

    console.log(currentDoctor , 'View details doctor from modal');

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