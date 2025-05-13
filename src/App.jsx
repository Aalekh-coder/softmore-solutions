import React from "react";
import Hero from "./pages/home/Hero";
import Navbar from "./components/Layout/Navbar";
import Work from "./pages/home/Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Layout/Footer";
import WebSiteDesign from "./pages/Services/WebSite";
import Seo from "./pages/Services/Seo";
import SocialMediaOptimize from "./pages/Services/SocialMediaOptimize";
import SocialMedia from "./pages/Services/Ads-Service";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-design" element={<WebSiteDesign />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/social-media-optimize" element={<SocialMediaOptimize />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
