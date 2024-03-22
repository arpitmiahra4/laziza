import React from "react";
import { FaStar } from "react-icons/fa";

const CategoryCards = () => {
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
    {
      title: "Momos",
      price: "$12.00",
      reviews: 300,
      imageUrl:
        "https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg",
    },
    {
      title: "Biryani",
      price: "$12.00",
      reviews: 300,
      imageUrl:
        "https://static.toiimg.com/thumb/53098310.cms?imgsize=579584&width=800&height=800",
    },
    {
      title: "Indian",
      price: "$12.00",
      reviews: 300,
      imageUrl:
        "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/pass/GettyImages-1223580360.jpg",
    },
    {
      title: "Pani-puri",
      price: "$12.00",
      reviews: 300,
      imageUrl:
        "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",
    },
  ];
  return (
    <div className="flex flex-wrap gap-y-40 gap-x-1 justify-center items-center">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="border rounded-[1rem] border-gray-500 w-[22%] h-[340px] bg-white m-auto "
        >
          <div
            className="border-4 border-[#f71000] w-[80%] m-auto rounded-full card_img1 mt-[-42%] animate-bounce"
            style={{ backgroundImage: `url(${card.imageUrl})`, animationDuration:'3s'  }}
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
          <p className="text-black text-[14px] px-3 font-medium mt-2 text-left">
            The Document Object Model, or DOM is a representation
          </p>
          <button className="bg-[#f71000] px-16 py-2 mt-3 rounded-3xl text-white font-semibold text-[14px]">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
