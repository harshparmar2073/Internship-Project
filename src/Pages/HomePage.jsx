import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import BuySellSection from "../components/Buy-Sell-Section";


const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection/>
      <InfoSection />
      <BuySellSection/>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
