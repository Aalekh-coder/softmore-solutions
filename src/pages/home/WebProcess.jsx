// import { CircleArrowRight } from "lucide-react";
// import React, { useEffect, useRef } from "react";

// const WebProcess = () => {
//   const processCardItems = [
//     {
//       img: "https://media.istockphoto.com/id/1222811180/photo/digital-marketing.jpg?s=612x612&w=0&k=20&c=qBv1W2rZZedjBna94aR5GDEgsEcmHrRpoqLvb727Weo=",
//       title: "Web Strategy",
//       description:
//         "We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
//       tagLine: "In this phase, we:",
//       point: [
//         "Identify your target audiences",
//         "Analyze user pain-points & define your UVPs",
//         "Define key performance indicators (KPIs)",
//         "Create a roadmap to growing your brand online",
//       ],
//     },
//     {
//       img: "https://www.shutterstock.com/image-vector/information-architecture-abstract-concept-vector-260nw-2227231561.jpg",
//       title: "Planning & Information Architecture",
//       description:
//         "We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, we ensure seamless user journeys to key conversion points.",
//       tagLine: "Here’s how our team does it:",
//       point: [
//         "We develop a base-level user flow & sitemap",
//         "We utilize wireframing to create a seamless conversion funnel",
//         "We add on-brand, consistent messaging to your structure",
//       ],
//     },
//     {
//       img: "https://newborn.media/wp-content/uploads/2021/12/Creative-design.png",
//       title: "Creative Design",
//       description:
//         "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in NYC.",
//       tagLine:
//         "With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:",
//       point: [
//         "Thoughtfully place design features to guide to the user journey",
//         "Utilize interactive videos & animations",
//         "Create custom, branded illustrations",
//       ],
//     },
//     {
//       img: "https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045697/33_img_responsive_design/33_img_responsive_design-jpg?_i=AA",
//       title: "Responsive Development",
//       description:
//         "A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
//       tagLine: "To ensure your website reaches and satisfies every user, we:",
//       point: [
//         "Gather touchpoint & user-channel insights",
//         "Transform your wireframes into a flexible UI",
//         "Test across devices before approval & launch",
//       ],
//     },
//     {
//       img: "https://kinsta.com/wp-content/uploads/2017/05/how-to-optimize-images-for-web-and-performance.jpg",
//       title: "Quality Assurance (QA)",
//       description:
//         "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
//       tagLine: "Our design specialists make this happen by:",
//       point: [
//         "Following a strict protocol for every website launch",
//         "Offering post-launch maintenance & optimization",
//         "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
//       ],
//     },
//     {
//       img: "https://static.vecteezy.com/system/resources/thumbnails/059/417/155/small/start-online-business-website-analytics-building-internet-e-commerce-marketing-optimization-dashboard-chart-diagram-smart-online-strategy-businessman-working-with-computer-launch-website-rocket-vector.jpg",
//       title: "Launch & Optimization",
//       description:
//         "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
//       tagLine: "Our design specialists make this happen by:",
//       point: [
//         "Following a strict protocol for every website launch",
//         "Offering post-launch maintenance & optimization",
//         "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
//       ],
//     },
//   ];

//   const scrollContainerRef = useRef(null);

//   const handleScroll = (e) => {
//     const scrollTop = window.scrollY; // Get the Y-axis scroll position
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollLeft = scrollTop; // Sync Y-axis scroll with X-axis
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


//   return (
//     <div className="w-full">
//       <h1 className="font-bold text-3xl px-3 md:px-16 md:text-4xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mt-10 lg:px-5 lg:text-5xl lg:mb-10 lg:text-center ">
//         Our Approach to Getting Things Done
//       </h1>
//       <p className="px-3 text-sm font-semibold md:px-16 md:text-lg lg:text-center lg:px-32">
//         Discover the behind-the-scenes journey of our custom web design process.
//         We craft tailored websites for brands of all sizes, delivering impactful
//         and measurable outcomes.
//       </p>
//       <div 
//       ref={scrollContainerRef}
//       // className="w-full overflow-x-scroll flex items-start"
//       className="w-full overflow-x-scroll grid grid-flow-col "
//       >
//         {processCardItems?.map((item, index) => {
//           return (
//             <ProcessCard
//               key={index}
//               img={item?.img}
//               title={item?.title}
//               description={item?.description}
//               tagLine={item?.tagLine}
//               points={item?.point}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default WebProcess;

// const ProcessCard = ({ img, title, description, tagLine, points }) => {
//   return (
//     <div className="">
//       <div className="w-[90vw] mx-5 mt-8 md:px-20 lg:w-[50vw]">
//         <img src={img} className="rounded-lg" />
//       </div>
//       <p className="px-5 py-3 md:px-28 bg-gradient-to-r from-amber-400 to-rose-500 font-bold text-2xl bg-clip-text text-transparent">
//         {title}
//       </p>
//       <p className="px-5 font-semibold text-sm md:px-28">{description}</p>
//       <p className="px-5 py-2 md:px-28 text-blue-700 underline font-semibold">
//         {tagLine}
//       </p>
//       <div className="md:px-28">
//         {points.map((item, index) => {
//           return (
//             <span key={index} className="flex items-start px-2 gap-2 mt-3">
//               <span>
//                 <CircleArrowRight className="text-blue-800" />
//               </span>
//               <span className="px-2">{item}</span>
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };


import { CircleArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const WebProcess = () => {
   const processCardItems = [
    {
      img: "https://media.istockphoto.com/id/1222811180/photo/digital-marketing.jpg?s=612x612&w=0&k=20&c=qBv1W2rZZedjBna94aR5GDEgsEcmHrRpoqLvb727Weo=",
      title: "Web Strategy",
      description:
        "We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
      tagLine: "In this phase, we:",
      point: [
        "Identify your target audiences",
        "Analyze user pain-points & define your UVPs",
        "Define key performance indicators (KPIs)",
        "Create a roadmap to growing your brand online",
      ],
    },
    {
      img: "https://www.shutterstock.com/image-vector/information-architecture-abstract-concept-vector-260nw-2227231561.jpg",
      title: "Planning & Information Architecture",
      description:
        "We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, we ensure seamless user journeys to key conversion points.",
      tagLine: "Here’s how our team does it:",
      point: [
        "We develop a base-level user flow & sitemap",
        "We utilize wireframing to create a seamless conversion funnel",
        "We add on-brand, consistent messaging to your structure",
      ],
    },
    {
      img: "https://newborn.media/wp-content/uploads/2021/12/Creative-design.png",
      title: "Creative Design",
      description:
        "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in NYC.",
      tagLine:
        "With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:",
      point: [
        "Thoughtfully place design features to guide to the user journey",
        "Utilize interactive videos & animations",
        "Create custom, branded illustrations",
      ],
    },
    {
      img: "https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045697/33_img_responsive_design/33_img_responsive_design-jpg?_i=AA",
      title: "Responsive Development",
      description:
        "A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
      tagLine: "To ensure your website reaches and satisfies every user, we:",
      point: [
        "Gather touchpoint & user-channel insights",
        "Transform your wireframes into a flexible UI",
        "Test across devices before approval & launch",
      ],
    },
    {
      img: "https://kinsta.com/wp-content/uploads/2017/05/how-to-optimize-images-for-web-and-performance.jpg",
      title: "Quality Assurance (QA)",
      description:
        "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
      tagLine: "Our design specialists make this happen by:",
      point: [
        "Following a strict protocol for every website launch",
        "Offering post-launch maintenance & optimization",
        "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
      ],
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/059/417/155/small/start-online-business-website-analytics-building-internet-e-commerce-marketing-optimization-dashboard-chart-diagram-smart-online-strategy-businessman-working-with-computer-launch-website-rocket-vector.jpg",
      title: "Launch & Optimization",
      description:
        "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
      tagLine: "Our design specialists make this happen by:",
      point: [
        "Following a strict protocol for every website launch",
        "Offering post-launch maintenance & optimization",
        "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
      ],
    },
  ];

  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl px-3 md:px-16 md:text-4xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mt-10 lg:px-5 lg:text-5xl lg:mb-10 lg:text-center">
        Our Approach to Getting Things Done
      </h1>
      <p className="px-3 text-sm font-semibold md:px-16 md:text-lg lg:text-center lg:px-32">
        Discover the behind-the-scenes journey of our custom web design process.
        We craft tailored websites for brands of all sizes, delivering impactful
        and measurable outcomes.
      </p>
      <div
        className="w-full overflow-x-scroll grid grid-flow-col"
      >
        {processCardItems?.map((item, index) => (
          <ProcessCard
            key={index}
            img={item?.img}
            title={item?.title}
            description={item?.description}
            tagLine={item?.tagLine}
            points={item?.point}
          />
        ))}
      </div>
    </div>
  );
};

export default WebProcess;

const ProcessCard = ({ img, title, description, tagLine, points }) => {
  return (
    <div className="w-[90vw] mx-5 mt-8 md:px-20 lg:w-[50vw]">
      <img src={img} className="rounded-lg" alt={title} />
      <p className="px-5 py-3 bg-gradient-to-r from-amber-400 to-rose-500 font-bold text-2xl bg-clip-text text-transparent ">
        {title}
      </p>
      <p className="px-5 font-semibold text-sm">{description}</p>
      <p className="px-5 py-2 text-blue-700 underline font-semibold">
        {tagLine}
      </p>
      <div className="">
        {points.map((item, index) => (
          <span key={index} className="flex items-start px-2 gap-2 mt-3">
            <CircleArrowRight className="text-blue-800" />
            <span className="px-2">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};