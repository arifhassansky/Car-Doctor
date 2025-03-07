"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const slides = [
  {
    id: 1,
    image: "/assets/images/banner/5.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form.",
  },
  {
    id: 2,
    image: "/assets/images/banner/6.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form.",
  },
];

const HeroCarousel = () => {
  return (
    <div className="relative w-10/12 mx-auto mt-12 h-[500px] overflow-hidden rounded-xl">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full"
                width={1140}
                height={600}
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center pl-12 text-white">
                <h2 className="text-4xl font-bold max-w-lg">{slide.title}</h2>
                <p className="mt-3 max-w-md">{slide.description}</p>
                <div className="mt-5 flex gap-4">
                  <button className="bg-red-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-red-600">
                    Discover More
                  </button>
                  <button className=" px-6 py-2 border-2 hover:border-red-500 rounded-lg text-white font-semibold hover:bg-red-600">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-12 right-24  flex gap-2">
        <button className="swiper-button-next bg-white p-6 rounded-full shadow-md hover:bg-gray-200">
          <GoArrowRight className="text-black" />
        </button>
        <button className="swiper-button-prev bg-red-500 p-6 rounded-full shadow-md hover:bg-gray-200">
          <GoArrowLeft className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
