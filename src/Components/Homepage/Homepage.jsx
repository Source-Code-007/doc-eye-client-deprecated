
import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Nav/Navbar';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Services from './Services/Services';
import AppSection from './AppSection/AppSection';
import FAQ from './FAQ/FAQ';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import EasyStep from './EasyStep/EasyStep';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
            <AppSection></AppSection>
            <Testimonial></Testimonial>
            <EasyStep></EasyStep>
            <Contact></Contact>
            <FAQ></FAQ>
        </>
    );
};

export default Homepage;  