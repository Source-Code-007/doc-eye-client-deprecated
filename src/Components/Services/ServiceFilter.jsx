'use client'
import { updateAvailability, updateMaxConsultationFee, updateMinConsultationFee, updateRating, updateSortBy } from '@/Redux/features/doctor/doctorsSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import React from 'react';

const ServiceFilter = () => {

    const minConsultationFee = useAppSelector(state => state.doctors.minConsultationFee)
    const maxConsultationFee = useAppSelector(state => state.doctors.maxConsultationFee)
    const sortBy = useAppSelector(state => state.doctors.sortBy)
    const availability = useAppSelector(state => state.doctors.availability)
    const rating = useAppSelector(state => state.doctors.rating)
    const dispatch = useAppDispatch()
    console.log(minConsultationFee, 'minConsultationFee from redux');
    console.log(maxConsultationFee, 'maxConsultationFee from redux');
    console.log(sortBy, 'sortBy from redux');
    console.log(availability, 'availability from redux');
    console.log(rating, 'rating from redux');


    const availabilityOption = ['Online Now', 'Available Today', 'Available in next 3 hours', 'Female Doctors Only']
    const sortByOption = [{ label: 'Relevance (Default)', value: 'Relevance' }, { label: 'Popularity', value: 'Popularity' }, { label: 'Low to High (Fees)', value: 'Ascending' }, { label: 'High to Low (Fees)', value: 'Descending' }, { label: 'Rating', value: 'Rating' }, { label: 'Experience', value: 'Experience' }]

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
                            onChange={(e) => dispatch(updateMaxConsultationFee(e.target.value))}
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
                            onChange={(e) => dispatch(updateMinConsultationFee(e.target.value))}
                        />
                    </div>
                </div>


                {/* Availability */}
                <div>
                    {
                        availabilityOption?.map((item, ind) => {
                            return <div key={ind} className="form-control">
                                <label className="cursor-pointer label justify-normal gap-2">
                                    <input type="checkbox" name='availability' value={item} className="checkbox" checked={availability.includes(item)} onChange={(e) => dispatch(updateAvailability(e.target.value))} />
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
                        {
                            [1, 2, 3, 4, 5].map((elem, ind) => {
                                return <input key={ind} type="radio" name="rating-8" value={elem} checked={elem === rating} onChange={(e) => dispatch(updateRating(Number(e.target.value)))} className="mask mask-star-2 bg-orange-400" />
                            })
                        }
                    </div>
                </div>

                {/* Sort By */}
                <div>
                    <h2 className='font-semibold md:font-bold'>Sort By</h2>
                    {
                        sortByOption?.map((item, ind) => {
                            return <div key={ind} className="form-control">
                                <label className="label cursor-pointer justify-normal gap-2">
                                    <input type="radio" value={item.value} name="radio-10" className="radio checked:bg-primary-main" defaultChecked={item.value === sortBy} onChange={(e) => dispatch(updateSortBy(e.target.value))} />
                                    <span className="label-text">{item.label}</span>
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