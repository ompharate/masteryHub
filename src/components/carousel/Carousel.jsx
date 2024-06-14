"use client";
import  React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
export function CarouselDemo() {
  const [images, setImages] = useState([
    "https://i.postimg.cc/q7xy5M3T/Screenshot-from-2024-06-14-12-31-20.png",
    "https://i.postimg.cc/cHJgk7WR/Screenshot-from-2024-06-14-12-31-25.png",
    "https://i.postimg.cc/j27jBZF7/Screenshot-from-2024-06-14-12-31-30.png",
  ]);
  const [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current == 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current == images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="flex justify-center transition ease-out duration-400 translate-x-28">
        {images.map((index) => (
          <img className="" src={images[current]} />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex  px-10 text-2xl">
        <button onClick={previousSlide}><IoIosArrowBack /></button>
        <button onClick={nextSlide}><MdNavigateNext /></button>
      </div>
    </div>
  );
}
