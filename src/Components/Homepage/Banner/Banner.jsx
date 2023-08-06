import React from 'react';
import banner1 from '/public/assets/img/Homepage/DocEyeBanner.svg'

const Banner = () => {
    const services = [
        {
            title: 'Live Video Consultaion',
            subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos impedit maxime. Quia, officiis aliquid!',
            icon: 'icon'
        },
        {
            title: 'Live Video Consultaion',
            subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos impedit maxime. Quia, officiis aliquid!',
            icon: 'icon'
        },
        {
            title: 'Live Video Consultaion',
            subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos impedit maxime. Quia, officiis aliquid!',
            icon: 'icon'
        },
        {
            title: 'Live Video Consultaion',
            subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos impedit maxime. Quia, officiis aliquid!',
            icon: 'icon'
        },
    ]
    return (
        <div className='h-screen bg-center' style={{ backgroundImage: `url(${banner1.src})` }}>
            <div className='my-container pt-28 flex flex-col justify-between h-3/4 text-center'>
                <h2 className='my-title'>Complete health solution DocWatch!</h2>
                <p className='font-semibold text-lg text-slate-700 px-16'>Empowering Lives, Shaping Futures. For years, our dedicated work has touched and transformed thousands of lives, leading them towards mental well-being and a more fulfilling existence. Join us as we continue this impactful journey together.</p>
                <div className='flex gap-5'>
                    {services.map((service, ind) => <div key={ind} className='py-7 px-3 rounded bg-white space-y-4 text-center shadow-lg'>
                        <span>{service.icon}</span>
                        <h2 className='font-semibold text-2xl'>{service.title}</h2>
                        <p>{service.subTitle.slice(0, 60)}</p>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Banner;