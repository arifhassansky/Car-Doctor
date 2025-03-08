"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 pt-4 bg-white/90">
      <div className="flex items-center justify-between w-10/12 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Car Doctor Logo"
            width={70}
            height={70}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-red-500 ${
              pathname === "/about"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`hover:text-red-500 ${
              pathname === "/services"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className={`hover:text-red-500 ${
              pathname === "/blog"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`hover:text-red-500 ${
              pathname === "/contact"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Icons and Appointment Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className={`hover:text-red-500 ${
              pathname === "/login"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            Login
          </Link>
          <Link
            href="/signUp"
            className={`hover:text-red-500 ${
              pathname === "/signUp"
                ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                : "text-gray-900"
            }`}
          >
            SignUp
          </Link>
          <FaShoppingBag className="text-gray-700 cursor-pointer hover:text-red-500" />
          <FaSearch className="text-gray-700 cursor-pointer hover:text-red-500" />
          <Link
            href="/appointment"
            className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
          >
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
