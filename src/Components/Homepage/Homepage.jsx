
import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Nav/Navbar';
import AboutUs from './AboutUs/AboutUs';

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </>
    );
};

export default Homepage;    