"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <div className="sticky top-0 bg-white/90 z-50 px-0 pt-2">
      <div className="navbar w-10/12 mx-auto">
        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={
                    pathname === "/login"
                      ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                      : "hover:text-red-500"
                  }
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signUp"
                  className={
                    pathname === "/signUp"
                      ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                      : "hover:text-red-500"
                  }
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Car Doctor Logo"
              width={78}
              height={75}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-lg">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === "/about"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={
                  pathname === "/services"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={
                  pathname === "/blog"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons & Authentication */}
        <div className="navbar-end flex items-center gap-4">
          <FaShoppingBag className="text-gray-700 cursor-pointer hover:text-red-500" />
          <FaSearch className="text-gray-700 cursor-pointer hover:text-red-500" />

          {status === "authenticated" ? (
            <>
              <Image
                width={40}
                height={40}
                src={session?.user?.image}
                alt="Profile"
                className="rounded-full"
              />
              <button
                onClick={() => signOut()}
                className="btn btn-sm btn-outline"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="hidden lg:block">
              <Link
                href="/login"
                className={
                  pathname === "/login"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white"
                    : "hover:text-red-500"
                }
              >
                Login
              </Link>
              <Link
                href="/signUp"
                className={
                  pathname === "/signUp"
                    ? "bg-red-500 text-white px-4 py-1 rounded-md hover:text-white ml-2"
                    : "hover:text-red-500 ml-2"
                }
              >
                Sign Up
              </Link>
            </div>
          )}

          <Link
            href="/appointment"
            className="btn btn-outline border-red-500 hover:bg-red-500 hover:text-white text-lg"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
