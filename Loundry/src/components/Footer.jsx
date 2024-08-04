import React from 'react';
import {Link} from "react-scroll"
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-white p-5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-semibold text-center">Contact Us</h5>
            <p className="mt-2">Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold">Follow Us</h5>
            <div className="flex justify-center md:justify-end mt-2 space-x-4">
              <a href="https://facebook.com" className="text-blue-400 hover:text-blue-500">Facebook</a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500">Twitter</a>
              <a href="https://instagram.com" className="text-pink-400 hover:text-pink-500">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
      <Link  to="home" spy={true} smooth={true} offset={-150} duration={500}  ><button ><FaArrowAltCircleUp className="right-0 w-16 h-16" /></button></Link> 
    </footer>
  );
};

export default Footer;
