import React from "react";
import reactImg from "../assets/react.png";
import html from "../assets/HTML5.png";
import tainwind from "../assets/Tailwind.png";
import node from "../assets/Node.png";
import googleAds from "../assets/googleAds.png";
import faceBookads from "../assets/facebookads.png";
import ContactFrom from "@/components/miniComp/ContactFrom";

const About = () => {
  return (
    <div className="p-4">
      <div className="text-[#ff3a5b] font-extrabold text-5xl text-center">
        About Us
      </div>

      <div>
        <h2 className="mt-5 font-bold text-xl text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent md:text-left lg:px-28 lg:text-3xl">
          WHO WE ARE
        </h2>
        <p className="font-semibold text-left mt-3 lg:px-28 lg:text-2xl">
          At Softmore IT Solutions, we don’t just build websites — we build
          digital foundations for businesses to grow and such
        </p>

        <p className="lg:px-28 lg:text-xl">
          With over <span className="font-semibold text-blue-950">4 years</span>{" "}
          of experience, we have been helping startups, small businesses, and
          enterprises transform their online presence through cutting-edge{" "}
          <span className="font-semibold text-blue-950">web development</span>{" "}
          and <span className="font-semibold text-blue-950">web design</span>{" "}
          services. Our solutions are not just visually appealing — they are{" "}
          <span className="font-semibold text-blue-950">
            performance-driven
          </span>
          , <span className="font-semibold text-blue-950">responsive</span>, and
          tailored to meet your specific goals.
        </p>

        <h2 className="mt-5 font-bold text-xl text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent md:text-left lg:px-28 lg:text-3xl">
          MEET OUR TEAM
        </h2>

        <p className="lg:px-28 lg:text-xl">
          Our skilled team specializes in crafting websites, web applications,
          custom software, and mobile apps. Each member contributes a diverse
          range of expertise and experience, enabling us to deliver holistic
          solutions customized to meet our clients' unique requirements. By
          working together, we ensure every aspect of our clients' digital
          presence and projects is handled with precision. We take pride in our
          strategic approach, strong work ethic, commitment to integrity, and
          delivering impactful results.
        </p>
      </div>

      <p className="mt-5 font-bold text-xl text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent md:text-left lg:px-28 lg:text-3xl">
        We are Web Designer
      </p>

      <div className="flex items-center gap-2  justify-between mt-4 px-5 lg:px-28">
        <img src={reactImg} className="h-10" />
        <img src={html} className="h-10" />
        <img src={tainwind} className="h-10" />
        <img src={node} className="h-10" />
      </div>

      {/* other servers */}

      <p className="mt-5 font-bold text-xl text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent md:text-left lg:px-28 lg:text-3xl">
        But we don’t stop at websites.
      </p>

      <p className="lg:px-28 lg:text-xl">
        We are a{" "}
        <span className="font-semibold text-blue-950 ">
          full-stack digital marketing
        </span>{" "}
        agency specializing in{" "}
        <span className="font-semibold text-blue-950">
          SEO, Google Ads, PPC campaigns, and social media
        </span>{" "}
        strategies that drive real results. Whether you're launching a new
        product or aiming to scale your services, we craft strategies that
        convert traffic into loyal customers.
      </p>

      <div className="flex items-center gap-2  justify-between mt-4 px-5 lg:px-28">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/506/590/small/3d-seo-search-engine-optimization-concept-3d-rendering-png.png"
          className="h-10"
        />
        <img src={googleAds} className="h-10" />
        <img src={faceBookads} className="h-10" />
      </div>

      {/* who we are  */}

      <div>
        <h2 className="mt-5 font-bold text-xl text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent md:text-left lg:px-28 lg:text-3xl">
          Built on Trust, Strengthening Connections.
        </h2>
        <p className="lg:px-28 lg:text-xl">
          At every step, we emphasize transparent communication, sharing
          valuable insights, and aligning with our clients' goals. Our
          dedication to ethical practices and exceptional service reflects our
          belief that trust is the foundation of every successful partnership.
          It's not just about delivering services; it's about building
          meaningful relationships that extend beyond business.
        </p>

        <p className="mt-5 font-bold text-xl text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent lg:text-center lg:text-3xl">
          Contact Us
        </p>

        <ContactFrom />
      </div>
    </div>
  );
};

export default About;
