'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ServiceFilter = () => {

    const minConsultationFee2 = useSelector(state => state.doctors.minConsultationFee)
    const [minConsultationFee, setMinConsultationFee] = useState(100);
    const [maxConsultationFee, setMaxConsultationFee] = useState(3000);

    console.log(minConsultationFee2,'from redux');


    const availability = ['Online Now', 'Available Today', 'Available in next 3 hours', 'Female Doctors Only']
    const sortBy = ['Relevance (Default)', 'Popularity', 'Low to High (Fees)', 'High to Low (Fees)', 'Rating', 'Experience']
    return (
        <div>
            <div className='flex justify-between gap-2 mb-3'>
                <span className='font-bold'>Filter</span>
                <span className='btn btn-sm font-bold'>Reset</span>
            </div>

            <div className='space-y-4 md:space-y-6'>
              
                {/* Consultation fee max range */}
                <div className='mb-12 space-y-1'>
                    <h2 className='font-semibold md:font-bold'>Consultation Fee Max</h2>
                    <div className="tooltip tooltip-open tooltip-bottom tooltip-error block" data-tip={`Max ${maxConsultationFee} BDT`}>
                        <input
                            type="range"
                            min={100}
                            max={3000}
                            step={100}
                            className="range range-xs block"
                            value={maxConsultationFee}
                            onChange={(e)=> setMaxConsultationFee(e.target.value)}
                        />
                    </div>
                </div>

                {/* Consultation fees min range */}
                <div className='my-2 space-y-1'>
                    <h2 className='font-semibold md:font-bold'>Consultation Fee Min</h2>
                    <div className="tooltip tooltip-open tooltip-bottom tooltip-error block" data-tip={`Min ${minConsultationFee} BDT`}>
                        <input
                            type="range"
                            min={100}
                            max={3000}
                            step={100}
                            className="range range-xs block"
                            value={minConsultationFee}
                            onChange={(e)=> setMinConsultationFee(e.target.value)}
                        />
                    </div>
                </div>


                {/* Availability */}
                <div>
                    {
                        availability?.map((item, ind) => {
                            return <div key={ind} className="form-control">
                                <label className="cursor-pointer label justify-normal gap-2">
                                    <input type="checkbox" name='availability' value={item} className="checkbox" />
                                    <span className="label-text font-semibold text-gray-700">{item}</span>
                                </label>
                            </div>
                        })
                    }
                </div>

                {/* Select ratings */}
                <div>
                    <h2 className='font-semibold md:font-bold'>Select Rating</h2>

                    <div className="rating rating-md">
                        <input type="radio" name="rating-8" value={1} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" value={2} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" value={3} className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-8" value={4} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" value={5} className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>

                {/* Sort By */}
                <div>
                    <h2 className='font-semibold md:font-bold'>Sort By</h2>
                    {
                        sortBy?.map((item, ind) => {
                            if (ind === 0) {
                                console.log(item);
                            }
                            return <div key={ind} className="form-control">
                                <label className="label cursor-pointer justify-normal gap-2">
                                    <input type="radio" value={item} name="radio-10" className="radio checked:bg-primary-main" defaultChecked={ind === 0} />
                                    <span className="label-text">{item}</span>
                                </label>
                            </div>
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default ServiceFilter;