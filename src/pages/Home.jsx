import Navbar from "@/components/Layout/Navbar";
import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "@/components/Layout/Footer";
import Summery from "@/components/Layout/Summery";

const Home = () => {
  return (
    <div className="font-poppins">
      <Hero />
      <Summery />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
