'use client'
import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Services from './Services/Services';
import AppSection from './AppSection/AppSection';
import FAQ from './FAQ/FAQ';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import EasyStep from './EasyStep/EasyStep';
import WhyUseDocEye from './WhyUseDocEye/WhyUseDocEye';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <WhyUseDocEye/>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
            <Testimonial></Testimonial>
            <AppSection></AppSection>
            <EasyStep></EasyStep>
            <Contact></Contact>
            <FAQ></FAQ>
        </>
    );
};

export default Homepage;  