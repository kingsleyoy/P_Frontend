import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MyCarousel from "../../components/Carousel/MyCarousel";
import LogCollection from "../../components/FunLogCollection/LogCollection";
import AboutSection from "../../components/AboutSection/AboutSection";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home-Container">
      <div className="home-Wrapper">
        <NavBar />
        <MyCarousel />
        <LogCollection />
        <AboutSection />
        <Support />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
