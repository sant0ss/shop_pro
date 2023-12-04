import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart } from "react-icons/ai"

import { CustomPrevArrow, CustomNextArrow } from "../componets/CustomDots"; 

function convertPriceToCurrency(price: number, currency: string) {

  switch (currency) {
    case "BRL":
      return `R$ ${price.toFixed(2)}`;
    case "USD":
      return `$ ${(price * 0.2).toFixed(2)}`; 
    case "EUR":
      return `€ ${(price * 0.18).toFixed(2)}`; 
    default:
      return `R$ ${price.toFixed(2)}`;
  }
}

interface ProductsProps {
  selectedCurrency: string;
}

export default function Products({ selectedCurrency }: ProductsProps) {

  const numrows = 12;

  const productElements = [];

  for (let i = 0; i < numrows; i++) {
    const originalPrice = 99.99;

    const convertedPrice = convertPriceToCurrency(originalPrice, selectedCurrency);

    productElements.push(
      <div className="mb-10" key={i}>
        <div className="w-56 h-56 rounded-xl m-auto mt-10 bg-slate-500"></div>
        <div className="flex m-auto justify-between w-56">
          <div>
            <h3 className="pt-2 pl-1">Produto</h3>
            <p className="pt-1 pl-1 text-red-400">{convertedPrice}</p> 
          </div>
          <AiOutlineHeart  className="mt-2 mr-1 text-xl hover:text-red-500 cursor-pointer"/>
        </div>
        
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ]
  };

  return (
    <div className="pt-20 px-40 bg-white text-zinc-800">
      <div className="px-10">
        <h2 className="text-2xl font-semibold py-2 border-blue-400 border-b-4">
          Novos Produtos
        </h2>
        <Slider {...settings}>{productElements}</Slider>
      </div>
    </div>
  );
}




