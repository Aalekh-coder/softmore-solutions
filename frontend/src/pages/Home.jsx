import Navbar from "@/components/Layout/Navbar";

import Hero from "./home/Hero";
import Work from "./home/Work";
import Footer from "@/components/Layout/Footer";
import Summery from "@/pages/home/Summery";
import WebAbout from "./home/WebAbout";
import WebProcess from "./home/WebProcess";
import ClientReview from "./home/ClientReview";
import Chat from "./home/Chat";
import { Helmet } from 'react-helmet-async';



const Home = () => {


  return (
    <div className="font-poppins">
    <Helmet>
        {/* Title */}
        <title>India's No. 1 Digital Marketing Agency in Delhi | Softmore IT</title>

        {/* Standard Meta Description */}
        <meta name="description" content="Get ahead of the competition with our digital marketing services. Our agency specializes in SEO, PPC, social media, and more. Contact us today for a personalized strategy to help your business succeed" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:title" content="India's No. 1 Digital Marketing Agency in Delhi | Softmore IT" />
        <meta property="og:description" content="Get ahead of the competition with our digital marketing services. Our agency specializes in SEO, PPC, social media, and more. Contact us today for a personalized strategy to help your business succeed" />
        <meta property="og:image" content="https://www.softmoreit.co.in/img/banner/banner-3.jpg" />
        <meta property="og:url" content="https://www.softmoreit.co.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Softmore IT" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.softmoreit.co.in/" />

        {/* Favicon - Consolidated and corrected paths */}
        <link rel="icon" href="/img/11111.png" type="image/png" /> {/* Use absolute path from public/ or root */}
        {/* If 'img/favicon.ico' is also in your public folder, it should be '/img/favicon.ico' */}
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" /> {/* Correct type for .ico */}

        {/* Schema Markup (JSON-LD) - IMPORTANT: content must be stringified */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Softmore",
              "url": "https://www.softmoreit.co.in/",
              "logo": "https://softmoreit.co.in/img/logo.png",
              "description": "Get ahead of the competition with our digital marketing services. Our agency specializes in SEO, PPC, social media, and more. Contact us today for a personalized strategy to help your business succeed",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A1B/8, Janakpuri, New Delhi, India 110058",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110058",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9266474766",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/SoftemoreIT/",
                "https://www.instagram.com/softmore_it/",
                "https://in.linkedin.com/company/softmore-it"
              ]
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <Summery />
      <WebAbout />
      <Work />
      <WebProcess />
      <ClientReview />
     <Chat />
    </div>
  );
};

export default Home;
