import React from 'react';
import DropdownNav from "./DropdownNav";
import MainSlider from './MainSlider';
import AboutSection from './AboutSection';
import BrandSection from './BrandSection';
import Footer from './Footer';


const MainPage: React.FC = () => {
    return (
        <div>
            <DropdownNav/>
            <MainSlider/>
            <AboutSection/>
            <BrandSection/>
            <Footer/>
        </div>
    );
};

export default MainPage;