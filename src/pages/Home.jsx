import Navbar from "@/components/Layout/Navbar";
import React from "react";
import Hero from "./home/Hero";
import Work from "./home/Work";
import Footer from "@/components/Layout/Footer";
import Summery from "@/pages/home/Summery";
import WebAbout from "./home/WebAbout";

const Home = () => {
  return (
    <div className="font-poppins">
      <Hero />
      <Summery />
      <WebAbout />
        <Work /> 
      <Footer /> 
    </div>
  );
};

export default Home;
