"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logoutUser } from "../actions/authentication";
import { useSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div className="p-[1rem] list-none flex items-center gap-2 relative justify-between w-full flex-wrap">
      <div className="flex gap-5 items-center justify-center">
        <li className="text-2xl font-bold">
          <Link href={"/"}> MasteryHub </Link>
        </li>
        <li className="hover:text-[#5624d0] p-2">
          <Popover>
            <PopoverTrigger>Categories</PopoverTrigger>
            <PopoverContent>
              <div className="list-none  p-2 cursor-pointer underline">
                <li className="shadow-sm p-1">Development </li>
                <li className="shadow-sm p-1">Business</li>
                <li className="shadow-sm p-1">IT & Software</li>
                <li className="shadow-sm p-1">Lifestyle</li>
                <li className="shadow-sm p-1">Photography</li>
                <li className="shadow-sm p-1">Music</li>
                <li className="shadow-sm p-1">Health & Fitness</li>
                <li className="shadow-sm p-1">Marketing</li>
                <li className="shadow-sm p-1">Personal</li>
                <li className="shadow-sm p-1">Photography</li>
                <li className="shadow-sm p-1">Music</li>
              </div>
            </PopoverContent>
          </Popover>
        </li>
      </div>
      <li className="flex-grow flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full py-2 pl-8 pr-4 border border-black rounded-full focus:outline-none"
          />

          <IoSearchOutline className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500" />
        </div>
      </li>
      <div className="flex gap-5 items-center justify-center cursor-pointer ">
        <li className="p-2 hover:text-[#5624d0]">
          {" "}
          <Link href={"/creator/dashboard"}> Teach on MasteryHub</Link>
        </li>
        <li className="p-2 hover:text-[#5624d0]">My learnings</li>
        <li className="p-2 hover:text-[#5624d0]">
          <FaCartShopping size={28} />
        </li>
        <li className="p-2">
          {session?.user ? (
            <Popover>
              <PopoverTrigger asChild>
                <img
                  src={session?.user?.pic}
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <h1 className="text-xl font-semibold">
                      {session?.user?.name}
                    </h1>
                    <h1 className="text-sm text-gray-500">
                      {session?.user?.email}
                    </h1>
                  </div>
                  <Button className="hover:text-[#5624d0]" variant="outline">
                    <Link href={"/profile"}>Profile</Link>
                  </Button>
                  <Button className="hover:text-[#5624d0]" variant="outline">
                    My Learning
                  </Button>
                  <Button className="hover:text-[#5624d0]" variant="outline">
                    My Courses
                  </Button>
                  <Button
                    onClick={async () => await handleLogout()}
                    className="hover:text-[#5624d0]"
                    variant="outline"
                  >
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </li>
      </div>
    </div>
  );
};

export default Header;
