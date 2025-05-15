import { Icon } from "lucide-react";
import React from "react";

const SocialMediaManagemnt = () => {
  const socialMediaServices = [
    {
      title: "Content Creation",
      description:
        "Engaging visuals, reels, and copy that aligns with your brand to captivate your audience.",
      icon: "Image",
    },
    {
      title: "Account Management",
      description:
        "End-to-end management of your social platforms including posting, scheduling, and community interaction.",
      icon: "UserCheck",
    },
    {
      title: "Performance Analytics",
      description:
        "Monthly performance reports with key insights to track growth, reach, and engagement.",
      icon: "BarChart2",
    },
    {
      title: "Platform Strategy",
      description:
        "Customized strategies for Instagram, Facebook, LinkedIn, and more to meet your business goals.",
      icon: "Target",
    },
    {
      title: "Ad Campaigns",
      description:
        "Paid social media campaigns to increase brand awareness, leads, and conversions.",
      icon: "Zap",
    },
    {
      title: "Brand Voice Development",
      description:
        "We help you define and maintain a consistent brand voice across all platforms.",
      icon: "Mic",
    },
    {
      title: "Hashtag & Trend Research",
      description:
        "Maximize your organic reach with trending and relevant hashtags tailored to your niche.",
      icon: "Search",
    },
    {
      title: "Influencer Collaboration",
      description:
        "Connect with influencers that align with your brand to expand reach and credibility.",
      icon: "Users",
    },
  ];

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between px-6 py-10 lg:px-24  text-black">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            Grow Your Brand Presence with <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-3xl md:text-4xl">
              Powerful Social Media Management
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-900">
            At <strong>Softmore IT Solutions</strong>, we help businesses build
            a strong online identity. From content planning to community
            engagement — we manage your entire digital presence with strategy &
            creativity.
          </p>

          <button className="mt-4 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
            Request Free Strategy Call
          </button>
        </div>

        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="../social1.webp"
            alt="Social Media Management"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

    
    </>
  );
};

export default SocialMediaManagemnt;
