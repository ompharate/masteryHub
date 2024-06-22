"use client"
import Card from "@/components/card/Card";
import { CarouselDemo } from "@/components/carousel/Carousel";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div>
      <div className=" max-w-[70%] mx-auto mt-5">
        <div className="w-[90%] mx-auto flex text-2xl font-bold">
          Welcome back, {session?.user?.name}
        </div>
        <div className="w-[90%] mx-auto pt-5">
          <CarouselDemo />
        </div>
        <div className="mt-12">
        <h1 className="font-bold text-3xl mb-2">Top courses in Software Engineering</h1>
         <Card/>
        </div>
      </div>
    </div>
  );
}
