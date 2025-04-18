import React from "react";
import vector1 from "../../../assets/image/Vector.png";
import vector2 from "../../../assets/image/Vector2.png";
import tagIcon from "../../../assets/image/tagIcon.png";
import { Link } from "react-router-dom";


function ProductList({Products}) {
  const colors = [
    "#9CE5CB",
    "#FDC7BE",
    "#FFE899",
    "#56D1A7",
    "#B2E28D",
    "#DEEC8A",
    "#F5EDA8",
  ];
  
  return (
    <div className="m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
      {Products.map((product, index) => (
        <Link to={`/product/${product.id}`} key={product.id}  state={{ color: colors[index % colors.length] }} >
        <ProductCard
          product={product}
          color={colors[index % colors.length]}
        />
      </Link>
      
      ))}
    </div>
  );
}

function ProductCard({ product, color }) {
  return (
    <div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl px-0 py-3 overflow-hidden shadow-2xs relative"
      style={{ backgroundColor: color }}
    >
      {/* Background Vectors */}
      <img src={vector1} className="absolute h-60 w-full mt-10" alt="Vector Background" />
      <img src={vector2} className="absolute h-40 w-full" alt="Vector Background" />

      {/* Text Content */}
      <div className="flex flex-col relative z-40">
        <div className="flex flex-row gap-x-2 justify-center">
          <p className="text-center relative z-40 font-bold text-[#002140]">
            {product.subtitle}
          </p>
          <img src={tagIcon} alt="Tag Icon" className="h-4 w-4" />
        </div>
      </div>
      <p className="text-center text-2xl font-bold relative z-40 tracking-wider text-[#002140] font-[Philosopher]">
        {product.title}
      </p>
      <p className="text-center font-semibold relative z-40">₹ {product.price}</p>

      {/* Product Image */}
      <div className="relative z-20 flex justify-center">
        <img src={product.thumbnail} className="h-50" alt={product.title} />
      </div>
    </div>
  );
}


export default ProductList;
