import React from "react";
import Sidebar from './components/HomePage_Components/Sidebar';
import Footer from './components/Global_Components/Footer';
import Header from './components/Global_Components/Header';
import AboutSection from './components/HomePage_Components/AboutSection';
import PromoSection from './components/HomePage_Components/PromoSection';
import TeamSection from './components/HomePage_Components/TeamSection';
import StatisticsSection from './components/HomePage_Components/StatisticsSection';
import WorkSection from './components/HomePage_Components/WorkSection';
import SkillsSection from './components/HomePage_Components/SkillsSection';
import ContactSection from './components/HomePage_Components/ContactSection';
import './css/homePage.css';
import { Link } from 'react-scroll';

const HomePage = () => {
    
    return (
        <div id="myPage">
        
          {/* Header with full-height image */}
          <Sidebar />
          <Header id="header"/>
          {/* About Section */}
          <AboutSection />
          {/* Promo Section - "We know design" */}
          <PromoSection />
          {/* Team Section */}
          <TeamSection />
          {/* Promo Section "Statistics" */}
          <StatisticsSection />
          {/* Work Section */}
          <WorkSection />
          {/* Skills Section */}
          <SkillsSection />
          {/* Contact Section */}
          <ContactSection />
          {/* Footer */}
          <Footer />

        </div>
    )
}


export default HomePage;