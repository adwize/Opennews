import React from "react";
import {SlidesSec} from "@/data"
import Link from "next/link";
const SlidesComp = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {SlidesSec.map((slide) => (
          <div
          key={slide.id}
          className="relative w-full flex items-end justify-start text-left bg-cover bg-center bg-gray-500"
          title={slide.title}
          style={{
            height: "450px",
            backgroundImage:
              `url(${slide.image});`,
          }}
        >
          <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            <Link
              href="/"
              className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
            >
              {slide.categories}
            </Link>
            <div className="text-white font-regular flex flex-col justify-start">
              <span className="text-3xl leading-0 font-semibold">{slide.date}</span>
            </div>
          </div>
          <main className="p-5 z-10">
            <Link
              href="/"
              title={slide.title}
              className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            >
              {slide.title}
            </Link>
          </main>
        </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default SlidesComp;
