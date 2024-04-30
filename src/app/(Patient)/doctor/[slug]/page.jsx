import AdditionalDoctorInfo from '@/Components/Doctor/AdditionalDoctorInfo';
import getDoctor from '@/GetApiData/getDoctor';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa6';
import { FaCalendarAlt } from "react-icons/fa";
import Link from 'next/link';
import { MdWarning } from 'react-icons/md';

const DoctorPage = async ({ params }) => {

    const slug = params.slug
    const doctor = await getDoctor(slug)
    // const [current] = useState('Info')


    // console.log(doctor, 'doctor');
    // console.log(doctor.personalInformation, 'doctor');
    const { _id, title, medical_degree, medical_specialty, current_workplace, consultationFee, total_experience_year, BMDC, patient_attended, createdAt } = doctor || {}
    const { name, avatar } = doctor?.personalInformation || {}

    if (!doctor) {
        return <div className='h-[50vh] flex items-center justify-center'>
            <h2 className='font-bold text-lg sm:text-xl p-2 bg-slate-100 shadow-xl flex items-center gap-2'>Doctor not found! <MdWarning className='text-warning' /></h2>
        </div>
    }

    return (
        <div className='container mx-4 md:mx-auto my-8 space-y-4'>

            {/* personal info */}
            <div className='bg-white rounded-md p-2 md:p-4 my-shadow space-y-4 md:space-y-8'>

                <div className='flex gap-2 md:gap-4'>

                    <div className='flex-1 flex gap-2 md:gap-4'>
                        <figure>
                            <Image src={avatar} alt={name} height={85} width={85} />
                        </figure>
                        <div className='flex-1 space-y-2'>
                            <h2 className='font-bold'>{title} {name}</h2>
                            <p className='font-semibold'>{medical_degree}</p>
                            <div className='flex gap-2 flex-wrap'>
                                <div className='flex gap-[2px] flex-wrap'>{medical_specialty?.map((elem, ind) => {
                                    return <p key={ind} className='bg-primary-main p-[1.5px] rounded font-semibold text-white'>{elem}</p>
                                })}</div>
                            </div>
                            <p className='font-semibold'><span className='text-gray-500'>Current workplace:</span> {current_workplace}</p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col items-center gap-2'>
                        <p className='text-gray-400'>Consultation fee</p>
                        <p className='font-bold text-3xl sm:text-4xl text-primary-main flex gap-1 items-center group-hover:scale-105 transition-all'>	৳ {consultationFee}</p>
                        <button className='my-btn-one'> <FaVideo /> Consultation now</button>
                        <Link href={`/doctor/${_id}/online-appointment`}>
                            <button className='my-btn-two'> <FaCalendarAlt /> Book online appointment</button>
                        </Link>
                    </div>

                </div>

                <div className='flex flex-wrap gap-4 sm:gap-8 md:gap-14'>
                    <div className='space-y-2 text-center'>
                        <p className='text-gray-500'>Total experience</p>
                        <h2 className='font-semibold'>{total_experience_year} years</h2>
                    </div>
                    <div className='space-y-2 text-center'>
                        <p className='text-gray-500'>BMDC</p>
                        <h2 className='font-semibold'>{BMDC}</h2>
                    </div>
                    <div className='space-y-2 text-center'>
                        <p className='text-gray-500'>Patient attended</p>
                        <h2 className='font-semibold'>{patient_attended}</h2>
                    </div>
                    <div className='space-y-2 text-center'>
                        <p className='text-gray-500'>Joined DocEye</p>
                        <h2 className='font-semibold'>{new Date(createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</h2>
                    </div>

                </div>

            </div>

            <AdditionalDoctorInfo doctor={doctor} />


        </div>
    );
};

export default DoctorPage;