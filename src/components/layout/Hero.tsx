import React from "react";
import Trending from "../Ui/Trending";
export const Hero = () => {
  return (
    <div className="bg-black flex items-center md:justify-around   w-full h-[88vh] px-10 bg-bottom bg-cover bg-no-repeat">
      <div className="flex w-full">
        <h1 className="text-white  flex text-center md:text-left flex-col text-5xl font-bold">
          <span className="text-white text-7xl md:text-7xl -mt-2 font-extrabold">
            Meet and connect with people having same interests.
          </span>
        </h1>
      </div>
      {/* <Trending /> */}
    </div>
  );
};
