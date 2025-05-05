import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/miniComp/button/Button";
import computerImg from "../../assets/computer.png";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] flex items-center flex-col lg:flex-row lg:h-[80vh] bg-gradient-to-r from-fuchsia-600 to-indigo-600 overflow-hidden lg:px-10">
      
      {/* Text Section */}
      <motion.div
        className="h-full w-full text-white px-4 py-5 lg:py-20 lg:px-10"
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <p className="font-semibold lg:text-4xl">Premium Web Design Agency</p>
        <motion.p
          className="font-extrabold text-4xl mt-6 md:text-5xl md:mt-9 lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We Grow Brands Online
        </motion.p>
        <p className="text-sm lg:text-xl mt-2">
          Custom Websites, Branding & Digital Marketing
        </p>

        <motion.div
          className="mt-4 md:mt-10 lg:mt-14"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button />
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={computerImg} className="max-w-[400px] lg:max-w-[500px]" alt="Computer" />
      </motion.div>
    </div>
  );
};

export default Hero;
