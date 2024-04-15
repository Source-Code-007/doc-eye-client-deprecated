import React from 'react';
import areYouDoctorBanner from '/public/assets/img/areYouDoctor.jpg'
import Link from 'next/link';
import DoctorReview from '@/Components/ForDoctors/DoctorReview';
import JoinNowButton from '@/Components/ForDoctors/JoinNowButton';

const ForDoctorsPage = () => {


    return (
        <div className=''>

            {/* banner */}
            <div className='h-[93vh] bg-cover bg-center bg-slate-500 bg-blend-overlay' style={{ backgroundImage: `url(${areYouDoctorBanner.src})` }}>
                <div className='my-container h-full flex flex-col justify-center gap-5 text-black'>
                    <h2 className='my-title'>Are you <br /> A Certified Doctor?</h2>
                    <h6 className='my-subtitle'>Join Our Healthcare Network</h6>
                    <p className='pr-20 md:pr-[520px] xl:pr-[830px]'>Join DocEye network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service. As a member of our healthcare network, you{"'"}ll gain access to a wealth of medical knowledge, research, and the latest advancements in the field.</p>
                       <JoinNowButton/>

                </div>
                <div>

                </div>
            </div>


            <div className='my-container py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                <div className='space-y-4'>
                    <h2 className='my-subtitle'>Benefits of joining</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda dolorum, neque illo ullam minima alias atque dicta suscipit! Quia sapiente cumque autem ab. Quas laborum quidem quisquam temporibus optio voluptas aliquid, nostrum voluptatum molestias minus consequatur? In modi mollitia ipsa itaque ipsam praesentium commodi quam maxime, sint error asperiores.</p>
                </div>

            <DoctorReview/>
            </div>
        </div>
    );
};

export default ForDoctorsPage;