import {
  AlignRight,
  AppWindow,
  AtSign,
  BookUser,
  Earth,
  Facebook,
  Flame,
  House,
  Instagram,
  Linkedin,
  Megaphone,
} from "lucide-react";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/services",
      text: "SERVICES",
    },
    {
      to: "/about",
      text: "ABOUT",
    },
    {
      to: "/pricing",
      text: "OUR PRICING",
    },
    {
      to: "/blog",
      text: "BLOG",
    },
    {
      to: "/contact",
      text: "CONTACT US",
    },
  ];

  const social = [
    <Instagram size={40} />,
    <Facebook size={40} />,
    <Linkedin size={40} />,
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: {
      scale: 1.05,
      color: "#fff", // Tailwind indigo-500
      transition: { type: "spring", stiffness: 300 },
    },
  };




  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600  bg-opacity-25 border-b-2 h-[10vh] flex items-center justify-between px-2 md:px-8 lg:px-10 sticky top-0 z-30">
      <Link to="/">
        <img
          className="w-[4rem]"
          src="https://softmoreit.co.in/img/logo.png"
          alt="logo"
        />
      </Link>

      <div className="flex items-center gap-8">
        <div>
          <button className="border px-4 py-2 text-lg font-bold text-white hover:bg-gray-500 duration-100 bg-white bg-opacity-20 hidden lg:flex">
            REQUEST A QUOTE
          </button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger >
            <div className="flex items-center gap-2 ">
              <AlignRight color="white" className="" size={30} />
              <span className="text-white text-xl">Menu</span>
            </div>
          </SheetTrigger>
          <SheetContent className="px-4 bg-white md:px-10">
            <div></div>
            <div className="lg:mt-20 mt-5">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <House size="40" className="text-[#b13bff] lg:w-20 lg:h-20" />
              </Link>
            </div>

            {/* <div className="mt-10">
              {navLinks.map((item, index) => {
                return (
                  <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                    <Link to={item?.to}>{item?.text}</Link>
                  </div>
                );
              })}
            </div> */}

            <div className="mt-10">
              <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
              </div>

              {/* dropdown  */}

              <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Accordion type="single" collapsible className="w-full ">
                  <AccordionItem value="item-1" className="py-0 border-none">
                    <AccordionTrigger className=" font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl p-0 m-0">
                      SERVICE
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col my-4">
                      <Link onClick={() => setIsOpen(false)} to="/services/ads" className="md:text-xl text-sm my-3 ml font-medium text-blue-500 flex items-center gap-2 mb-2">
                        <Megaphone />
                        Ads Service
                      </Link>

                      <Link onClick={() => setIsOpen(false)} to="/services/seo" className="md:text-xl my-3 ml font-medium text-rose-500 flex items-center gap-2 mb-2">
                        <Flame />
                        Search Engine Optimization
                      </Link>

                      <Link onClick={() => setIsOpen(false)} to="/services/social-media-management" className="md:text-xl my-3 ml font-medium text-pink-500 flex items-center gap-2 mb-2">
                        <AtSign />
                        Social Media Management
                      </Link>

                      <Link onClick={() => setIsOpen(false)} to="/services/web-design" className="md:text-xl my-3 ml font-medium text-cyan-500 flex items-center gap-2 mb-2">
                        <AppWindow />
                        Website Design
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
              </div>
              <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link to="/pricing" onClick={() => setIsOpen(false)}>OUR PRICING</Link>
              </div>
              <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
              </div>
              <div className="font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
              </div>
            </div>
            <div className="flex mt-8 items-center gap-10 opacity-50 md:mt-16">
              {social?.map((item, index) => {
                return <div className="" key={index}>{item}</div>;
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col gap-4 px-4 py-6"
            >
              {navLinks.map((text, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="cursor-pointer text-lg font-medium text-white"
                >
                  <Link to={text.to}>{text.text}</Link>
                </motion.span>
              ))}
            </motion.div> */
}
