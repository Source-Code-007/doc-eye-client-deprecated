import React from 'react';

const MyLoading = ({className, loop}) => {
    return (
        <div className='flex items-center justify-center'>
            {/* <Lottie animationData={lottieLoading} loop={loop !== 'undefined'? loop : true} className={`${className? className : 'h-20 w-20'}`} /> */}
            <span className="loading loading-ring loading-lg"></span>
        </div>
    );
};

export default MyLoading;