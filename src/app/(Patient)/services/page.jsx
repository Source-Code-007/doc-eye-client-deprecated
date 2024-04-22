import getSpecialties from '@/GetApiData/getSpecialties';
import Image from 'next/image';
import Link from 'next/link';



const ServicesPage = async () => {
    const services = await getSpecialties()

    console.log(services, 15);


    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-[24px] md:text-[38px] my-3'>Please choose a specialty</h2>
            {services?.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {services?.map((service, ind) => {
                    return <Link key={ind} className='py-6 md:py-8 px-4 md:px-6 rounded-xl border bg-slate-50 my-shadow flex gap-4 md:gap-6 items-center cursor-pointer' href={`services/${service?.specialtyName}`}>
                        <Image height={50} width={50} alt={service?.specialtyName} src={service?.specialtyLogo}></Image>
                        <div className='space-y-2'>
                            <h2 className='text-black font-semibold md:font-bold text-lg md:text-xl'> {service?.specialtyName}</h2>
                            <p className='text-slate-700'>{service?.specialtyDescription}</p>
                        </div>
                    </Link>
                })}
            </div> : <div className='h-[50vh] flex items-center justify-center'>
                <h2 className='font-bold text-lg md:text-xl p-2 bg-slate-100 shadow-xl'>No services available!</h2>
            </div>}
        </div>
    );
};

export default ServicesPage;