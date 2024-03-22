import React from "react";
import { FaStar } from "react-icons/fa";
const CardDesign = () => {
  const cardsData = [
    {
      title: "Veg Burger",
      price: "$10.00",
      reviews: 250,
      imageUrl:
        "https://mypureplants.com/wp-content/uploads/2022/01/Vegan-TVP-burger-big-mac-feat.jpg",
    },
    {
      title: "Cake",
      price: "$12.00",
      reviews: 300,
      imageUrl:
        "https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg?w=500&h=500&crop=1",
    },
    {
      title: "Veg Sandwich",
      price: "$10.00",
      reviews: 250,
      imageUrl:
        "https://thecococompany.com/cdn/shop/products/Chicken_club_sandwich_0a1f55fc-855e-48f3-af1a-c73d35bdcfb3_grande.jpg?v=1645627475",
    },
    {
      title: "Pizza",
      price: "$12.00",
      reviews: 300,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    },
  ];
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="border rounded-[1rem] border-gray-500 w-[20%] h-[300px] bg-white"
        >
          <div
            className="border-4 border-[#f71000] w-[90%] m-auto rounded-full card_img1 mt-[-42%]"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          ></div>
          <h1 className="mt-5 font-serif text-[20px] font-semibold">
            {card.title}
          </h1>
          <div className="flex justify-between mt-5 px-4 text-left">
            <div>
              <p className="text-gray-500 font-medium text-[14px]">Price</p>
              <p className="text-black font-semibold text-[16px] mt-1">
                {card.price}
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-medium text-[14px]">Reviews</p>
              <p className="flex text-black font-semibold text-[16px] mt-1 items-center gap-1">
                <FaStar color="red" />
                {card.reviews}
              </p>
            </div>
          </div>
          <button className="bg-[#f71000] px-16 py-2 mt-3 rounded-3xl text-white font-semibold text-[14px]">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardDesign;
