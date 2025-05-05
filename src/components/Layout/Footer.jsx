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
    <footer className=" text-white bg-gradient-to-r from-red-400 via-violet-600 to-indigo-600 pt-16 pb-8 px-4 md:px-7 lg:px-10">
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
                <span className="text-gray-400">A1 B8, Block A1B, Janakpuri, New Delhi, Delhi, 110058</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <a href="tel:+919911773747" className="text-white hover:text-primary-400 transition-colors">
                  +91 99117 73747
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