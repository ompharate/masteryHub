import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { Button } from "@/components/ui/button";
const coursePage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-[#2d2f31] p-12 rounded-sm">
        <div className="flex justify-between">
          <img
            height={300}
            width={300}
            src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png"
          />
          <div className="flex flex-col gap-2">
            <Button className="bg-[#c377f6]  font-bold hover:bg-[#a435f0]">Add to cart</Button>
            <Button variant="outline" className="font-bold">
              Buy
            </Button>
          </div>
        </div>

        <div className="mt-5 text-white">
          <h1 className="text-3xl font-bold">
            Master the Coding Interview: Big Tech (FAANG) Interviews
          </h1>
          <p className="p-2">
            Ace the Google, Amazon, Meta, Microsoft, Netflix coding interviews.
            Step by step guide for their toughest questions!
          </p>
          <div className="flex items-center p-2">
            <MdOutlineStarRate color="#fa9e00" />
            <MdOutlineStarRate color="#fa9e00" />
            <MdOutlineStarRate color="#fa9e00" />
            <MdOutlineStarRate color="#fa9e00" />
            <MdOutlineStarRate />
            <p className="p-2">51,254 students</p>
          </div>
          <div className="p-2">Created by ompharate</div>
          <div className="flex gap-10 p-2">
            <p className="flex items-center gap-2">
              <FaCircleInfo /> Last updated 1/2024
            </p>
            <p className="flex items-center gap-2">
              <GrLanguage /> English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coursePage;
