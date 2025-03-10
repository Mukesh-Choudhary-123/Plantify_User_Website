import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import vector1 from "../../../assets/image/Vector.png";
import vector2 from "../../../assets/image/Vector2.png";
import fertilizerIcon from "../../../assets/image/fertilizerIcon.png";
import lightIcon from "../../../assets/image/lightIcon.png";
import waterIcon from "../../../assets/image/waterIcon.png";
import downArrow from "../../../assets/image/downArrow.png";
import upArrow from "../../../assets/image/upArrow.png";
import globeIcon from "../../../assets/image/globe.png";
import tempIcon from "../../../assets/image/thermometer.png";
import humidityIcon from "../../../assets/image/humidity.png";
import tagIcon from "../../../assets/image/tagIcon.png";

function ProductDetail() {
  const location = useLocation();
  const { id } = useParams();
  const { color = "#fff" } = location.state || {};

  const [show, setShow] = useState(false);

  const product = {
    id: 3729819873984234,
    title: "Aloe Vera",
    prices: 200,
    subtitle: "Air Purifier", // You might update this if needed
    overview: {
      water: 250, // Recommended water in ml per week (for example)
      light: 34, // Light exposure level (arbitrary unit or percentage)
      fertilizer: 250, // Fertilizer dosage (in grams, etc.)
    },
    category: "Indoor",
    plantBio:
      "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    image:
      "https://res.cloudinary.com/dyws4bybf/image/upload/c_thumb,w_200,g_face/v1740810277/sfqzlryj35d3qirkrmd9.png",
    // Additional Fields:
    scientificName: "Aloe barbadensis miller",
    commonName: "Aloe Vera",
    origin: "North Africa",
    careInstructions: {
      watering:
        "Water every 3 weeks, allowing the soil to dry out completely between waterings.",
      sunlight: "Bright, indirect sunlight is ideal.",
      fertilizer:
        "Feed with a balanced fertilizer diluted to half strength during the growing season.",
      soil: "Well-draining cactus or succulent mix.",
    },
    growthRate: "Moderate",
    dimensions: {
      height: "12-24 inches",
      spread: "12-24 inches",
    },
    maintenance:
      "Low maintenance. Prune dead leaves and repot every 2-3 years.",
    idealTemperature: "28°C - 35°C",
    humidity: "Low to moderate humidity",
    toxicity: "Non-toxic to pets",
    rating: 4.5,
    reviews: 120,
  };
  const careInstructionsArray = Object.entries(product.careInstructions);

  // Store the active (expanded) section key
  const [activeSection, setActiveSection] = useState(null);

  // Toggle the active section.
  const handleToggle = (key) => {
    if (activeSection === key) {
      setActiveSection(null);
    } else {
      setActiveSection(key);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id ]);

  return (
    <>
      <div className="flex flex-row ">
        {/* LEFT */}
        <div className="mx-10" style={{ width: "30%", height: "60%" }}>
          <div
            className=" my-5 flex flex-col justify-center  rounded-xl "
            style={{ backgroundColor: color, width: "100%", height: "100%" }}
          >
            {/* Image container */}
            <div
              className="max-h-80    flex justify-center overflow-hidden relative rounded-xl"
              style={{ backgroundColor: color }}
            >
              <img
                src={vector1}
                className="absolute h-60 w-100 mt-10 "
                alt="Vector Background"
              />
              <img
                src={vector2}
                className="absolute h-40 w-130 "
                alt="Vector Background"
              />
              <img src={product.image} className="h-72 relative z-20 flex " />
            </div>
            {/* Text container */}
            <div className="flex flex-col py-3 px-5 text-center gap-4 justify-center ">
              <div className="flex flex-row gap-2" style={{alignSelf:"center"}}>
              <span className="font-semibold  text-[#002140]">
                {product.subtitle}
                </span>
                <img src={tagIcon} height={20} width={20}/>
              </div>
              <span className="text-4xl font-bold  text-[#002140] tracking-wider font-[Philosopher]">
                {product.title}
              </span>
              <span className="text-1xl font-medium mb-5">
                <span className="text-1xl font-bold text-gray-500">Price </span>
                ₹{product.prices}/- Rs.
              </span>
            </div>
          </div>
          <button
            className="bg-[#0D986A]"
            style={{ width: "100%", padding: 10, borderRadius: 20 }}
          >
            {" "}
            <span className="text-white font-bold">Add to Cart</span>{" "}
          </button>
        </div>

        {/* RIGHT */}
        <div className="mx-10 my-5">
          {/* Overview Section */}
          <div>
            <h4 className="text-1xl font-bold  text-[#002140] tracking-wide">
              Overwive
            </h4>
            <div className="flex flex-row gap-10 mt-3">
              {/* first */}
              <div className="flex gap-3">
                <img
                  src={waterIcon}
                  width={20}
                  style={{ height: 30, marginTop: 8 }}
                />
                <div className="flex flex-col">
                  <span className="text-gray-500 font-extrabold">WATER</span>
                  <span className="text-[#0D986A] font-extrabold">
                    {product.overview.water}ml
                  </span>
                </div>
              </div>
              {/* secong */}
              <div className="flex gap-3">
                <img
                  src={lightIcon}
                  width={45}
                  style={{ height: 35, marginTop: 5 }}
                />
                <div className="flex flex-col">
                  <span className="text-gray-500 font-extrabold">LIGHT</span>
                  <span className="text-[#0D986A] font-extrabold">
                    {product.overview.light}%
                  </span>
                </div>
              </div>
              {/* third */}
              <div className="flex gap-3">
                <img
                  src={fertilizerIcon}
                  width={35}
                  style={{ height: 30, marginTop: 9 }}
                />
                <div className="flex flex-col">
                  <span className="text-gray-500 font-extrabold">
                    FERTILIZER
                  </span>
                  <span className="text-[#0D986A] font-extrabold">
                    {product.overview.fertilizer}gm
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Plant Bio Section */}
          <div className="mt-5">
            <h4 className="text-1xl font-bold  text-[#002140] tracking-wide">
              Plant Bio
            </h4>
            <p className="mt-3 font-medium w-[70%]">{product.plantBio}</p>
          </div>

          {/* Care Instruction */}
          <div className="mt-5">
            <h4 className="text-1xl font-bold text-[#002140] tracking-wide">
              Care Instruction
            </h4>

            <div>
              {careInstructionsArray.map(([key, value]) => (
                <div key={key}>
                  <div
                    onClick={() => handleToggle(key)}
                    className="flex mt-3.5 flex-row hover:cursor-pointer"
                  >
                    {activeSection === key ? (
                      <img
                        src={upArrow}
                        width={20}
                        style={{ marginRight: 10, height: 20, marginTop: 2 }}
                        alt="Collapse"
                      />
                    ) : (
                      <img
                        src={downArrow}
                        width={25}
                        style={{ marginRight: 5 }}
                        alt="Expand"
                      />
                    )}
                    <p className="font-semibold">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                  </div>
                  {activeSection === key && (
                    <p className="ml-7 font-medium w-[70%] mt-1">{value}</p>
                  )}
                  <hr className="w-[70%] mt-2 border-gray-400 " />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="flex gap-3">
              <div className="flex bg-gray-100 gap-4 w-fit p-5 rounded-xl">
                <img
                  src={globeIcon}
                  width={20}
                  style={{ height: 20, alignSelf: "center" }}
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-600">Orgin</span>
                  <span className="font-bold">{product.origin}</span>
                </div>
              </div>

              <div className="flex bg-gray-100 gap-4 w-fit p-5 rounded-xl">
                <img
                  src={tempIcon}
                  width={20}
                  style={{ height: 20, alignSelf: "center" }}
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-600">Tempeature</span>
                  <span className="font-bold">{product.idealTemperature}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <div className="flex bg-gray-100 gap-4 w-fit p-5 rounded-xl">
                <img
                  src={humidityIcon}
                  width={20}
                  style={{ height: 20, alignSelf: "center" }}
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-600">Humidity</span>
                  <span className="font-bold">{product.humidity}</span>
                </div>
              </div>

              <div className="flex bg-gray-100 gap-4 w-fit p-5 rounded-xl">
                <img
                  src={tagIcon}
                  width={20}
                  style={{ height: 20, alignSelf: "center" }}
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-600">Toxcity</span>
                  <span className="font-bold">{product.toxicity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ProductDetail;
