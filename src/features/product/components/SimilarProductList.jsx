import React, { useEffect } from "react";
import vector1 from "../../../assets/image/Vector.png";
import vector2 from "../../../assets/image/Vector2.png";
import tagIcon from "../../../assets/image/tagIcon.png";
import { Link } from "react-router-dom";


const products = [
  {
    id: 1,
    title: "Aloe Vera",
    prices: 200,
    subtitle: "Air Purifier",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810277/sfqzlryj35d3qirkrmd9.png",
  },
  {
    id: 2,
    title: "Peace Lily",
    prices: 300,
    subtitle: "Air Purifier",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810275/vf6t8uxpsieqvmlk6vau.png",
  },
  {
    id: 3,
    title: "Spider Plant",
    prices: 220,
    subtitle: "Air Purifier",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/zcwyruubsttbphlcfwhr.png",
  },
  {
    id: 4,
    title: "Jade Plant",
    prices: 270,
    subtitle: "Succulent",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810279/c1fuea1c20gw3p7z5jir.png",
  },
  {
    id: 5,
    title: "Aloe Vera",
    prices: 200,
    subtitle: "Air Purifier",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810277/sfqzlryj35d3qirkrmd9.png",
  },
  {
    id: 6,
    title: "Peace Lily",
    prices: 300,
    subtitle: "Air Purifier",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810275/vf6t8uxpsieqvmlk6vau.png",
  },
  {
    id: 7,
    title: "Spider Plant",
    prices: 220,
    subtitle: "Air Purifier",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/zcwyruubsttbphlcfwhr.png",
  },
  {
    id: 8,
    title: "Money Plant",
    prices: 180,
    subtitle: "Indoor Plant",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/y5ne7fz3zcucplxjjblu.png",
  },
  {
    id: 9,
    title: "Jade Plant",
    prices: 270,
    subtitle: "Succulent",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810279/c1fuea1c20gw3p7z5jir.png",
  },
  
];

function SimilarProductList
() {
  // Array of colors to assign different backgrounds
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
    <div className="p-4  flex gap-3 justify-center overflow-scroll">
      {products.map((product, index) => (
        <Link to={`/product/${product.id}`} key={product.id}  state={{ color: colors[index % colors.length] }}>
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
      className="w-60 rounded-xl px-3 py-3 overflow-hidden shadow-2xs relative"
      style={{ backgroundColor: color }}
    >
      {/* Background Vectors */}
      <img src={vector1} className="absolute h-60 w-100 mt-10 " alt="Vector Background" />
      <img src={vector2} className="absolute h-40 w-130 " alt="Vector Background" />

      {/* Text Content */}
      <div className="flex flex-col relative z-50 ">
        <div className="flex flex-row gap-x-2 justify-center">
        <p className="text-center relative z-50 font-bold text-[#002140]">{product.subtitle}</p>

          <img src={ tagIcon} height={17} width={20}/>
        </div>
      </div>
        <p className="text-center text-2xl font-bold relative z-50 tracking-wider text-[#002140] font-[Philosopher]">
          {product.title}
          </p>
        <p className="text-center font-semibold relative z-50">₹ {product.prices}</p>

      {/* Product Image */}
      <div className="relative z-20 flex justify-center">
        <img src={product.image} className="h-50" alt={product.title} />
      </div>
    </div>
  );
}

export default SimilarProductList
;
