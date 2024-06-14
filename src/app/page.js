import Card from "@/components/card/Card";
import { CarouselDemo } from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <div>
      <div className=" max-w-[70%] mx-auto mt-5">
        <div className="w-[70%] mx-auto flex text-2xl font-bold">
          Welcome back, om
        </div>
        <div className="w-[90%] mx-auto pt-5">
          <CarouselDemo />
        </div>
        <div className="mt-12">
         <Card/>
        </div>
      </div>
    </div>
  );
}
