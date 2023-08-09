
import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Nav/Navbar';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Services from './Services/Services';
import AppSection from './AppSection/AppSection';
import FAQ from './FAQ/FAQ';

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
            <AppSection></AppSection>
            <FAQ></FAQ>
        </>
    );
};

export default Homepage;    