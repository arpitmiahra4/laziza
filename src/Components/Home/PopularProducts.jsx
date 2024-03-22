import React, { useRef, useState } from "react";
import CardDesign from "./CardDesign";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PopularProducts = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const cardsData = [
    {
      title: "Burger",
      img: "https://mypureplants.com/wp-content/uploads/2022/01/Vegan-TVP-burger-big-mac-feat.jpg",
      img2: "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg",
    },
    {
      title: "Pizza",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      img2: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
    },
    {
      title: "Biryani",
      img: "https://pipingpotcurry.com/wp-content/uploads/2019/09/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg",
      img2: "https://img.taste.com.au/_L7m5vxs/taste/2016/11/vegetable-biryani-102620-1.jpeg",
    },
    {
      title: "Cake",
      img: "https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg?w=500&h=500&crop=1",
      img2: "https://www.canvasfactory.com/blog/wp-content/uploads/sites/1/boys-birthday-cakes-blue-monster-min.jpg",
    },
    {
      title: "Momos",
      img: "https://static.toiimg.com/photo/87672662.cms",
      img2: "https://instafitness.in/recipe/keto-momos-recipe/keto-momos-recipe-2/",
    },
  ];

  const handleCardClick = (index) => {
    console.log("Clicked card index:", index);
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <div className="px-24 py-10">
      <h2 className="font-semibold font-serif">ONLINE STORE</h2>
      <h2 className="font-semibold font-serif text-[#f71000] mt-4 text-4xl ">
        popular Products
      </h2>
      <p className="text-[24px] text-[#f71000] font-semibold">°°••....••°°</p>
      <div className="mt-[12%]">
        <CardDesign />
      </div>
      <div className="flex m-auto mt-[5%] w-[90%] gap-8 items-center">
        <div className="w-[16%]">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 py-1 px-5 mt-7 hover:cursor-pointer ${
                index === activeIndex
                  ? "bg-[#f71000] ml-4 font-serif text-white custom-border-radius shadow-[5px_5px_40px_theme('colors.red.600')]"
                  : ""
              }`}
              onClick={() => handleCardClick(index)} // Handle click event to change active index
            >
              <img
                src={card.img}
                alt="error"
                width={40}
                className="rounded-full h-10"
              />
              <h2 className="font-semibold text-[16px]">{card.title}</h2>
            </div>
          ))}
        </div>

        <div className="border-l-[1.6px] border-l-red-300 h-[310px] mt-4"></div>
        <div className="w-[80%]">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Slider {...settings} ref={sliderRef}>
              {cardsData.map((card, index) => (
                <img
                  key={index}
                  src={card.img2}
                  alt={card.title}
                  aria-current={activeIndex === index ? "true" : "false"}
                  className="h-96 br-carousel"
                />
              ))}
            </Slider>
          </div>
          {/* Pass activeIndex as prop */}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
