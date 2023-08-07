
import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Nav/Navbar';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
        </>
    );
};

export default Homepage;    