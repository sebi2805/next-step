// src/pages/StartPage.jsx
import React from "react";
import HomeCarousel from "./HomeCarousel";
import HeroText from "./Hero";
import PersonCarousel from "./PersonCarousel";
import PersonnelSection from "./PersonnelSection";

const HomePage = () => {
  return (
    <div className="container mx-auto pt-[40px]">
      <HeroText />
      <HomeCarousel />
      <PersonCarousel />
      <PersonnelSection />
    </div>
  );
};

export default HomePage;
