import { AlignRight } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks=[
      {
        to:"/",
        text:"Home"
      },
      {
        to:"/services",
        text:"SERVICES"
      },
      {
        to:"/about",
        text:"ABOUT"
      },
      {
        to:"/pricing",
        text:"OUR PRICING"
      },
      {
        to:"/blog",
        text:"BLOG"
      },
      {
        to:"/contact",
        text:"CONTACT US"
      },
    ]

    const itemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
      hover: {
        scale: 1.05,
        color: "#fff", // Tailwind indigo-500
        transition: { type: "spring", stiffness: 300 }
      }
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

        <Sheet>
          <SheetTrigger>
            <div className="flex items-center gap-2 ">
              <AlignRight color="white" className="" size={30} />
              <span className="text-white text-xl">Menu</span>
            </div>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-r from-violet-600 to-indigo-600">
          <motion.div
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
          <Link to={text.to}>
          {text.text}
          </Link>
        </motion.span>
      ))}
    </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
