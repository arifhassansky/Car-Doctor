"use client";

import Image from "next/image";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="w-10/12 mx-auto flex flex-wrap justify-between gap-12">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/logo.svg"
              alt="Car Doctor"
              width={80}
              height={65}
            />
          </div>
          <p className="mt-3 text-sm text-gray-200">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaGoogle
              className="text-gray-200 hover:text-red-500 cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="text-gray-200 hover:text-red-500 cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="text-gray-200 hover:text-red-500 cursor-pointer"
              size={20}
            />
            <FaLinkedin
              className="text-gray-200 hover:text-red-500 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <ul className="text-gray-200 space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Service</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="text-gray-200 space-y-2">
            <li className="hover:text-red-500 cursor-pointer">
              Why Car Doctor
            </li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="text-gray-200 space-y-2">
            <li className="hover:text-red-500 cursor-pointer">
              Support Center
            </li>
            <li className="hover:text-red-500 cursor-pointer">Feedback</li>
            <li className="hover:text-red-500 cursor-pointer">Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
