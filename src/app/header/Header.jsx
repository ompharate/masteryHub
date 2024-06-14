import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="p-[1rem] list-none flex items-center gap-2 relative justify-between w-full flex-wrap">
      <div className="flex gap-5 items-center justify-center">
        <li className="text-2xl font-bold">MasteryHub</li>
        <li>Categories</li>
      </div>
      <li className="flex-grow flex items-center">
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Search for anything"
            class="w-full py-2 pl-8 pr-4 border border-black rounded-full focus:outline-none"
          />

          <IoSearchOutline className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500" />
        </div>
      </li>
      <div className="flex gap-5 items-center justify-center">
        <li className="p-2">Teach on MasteryHub</li>
        <li className="p-2">My learnings</li>
        <li className="p-2">cart</li>
        <li className="p-2">Profile</li>
      </div>
    </div>
  );
};

export default Header;
