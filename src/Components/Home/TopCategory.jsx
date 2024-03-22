import React from "react";
import CategoryCards from "./CategoryCards";

const TopCategory = () => {
  return (
    <div className="px-24 py-10 mt-10">
      <h2 className="font-semibold font-serif">TOP CATEGORIES</h2>
      <h2 className="font-semibold font-serif text-[#f71000] mt-4 text-4xl ">
        Explore Our Best Menu
      </h2>
      <p className="text-[24px] text-[#f71000] font-semibold">°°••....••°°</p>
      <div className="mt-[12%]">
        <CategoryCards />
        <button className="mt-14 bg-[#f71000] px-10 py-2 rounded-xl text-white font-semibold">
          See All
        </button>
      </div>
    </div>
  );
};

export default TopCategory;
