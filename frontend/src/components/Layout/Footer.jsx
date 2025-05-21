import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MonitorSmartphone
} from 'lucide-react';

const Footer= () => {
  return (
    <footer className="mt-14 text-white bg-blue-800 pt-16 pb-8 px-4 md:px-7 lg:px-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <MonitorSmartphone className="text-primary-500 mr-2" size={32} />
              <h3 className="text-xl font-bold">Softmore IT</h3>
            </div>
            <p className="text-white mb-4">
              Transforming businesses with cutting-edge web design and digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b text-white pb-2">Services</h4>
            <ul className="space-y-2">
              <FooterLink to="/services" label="Web Design" />
              <FooterLink to="/services" label="PPC Marketing" />
              <FooterLink to="/services" label="Digital Marketing" />
              <FooterLink to="/services" label="Website Development" />
              <FooterLink to="/services" label="E-commerce Solutions" />
              <FooterLink to="/services" label="Brand Identity" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b text-white pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/pricing" label="Our Pricing" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/privacy-policy" label="Privacy Policy" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b text-white pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-white">A1 B8, Block A1B, Janakpuri, New Delhi, Delhi, 110058</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 flex-shrink-0" size={18} /> <img src="../home/india-flag.jpg" className='w-5 h-5 mr-5 rounded-full'/>
                <a href="tel:+919266474766" className="text-white hover:text-primary-400 transition-colors">
                 +91 9266474766
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 flex-shrink-0" size={18} /> <img src="../home/us_flag.webp" className='w-5 h-5 mr-5 rounded-full' alt="" />
                <a href="tel:+1415-234-9076" className="text-white hover:text-primary-400 transition-colors">
                 +1 415-234-9076
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@softmoreit.com" className="text-white hover:text-primary-400 transition-colors">
                  info@softmoreit.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-white"
        >
          <p>&copy; {new Date().getFullYear()} Softmore IT Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-white hover:text-primary-400 transition-colors">
        {label}
      </Link>
    </li>
  );
};

const SocialLink = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:bg-primary-600 p-2 rounded-full transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../ui/accordion";
// import { AppWindow, AtSign, Facebook, Flame, Instagram, Linkedin, Megaphone } from "lucide-react";

// const Footer = () => {
//   return (
//     <>
//       <div
//         style={{ fontFamily: "'Inter', sans-serif" }}
//         className="flex flex-col md:flex-row lg:px-10 border-t-2 mt-14 bg-gradient-to-r"
//       >
//         <div className="md:hidden lg:flex lg:w-[20vw]">
//           {/* <img
//             src="../home/web-dev.jpg"
//             className=" rounded-xl w-[80vw] mx-auto h-[60vh] lg:mt-14"
//           /> */}
//         </div>

//         <div className="flex-col flex px-5 py-7 md:px-8 md:w-[30vw] lg:w-[40vw] lg:pl-[10rem]">
//           <p className="mb-2 text-xl underline text-zinc-800">NAVIGATION</p>

//           <Link
//             to="/"
//             className="text-4xl md:text-5xl text-zinc-800 font-[600] mt-3"
//           >
//             Home
//           </Link>
//           <div className="flex">
//             <Accordion type="single" collapsible className="w-full ">
//               <AccordionItem value="item-1" className="py-0 border-none">
//                 <AccordionTrigger
//                   className="mb-5  p-0 m-0 text-4xl md:text-5xl text-zinc-800 font-[600] mt-3"
//                   display={false}
//                 >
//                   Service
//                 </AccordionTrigger>
//                 <AccordionContent className="flex flex-col my-4">
//                   <Link
//                     to="/services/ads"
//                     className="md:text-xl text-sm my-3 ml font-medium text-blue-500 flex items-center gap-2 mb-2"
//                   >
//                     <Megaphone />
//                     Ads Service
//                   </Link>

//                   <Link
//                     to="/services/seo"
//                     className="md:text-xl my-3 ml font-medium text-rose-500 flex items-center gap-2 mb-2"
//                   >
//                     <Flame />
//                     Search Engine Optimization
//                   </Link>

//                   <Link
//                     to="/services/social-media-management"
//                     className="md:text-xl my-3 ml font-medium text-pink-500 flex items-center gap-2 mb-2"
//                   >
//                     <AtSign />
//                     Social Media Management
//                   </Link>

//                   <Link
//                     to="/services/web-design"
//                     className="md:text-xl my-3 ml font-medium text-cyan-500 flex items-center gap-2 mb-2"
//                   >
//                     <AppWindow />
//                     Website Design
//                   </Link>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//           <Link
//             to="/about"
//             className=" text-4xl md:text-5xl text-zinc-800 font-[600] mt-3"
//           >
//             About
//           </Link>
//           <Link
//             to="/pricing"
//             className="text-4xl md:text-5xl text-zinc-800 font-[600] mt-3"
//           >
//             Pricing
//           </Link>
//           <Link
//             to="/blog"
//             className="text-4xl md:text-5xl text-zinc-800 font-[600] mt-3"
//           >
//             Blog
//           </Link>
//           <Link
//             to="/contact"
//             className="text-4xl md:text-5xl text-zinc-800 font-[600] mt-3"
//           >
//             Content Us
//           </Link>
//         </div>

//         <div className="px-5 py-4 md:px-8 md:w-[55vw] lg:w-[40vw]">
//           <p className="mb-2 text-lg underline uppercase text-zinc-800">
//             acknowledgement
//           </p>
//           <p>
//             We respectfully acknowledge the Turrbal people, the Traditional
//             Owners and Custodians of the land on which Softmore IT Solutions
//             operates. We pay our deepest respects to Elders past and present,
//             and honor their enduring connection to land, waters, and community.
//           </p>
//           <div className="py-10 text-lg">
//             <p className="mb-2 text-lg underline uppercase text-zinc-800 lg:my-5">
//               info
//             </p>
//             <div className="flex items-start gap-2  md:text-xl">
//               <div className="font-bold">Address:</div>
//               <div>A1B/8, Janakpuri, New Delhi, India 110058</div>
//             </div>
//             <div className="flex items-center gap-2 md:text-xl">
//               <div className="font-bold">Email:</div>
//               <div>support@softmoreit.co.in</div>
//             </div>
//             <div className="flex items-center gap-2 md:text-xl">
//               <div className="font-bold">Phone No:</div>
//               <div>+91 9266474766</div>
//             </div>
//             <div className="flex items-center gap-2 md:text-xl">
//               <div className="font-bold">US Phone No:</div>
//               <div>+1 415-234-9076</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col my-5 justify-between px-10 font-bold text-lg mt-10 gap-5 md:flex-row">
//         <div>&copy; {new Date().getFullYear()} Softmore IT Solutions.</div>
//         <div>
//           <div>Privacy Policy</div>
//           <div>Terms of Service</div>
//         </div>
//         <div className="">
//           <div className="flex items-center gap-4"><Instagram /> Instagram</div>
//           <div className="flex items-center gap-4"><Facebook /> Facebook</div>
//           <div className="flex items-center gap-4"><Linkedin /> LinkedIn</div>
//         </div>
//         <div>Softmore IT Solutions</div>
//       </div>
//     </>
//   );
// };

// export default Footer;
