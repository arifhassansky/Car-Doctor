"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-8 w-10/12 mx-auto mt-10 mb-28">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative w-[460px] h-[473px]">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="Mechanic"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="absolute -bottom-20 right-4 w-[327px] h-[332px] bg-white rounded-[10px] shadow-lg">
          <Image
            src="/assets/images/about_us/parts.jpg"
            alt="Car Parts"
            layout="fill"
            objectFit="cover"
            className="p-2"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-red-500 font-semibold">About Us</h3>
        <h2 className="text-5xl font-bold text-gray-900 leading-14">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-gray-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <p className="text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="mt-14">
          <Link
            href={"/"}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
