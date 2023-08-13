import React from 'react';
import contactBG2 from '/public/assets/img/Homepage/Contact/contactBG2.jpg'


const Contact = () => {
    const servicesNeeded = [
        { value: "general", label: "General Inquiry" },
        { value: "appointment", label: "Appointment Request" },
        { value: "billing", label: "Billing and Payments" },
        { value: "feedback", label: "Feedback or Suggestions" },
        { value: "other", label: "Other" }
    ];

    return (

        <div className='min-h-screen bg-bottom bg-cover bg-slate-800 bg-blend-overlay bg-fixed flex items-center justify-center' style={{ backgroundImage: `url(${contactBG2.src})` }}>
            <form className='rounded bg-slate-800 bg-opacity-30 p-8 my-shadow w-5/6 md:w-7/12 mx-auto'>
                <h2 className='my-title text-slate-50 mb-12'>Reach out to us</h2>
                <div className='space-y-6'>
                    <div className='space-y-6 md:space-y-0 md:flex gap-4 justify-between'>
                        <input type="text" placeholder="Full name" className="w-full my-inp" />
                        <input type="text" placeholder="Email" className="w-full my-inp" />
                    </div>
                    <select defaultValue={''} className="w-full my-inp !text-slate-300">
                        <option disabled value={''}>How can we help you?</option>
                        {
                            servicesNeeded.map((service, ind) => {
                                return <option key={ind} value={service.value}>{service.label}</option>
                            })
                        }
                    </select>
                    <textarea type="text" placeholder="your query here..." className="my-inp w-full h-60" />

                    <button className='my-btn-two'>Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Contact;