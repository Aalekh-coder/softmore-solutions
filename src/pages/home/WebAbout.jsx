
import React from "react";

const WebAbout = () => {
  const webCards = [
    {
      img: "https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?t=st=1746444276~exp=1746447876~hmac=72603eaf4454231b8d3761c540a13f84ac2d862ef46772a1bd26050533e40525&w=996",
      title: "Custom Web Design",
      describe:
        "Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience",
        textColor: "text-[#5E6ECD]"
        
    },
    {
      img: "https://img.freepik.com/free-vector/devices-concept-illustration_114360-229.jpg?t=st=1746443630~exp=1746447230~hmac=47b8f9d32445c90b1df21f1c60ea5293792d57aff358f5abe8d6172e534b8894&w=740",
      title: "Responsive Web Design",
      describe:
        "We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site.",
        textColor:"text-[#AAFF00]",
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_52683-81353.jpg?t=st=1746443873~exp=1746447473~hmac=112e7c005fe68a50c16f5172547fcd51389b2e57c29ebe2ca61b78d5d0af9f16&w=996",
      title: "Website Redesign",
      describe:
        "Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation. ",
        textColor:"text-[#45C2B4]",
    },
    {
      img: "https://img.freepik.com/free-vector/linear-flat-ui-ux-landing-page_23-2149059701.jpg?t=st=1746443971~exp=1746447571~hmac=a80f664ac8baa1c9c5b4a95b1ccda88b7c9628d3bc9cfbfdd121f3e3e8013725&w=996",
      title: "UX/UI Web Design",
      describe:
        "Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional",
        textColor:"text-[#E1C5EB]",
    },
    {
      img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?t=st=1746444058~exp=1746447658~hmac=6bac5ae8bae1a6f2f5b3fd533f6f888285cf33f9a6c72badfebf9590e44e5c12&w=996",
      title: "eCommerce Design & Development",
      describe:
        "We specialize in design and development for leading content management systems (CMSs) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers.",
        textColor:"text-[#385A64]",
    },
  ];

  return (
    <div className="px-3 lg:flex lg:px-14 lg:mt-14 ">
      {/* info tag  */}
      <div>
        {/* <p
          className="my-4 font-semibold  lg:text-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Why Softmore IT Soultions?
        </p> */}
        <p className="font-bold text-3xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mt-10 lg:px-5 lg:text-4xl lg:mb-7">
          Unleash the Potential of Your Business with Our Web Design Expertise
        </p>
        <p className="mt-2 lg:px-5">
          As a comprehensive web design agency, we manage all your digital
          requirements in one place. Our personalized web design solutions
          involve in-depth research and planning, unique designs, and digital
          strategies crafted to expand your audience, boost traffic, and foster
          engagement.
        </p>
      </div>

      <div className="lg:h-[90vh] overflow-y-scroll scroll-smooth hide-scrollbar">{
        
        webCards.map((item,index)=>{
    
          return <MiniCard textColor={item?.textColor}  img={item?.img} title={item?.title} description={item?.describe} key={index}/>
        })
        
        }
      </div>
    </div>
  );
};

export default WebAbout;

const MiniCard = ({ img, title, description,textColor }) => {
  return (
    <div className="border-2 p-3 m-2 mt-10">
      <div>
        <img className="rounded-lg lg:h-[50vh]"
          src={
            img
              ? img
              : "https://img.freepik.com/free-vector/www-internet-globe-grid_78370-2008.jpg?t=st=1746442828~exp=1746446428~hmac=7c9fb0e71bb16d737c20a09a6e105943e72576b39552bb7f5ca8edbe0c93975f&w=740"
          }
        />
      </div>
      <div className="px-3 py-2">
        <p className={`text-2xl font-bold ${textColor}`}>
          {title ? title : "Custom Web Design"}
        </p>
        <p className="font-semibold text-sm ">
          {description
            ? description
            : "Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brands visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience."}
        </p>
      </div>
    </div>
  );
};

