import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h2 className='bg-red-500 py-2 text-center font-bold text-3xl'>Dashboard nav</h2>
            {children}
        </div>
    );
};

export default layout;