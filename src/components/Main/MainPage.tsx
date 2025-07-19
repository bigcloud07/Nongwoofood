import React from 'react';
import Top from "./Top";
import AboutSection from './AboutSection';
import BrandSection from './BrandSection';
import Footer from './Footer';
import NewsroomSection from './NewsroomSection';
import CommunitySection from './CommunitySection';
import RecipeSection from './RecipeSection';


const MainPage: React.FC = () => {
    return (
        <div>
            <Top/>
            
            <AboutSection/>
            <BrandSection/>
            <NewsroomSection/>
            
            <RecipeSection/>

            <CommunitySection/>
            <Footer/>
        </div>
    );
};

export default MainPage;