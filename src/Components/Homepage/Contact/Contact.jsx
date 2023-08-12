import React from 'react';
import contactBG2 from '/public/assets/img/Homepage/Contact/contactBG2.jpg'


const Contact = () => {
    return (
        
        <div className='min-h-screen bg-bottom bg-cover bg-slate-800 bg-blend-overlay' style={{ backgroundImage: `url(${contactBG2.src})` }}>
                <form className='rounded bg-slate-800 bg-opacity-5 p-8'></form>
        </div>
    );
};

export default Contact;