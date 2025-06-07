import React from "react";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Layout/Footer";
import WebSiteDesign from "./pages/Services/WebSite";
import Seo from "./pages/Services/Seo";
import SocialMediaOptimize from "./pages/Services/SocialMediaManagemnt";
import AdService from "./pages/Services/AdsService";
import PrivacyPage from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import TermsPage from "./pages/TermCondition";

const App = () => {
  return (
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/web-design" element={<WebSiteDesign />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route
            path="/services/social-media-management"
            element={<SocialMediaOptimize />}
          />
          <Route path="/services/ads" element={<AdService />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/term-condition" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
