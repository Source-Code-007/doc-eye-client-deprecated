'use client'
import HealthPlanModal from '@/Components/HelpingCompo/HealthPlanModal';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const HealthPlansPage = () => {
    const healthPlans = [
        {
            planName: "Basic Plan",
            description: "Access to basic features like appointment scheduling and medical records.",
            price: 150,
            features: [
                "Basic appointment scheduling",
                "Access to medical records",
                "Limited access to specialized services",
                "Limited consultation time with doctors",
            ],
        },
        {
            planName: "Silver Plan",
            description: "Extended access to features, including appointment scheduling, medical records, and prescription requests.",
            price: 300,
            features: [
                "Extended appointment scheduling",
                "Access to medical records",
                "Prescription requests",
                "Longer consultation times with doctors",
                "Access to a broader range of specialists and services",
            ],
        },
        {
            planName: "Gold Plan",
            description: "Comprehensive access to all portal features, including appointment scheduling, medical records, prescription requests, and video consultations.",
            price: 500,
            features: [
                "Comprehensive appointment scheduling",
                "Access to medical records",
                "Video consultations",
                "Priority scheduling and shorter waiting times for appointments",
                "Prescription delivery services",
            ],
        },
        {
            planName: "Family Plan",
            description: "Covers all features available in the Gold Plan for the primary account holder and their family members.",
            price: 600,
            features: [
                "Comprehensive appointment scheduling for the entire family",
                "Shared medical records",
                "Discounted rates for additional family members",
            ],
        },
        {
            planName: "Telemedicine Plan",
            description: "Focused on telemedicine services.",
            price: 650,
            features: [
                "Unlimited video consultations with doctors",
                "Access to online prescription and medical advice",
                "Remote monitoring of health data",
            ],
        },
        {
            planName: "Customized Plan",
            description: "Tailored plans for individuals with specific medical conditions.",
            price: 750,
            features: [
                "Personalized health management and regular check-ins",
                "Access to specialized support groups and resources",
            ],
        },
        {
            planName: "Student Plan",
            description: "Designed for students and educational institutions.",
            price: 250,
            features: [
                "Affordable rates for students",
                "Access to basic health services and resources",
            ],
        },
        {
            planName: "Senior Citizen Plan",
            description: "Specialized plans for senior citizens.",
            price: 300,
            features: [
                "Priority access to geriatric specialists",
                "Health assessments and preventive care",
            ],
        },
    ];

    return (
        <div className='min-h-[93vh] py-8'>
            <div className='my-container'>
                <h2 className='my-banner-title xl:text-6xl mb-6 md:mb-8 text-center'>DocEye Health Plans</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {healthPlans.map((hp, ind) => {
                        const { planName, description, price, features } = hp
                        return <div key={ind} className='rounded-lg space-y-4 my-shadow-2 p-5 relative pb-20'>
                            <h2 className='my-subtitle text-primary'>{planName}</h2>
                            <h3 className='my-title'>৳ {price} <span className='!text-lg font-semibold'>/monthly</span></h3>
                            <p className='text-slate-700'> {description}</p>
                            <ul className='space-y-3'>
                                {features?.map((feature, ind) => <li key={ind} className='flex items-center gap-2'> <FaCheck></FaCheck> {feature}</li>)}
                            </ul>
                            <button className='my-btn-one absolute bottom-2 left-0 right-0 mx-5' onClick={() => document.getElementById('health_plan_modal').showModal()}>Subscribe Now</button>
                        </div>
                    })}
                </div>
            </div>
            <HealthPlanModal></HealthPlanModal>
        </div>
    );
};

export default HealthPlansPage;