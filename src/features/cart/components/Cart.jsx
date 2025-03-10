import React, { useState } from "react";
import vector1 from "../../../assets/image/Vector.png";
import vector2 from "../../../assets/image/Vector2.png";
import minusIcon from "../../../assets/image/minus.png";
import plusIcon from "../../../assets/image/plus.png";
import deleteIcon from "../../../assets/image/delete.png";

const colors = [
  "#9CE5CB",
  "#FDC7BE",
  "#FFE899",
  "#56D1A7",
  "#B2E28D",
  "#DEEC8A",
  "#F5EDA8",
];

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Aloe Vera",
      price: 200,
      quantity: 1,
      subtitle: "Air Purifier",
      image:
        "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810277/sfqzlryj35d3qirkrmd9.png",
    },
    {
      id: 2,
      title: "Peace Lily",
      price: 300,
      quantity: 1,
      subtitle: "Air Purifier",
      image:
        "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810275/vf6t8uxpsieqvmlk6vau.png",
    },
    {
      id: 3,
      title: "Spider Plant",
      price: 220,
      quantity: 1,
      subtitle: "Air Purifier",
      image:
        "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/zcwyruubsttbphlcfwhr.png",
    },
    {
      id: 4,
      title: "Money Plant",
      price: 180,
      quantity: 1,
      subtitle: "Indoor Plant",
      image:
        "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/y5ne7fz3zcucplxjjblu.png",
    },
    {
      id: 5,
      title: "Jade Plant",
      price: 270,
      quantity: 1,
      subtitle: "Succulent",
      image:
        "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810279/c1fuea1c20gw3p7z5jir.png",
    },
    // {
    //   id: 6,
    //   title: "Aloe Vera",
    //   price: 200,
    //   quantity: 1,
    //   subtitle: "Air Purifier",
    //   image:
    //     "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810277/sfqzlryj35d3qirkrmd9.png",
    // },
    // {
    //   id: 7,
    //   title: "Peace Lily",
    //   price: 300,
    //   quantity: 1,
    //   subtitle: "Air Purifier",
    //   image:
    //     "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810275/vf6t8uxpsieqvmlk6vau.png",
    // },
    // {
    //   id: 8,
    //   title: "Spider Plant",
    //   price: 220,
    //   quantity: 1,
    //   subtitle: "Air Purifier",
    //   image:
    //     "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/zcwyruubsttbphlcfwhr.png",
    // },
    // {
    //   id: 9,
    //   title: "Money Plant",
    //   price: 180,
    //   quantity: 1,
    //   subtitle: "Indoor Plant",
    //   image:
    //     "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810278/y5ne7fz3zcucplxjjblu.png",
    // },
    // {
    //   id: 10,
    //   title: "Jade Plant",
    //   price: 270,
    //   quantity: 1,
    //   subtitle: "Succulent",
    //   image:
    //     "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810279/c1fuea1c20gw3p7z5jir.png",
    // },
  ]);

  // Function to update quantity
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-3 mx-20">
      {cartItems.map((item, index) => (
        <div
          key={item.id}
          className="bg-[#9CE5CB] flex justify-between  h-24 px-10  relative overflow-hidden items-center rounded-2xl"
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <img
            src={vector1}
            className="absolute h-60 w-100 mt-10 -z-0"
            alt="Vector Background"
          />
          <img
            src={vector2}
            className="absolute h-40 w-130 -z-0"
            alt="Vector Background"
          />

          {/* LEFT */}
          <div className="flex flex-row items-center">
            <div>
              <img
                src={item.image}
                height={60}
                width={60}
                className="z-50 relative"
                alt={item.title}
              />
            </div>
            <div className="mt-3 z-50 flex flex-col ml-4">
              <span className="text-2xl font-bold text-[#002140] tracking-wider font-[Philosopher]">
                {item.title}
              </span>
              <span className="font-medium text-sm">{item.subtitle}</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-row gap-5 items-center">
            <div
              onClick={() => updateQuantity(item.id, "decrease")}
              className="bg-[#0D986A] h-10 w-10 rounded-xl flex justify-center items-center cursor-pointer"
            >
              <img
                src={minusIcon}
                width={30}
                alt="Minus Icon"
                className="mt-5"
              />
            </div>
            <span className="text-xl font-bold text-[#002140]">
              {item.quantity}
            </span>
            <div
              onClick={() => updateQuantity(item.id, "increase")}
              className="bg-[#0D986A] h-10 w-10 rounded-xl flex justify-center items-center cursor-pointer"
            >
              <img src={plusIcon} width={30} alt="Plus Icon" />
            </div>
            <div
              onClick={() => removeItem(item.id)}
              className="bg-[#ED4949] h-10 w-10 rounded-xl flex justify-center items-center cursor-pointer"
            >
              <img src={deleteIcon} width={30} alt="Delete Icon" />
            </div>
          </div>
        </div>
      ))}
      <button
        className="bg-[#0D986A] mt-4 hover:cursor-pointer"
        style={{ width: "100%", padding: 10, borderRadius: 20 }}
      >
        <span className="text-white text-center font-bold">Checkout</span>
      </button>
    </div>
  );
}

export default Cart;
