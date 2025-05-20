import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion } from "@radix-ui/react-accordion";
import { AppWindow, AtSign, CheckCheck, Flame, Megaphone } from "lucide-react";
import React from "react";

const Pricing = () => {
  const services = [
    {
      detailsTitle: "Website Design & Development",
      detailsItems: [
        "Custom website design tailored to your brand",
        "Responsive design for all devices",
        "SEO-friendly structure",
        "Fast loading speed",
        "Content management system integration",
      ],
    },
    {
      detailsTitle: "Digital Marketing",
      detailsItems: [
        "Social media strategy and management",
        "Google Ads and PPC campaigns",
        "Email marketing setup and automation",
        "Content creation and copywriting",
        "Monthly analytics and reporting",
      ],
    },
    {
      detailsTitle: "SEO Services",
      detailsItems: [
        "On-page and off-page SEO optimization",
        "Keyword research and targeting",
        "Technical SEO audits",
        "Local SEO for Google My Business",
        "Competitor analysis",
      ],
    },
    {
      detailsTitle: "Social Media Management",
      detailsItems: [
        "Profile setup and optimization",
        "Content calendar planning",
        "Post scheduling and publishing",
        "Community engagement and monitoring",
        "Performance tracking and insights",
      ],
    },
  ];
  return (
    <div className="px-4 py-5">
      <div>
        <p className="text-center font-bold text-4xl bg-gradient-to-r from-blue-500 to-indigo-900 bg-clip-text text-transparent py-5 lg:text-5xl">
          Our Packages
        </p>
      </div>

      <div className="md:px-10 md:py-5 lg:px-32">
        <div className="flex items-center gap-2 text-center md:py-3">
          <span className="bg-blue-600 px-3 py-3 rounded-full text-white lg:px-6 lg:py-6">
            <Megaphone className="lg:h-10 lg:w-10" />
          </span>
          <p className="text-xl font-medium md:text-2xl lg:text-4xl">
            Ads packages
          </p>
        </div>
        <p className="text-gray-700 mb-4 lg:text-xl">
          Our Ads packages are designed to maximize your reach and ROI. Get
          expert management of Google Ads, social media campaigns, and targeted
          strategies to drive more leads and grow your business efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-28 border-b pb-24">
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-red-500 to-orange-500"}

        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className2={"bg-gradient-to-r from-rose-400 to-red-500"}
        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-pink-500 to-rose-500"}

        />
      </div>

      {/* section secend  */}
      <div className="md:px-10 md:py-5 lg:px-32">
        <div className="flex items-center gap-2 text-center md:py-3">
          <span className="bg-rose-600 px-3 py-3 rounded-full text-white lg:px-6 lg:py-6">
            <Flame className="lg:h-10 lg:w-10" />
          </span>
          <p className="text-xl font-medium md:text-2xl lg:text-4xl">
           Search Engine Optimization
          </p>
        </div>
        <p className="text-gray-700 mb-4 lg:text-xl">
          Our SEO packages are crafted to boost your website’s visibility and ranking on search engines. Benefit from comprehensive keyword research, on-page and off-page optimization, technical audits, and local SEO strategies to attract more organic traffic and grow your business online.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-28 border-b pb-24">
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-amber-500 to-yellow-400"}

        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className2={"bg-gradient-to-r from-amber-300 to-yellow-500"}
        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-amber-500 to-pink-500"}

        />
      </div>

      {/* third sections  */}
      <div className="md:px-10 md:py-5 lg:px-32">
        <div className="flex items-center gap-2 text-center md:py-3">
          <span className="bg-emerald-600 px-3 py-3 rounded-full text-white lg:px-6 lg:py-6">
            <AtSign className="lg:h-10 lg:w-10" />
          </span>
          <p className="text-xl font-medium md:text-2xl lg:text-4xl">
           Social Media Management
          </p>
        </div>
        <p className="text-gray-700 mb-4 lg:text-xl">
          Our Social Media Management packages help you build a strong online presence. We handle everything from profile setup and content planning to daily engagement and performance tracking, ensuring your brand stays active, relevant, and connected with your audience across all major platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-28 border-b pb-24">
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-indigo-400 to-cyan-400"}

        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className2={"bg-gradient-to-r from-cyan-500 to-blue-500"}
        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-indigo-500 to-blue-500"}

        />
      </div>


      <div className="md:px-10 md:py-5 lg:px-32">
        <div className="flex items-center gap-2 text-center md:py-3">
          <span className="bg-fuchsia-600 px-3 py-3 rounded-full text-white lg:px-6 lg:py-6">
            <AppWindow className="lg:h-10 lg:w-10" />
          </span>
          <p className="text-xl font-medium md:text-2xl lg:text-4xl">
            Website Design
          </p>
        </div>
        <p className="text-gray-700 mb-4 lg:text-xl">
          Our Website Design packages deliver custom, responsive websites that reflect your brand and engage your audience. Enjoy fast loading speeds, SEO-friendly structures, and seamless content management—ensuring your site looks great and performs flawlessly on every device.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-28 border-b pb-24">
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-fuchsia-600 to-purple-600"}

        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className2={"bg-gradient-to-r from-fuchsia-500 to-pink-500"}
        />
        <PricingCard
          packageName="Business Package"
          price="299/mo"
          duration="Billed Monthly"
          services={services}
          className="mt-6"
          className2={"bg-gradient-to-r from-violet-500 to-purple-500"}


        />
      </div>
    </div>
  );
};

export default Pricing;



const PricingCard = ({
  packageName,
  price,
  duration,
  services,
  buttonText = "Subscribe Now",
  className,
  className2
}) => {
  return (
    <div className={cn("border rounded-3xl overflow-hidden shadow-lg",className)}>
      <div className={cn("text-center py-8",className2)}>
        <p className="font-bold text-2xl text-white">
          {packageName ? packageName : "Economy Packages"}
        </p>
        <p className="font-bold text-2xl text-white my-3">
          ${price ? price : "150/mo"}
        </p>
        <p className="font-medium text-lg text-white">
          {duration ? duration : "Billed Monthly"}
        </p>
      </div>

      <div className="px-5">
        {services.map((item, index) => {
          return (
            <Accordion type="single" collapsible className="w-full ">
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger
                  display={true}
                  className="border-b font-semibold lg:text-xl"
                >
                  {item?.detailsTitle}
                </AccordionTrigger>
                {item?.detailsItems?.map((detailsItem, index) => (
                  <AccordionContent
                    key={index}
                    className="lg:text-lg font-bold flex items-start gap-2"
                  >
                    <CheckCheck className="text-sky-500" /> {detailsItem}
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
      <div className="my-5 text-center">
        <button className="px-5 py-2 bg-green-500 rounded-xl font-bold md:text-2xl md:px-10  text-white ">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
