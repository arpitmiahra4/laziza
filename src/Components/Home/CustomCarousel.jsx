import { Carousel } from "flowbite-react";
import React from "react";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";

const CustomCarousel = ({ activeIndex }) => {
  console.log("Received activeIndex:", activeIndex);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        leftControl={<BsArrow90DegLeft />}
        rightControl={<BsArrow90DegRight />}
        activeIndex={activeIndex}
      >
        <img
          src="https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg"
          alt="..."
          aria-current="true"
        />
        <img
          src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
          alt="..."
          aria-current="false"

        />
        <img
          src="https://img.taste.com.au/_L7m5vxs/taste/2016/11/vegetable-biryani-102620-1.jpeg"
          alt="..."
          aria-current="false"

        />
        <img
          src="https://www.canvasfactory.com/blog/wp-content/uploads/sites/1/boys-birthday-cakes-blue-monster-min.jpg"
          alt="..."
          aria-current="false"

        />
        <img
          src="https://instafitness.in/recipe/keto-momos-recipe/keto-momos-recipe-2/"
          alt="..."
          aria-current="false"

        />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
