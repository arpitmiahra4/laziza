import React from "react";
import burger from "../Assets/burger.png";
const LandingPage = () => {
  return (
    <div className="flex justify-center text-left">
      <div className=" w-[50%] pt-8 px-10">
        <h2 className="font-bold text-xl text-red-500">
          NOW TAKING ONLINE ORDERS
        </h2>
        <h1 className="font-bold text-[5rem] font-serif text-[#f71000] mt-8">
          Laziza Foods
        </h1>
        <p class="mt-10 font-semibold text-[16px] w-[60%] leading-tight">
          Feel free to adjust the content based on your specific achievements,
          skills, and projects. Including visuals, such as screenshots or
          thumbnails from your portfolio such as screenshots or thumbnails from
          your.
        </p>
        <div className="mt-14 flex gap-10 font-semibold">
          <button className="bg-[#f71000] font-serif  text-white py-3 px-10 custom-border-radius shadow-[5px_5px_40px_theme('colors.red.600')] animate-pulse hover:animate-none">
            Add To Cart
          </button>
          <button className=" bg-[black] font-serif text-white py-3 px-10 custom-border2-radius shadow-[5px_5px_40px_theme('colors.black')] animate-pulse hover:animate-none">
            Book a Table
          </button>
        </div>
        <div className="mt-24 flex gap-10 items-center">
          <div>
            <h1 className="font-bold text-[18px] mb-1">Lunch</h1>
            <p className="text-gray-400 text-[13px]">1:00 - 3:00 PM</p>
          </div>
          <div>
            <h1 className="font-bold text-[18px] mb-1">Dinner</h1>
            <p className="text-gray-400 text-[13px]">6:30 - 12:00 PM</p>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <img src={burger} alt="burger" className="w-full" />
      </div>
    </div>
  );
};

export default LandingPage;
