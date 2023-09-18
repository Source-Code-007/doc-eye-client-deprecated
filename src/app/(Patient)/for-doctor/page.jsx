import React from 'react';
import areYouDoctorBanner from '/public/assets/img/areYouDoctor.jpg'

const ForDoctorPage = () => {
    return (
        <div className=''>
            <div className='h-[93vh] bg-cover bg-center bg-slate-600 bg-blend-overlay' style={{backgroundImage: `url(${areYouDoctorBanner.src})`}}>
                <div className='my-container h-full flex flex-col justify-center gap-5 text-white'>
                    <h2 className='my-title'>Are you <br /> A Certified Doctor?</h2>
                    <h6 className='my-subtitle'>Join Our Healthcare Network</h6>
                    <p className='text-slate-200 pr-20 md:pr-[520px] xl:pr-[830px]'>Join DocTime network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service. As a member of our healthcare network, you{"'"}ll gain access to a wealth of medical knowledge, research, and the latest advancements in the field.</p>
                    <button className='my-btn-two w-fit'>Join now</button>

                </div>
                <div>

                </div>
            </div>
            <div className='my-container'>

            </div>
        </div>
    );
};

export default ForDoctorPage;