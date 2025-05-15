import {
  Earth,
  Feather,
  LayoutTemplate,
  MonitorSmartphone,
  Tangent,
} from "lucide-react";
import React from "react";

const WebAbout = () => {
  const webCards = [
    {
      img: "../home/webdev.jpg",
      title: "Custom Website Design & Development",
      describe:
        "Custom Website Design & Development - We build digital storefronts that actually convert visitors into customers:",
      textColor: "text-[#5E6ECD]",
      points: [
        {
          icon: <MonitorSmartphone />,
          describe: ["Mobile-First Design:"," Perfectly responsive on all devices"],
          color:"bg-rose-500"
        },
        {
          icon: <Feather />,
          describe:
            ["Lightning Fast Speed:"," Optimized to load in under 2 seconds"],
             color:"bg-fuchsia-500"
        },
        {
          icon: <Earth />,
          describe: ["SEO-Ready Architecture:", " Built to rank from day one"],
        },
        {
          icon: <LayoutTemplate />,
          describe:
            ["Conversion-Focused Layouts:"," Strategic placement for maximum leads"],
        },
        {
          icon: <Tangent />,
          describe: ["Easy Content Management:"," Update your site effortlessly"],
        },
      ],
    },
    {
      img: "../home/Seo-images.png",
      title: "Search Engine Optimization",
      describe:
        "Search Engine Optimization (SEO) is a powerful tool for businesses aiming to enhance their online visibility and attract more customers. By optimizing your website for search engines, you improve its ranking on search engine results pages (SERPs), making it easier for potential customers to find you. SEO drives organic traffic, which is cost-effective and sustainable compared to paid advertising.",
      textColor: "text-[#AAFF00]",
    },
    {
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_52683-81353.jpg?t=st=1746443873~exp=1746447473~hmac=112e7c005fe68a50c16f5172547fcd51389b2e57c29ebe2ca61b78d5d0af9f16&w=996",
      title: "Website Redesign",
      describe:
        "Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation. ",
      textColor: "text-[#45C2B4]",
    },
    {
      img: "https://img.freepik.com/free-vector/linear-flat-ui-ux-landing-page_23-2149059701.jpg?t=st=1746443971~exp=1746447571~hmac=a80f664ac8baa1c9c5b4a95b1ccda88b7c9628d3bc9cfbfdd121f3e3e8013725&w=996",
      title: "UX/UI Web Design",
      describe:
        "Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional",
      textColor: "text-[#E1C5EB]",
    },
    {
      img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?t=st=1746444058~exp=1746447658~hmac=6bac5ae8bae1a6f2f5b3fd533f6f888285cf33f9a6c72badfebf9590e44e5c12&w=996",
      title: "eCommerce Design & Development",
      describe:
        "We specialize in design and development for leading content management systems (CMSs) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers.",
      textColor: "text-[#385A64]",
    },
  ];

  return (
    <div className="px-3 lg:flex lg:px-14 lg:mt-14 ">
      {/* info tag  */}
      <div className="lg:w-1/2">
        <p className="font-bold text-3xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mt-10 lg:px-5 lg:text-4xl lg:mb-7">
          Grow Your Business Online with Our Complete Digital Marketing Services
        </p>
        <p className="mt-2 lg:px-5">
          We handle everything your brand needs to succeed online—all in one
          place. Our expert team creates custom strategies to attract more
          customers, increase sales, and build your reputation. Here’s how we
          help
        </p>
      </div>

      <div className="lg:h-[90vh] overflow-y-scroll scroll-smooth hide-scrollbar lg:w-1/2">
        {webCards.map((item, index) => {
          return (
            <MiniCard
              textColor={item?.textColor}
              img={item?.img}
              title={item?.title}
              description={item?.describe}
              key={index}
              points={item?.points}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WebAbout;

const MiniCard = ({ img, title, description, textColor, points }) => {
  return (
    <div className="border-2 p-3 m-2 mt-10 rounded-xl">
      <div>
        <img
          className="rounded-lg lg:h-[30vh]"
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
        <p className="font-medium text-sm ">
          {description
            ? description
            : "Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brands visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
        {points?.map((tag, idx) => {
          return (
            <span className="flex items-start bg-rose-500 px-5 py-2 rounded-xl gap-2">
             {tag?.icon}
             <div>

             <p className="font-bold">{tag?.describe[0]}</p>
             <p>{tag?.describe[1]}</p>
             </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};
