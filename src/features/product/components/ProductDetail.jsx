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
import { useProductDetailsQuery } from "../api/productApi";
import SimilarProductList from "./SimilarProductList";

function ProductDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const bgColor = state?.color || "#fff";

  const { data: response = {}, isLoading, error } = useProductDetailsQuery(id);
  const product = response.product ?? response;
  const careInstructionsArray = Object.entries(product.careInstructions || []);

  const [activeSection, setActiveSection] = useState(null);

  console.log("product :-", product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {/* Loading & Error */}
      {isLoading && (
        <div className="py-20 text-center">Loading product details…</div>
      )}
      {error && (
        <div className="py-20 text-center text-red-500">
          Error loading product.
        </div>
      )}

      {/* Main Content */}
      {!isLoading && !error && (
        <>
          <div className="flex flex-col md:flex-row px-4 md:px-10 py-5 gap-5">
            {/* LEFT: Image & Add to Cart */}
            <div className="md:w-1/3 mb-5 md:mb-0">
              <div
                className="mx-auto md:mx-10 my-5 flex flex-col justify-center rounded-xl"
                style={{ backgroundColor: bgColor, width: "100%" }}
              >
                <div
                  className="relative flex justify-center overflow-hidden rounded-xl max-h-80"
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    src={vector1}
                    className="absolute h-60 w-full mt-10"
                    alt="Vector Background"
                  />
                  <img
                    src={vector2}
                    className="absolute h-40 w-full"
                    alt="Vector Background"
                  />
                  <img
                    src={product.thumbnail || product.image}
                    className="relative z-20 h-72 object-contain"
                    alt={product.title}
                  />
                </div>
                <div className="flex flex-col py-3 px-5 text-center gap-4 justify-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-[#002140]">
                      {product.subtitle}
                    </span>
                    <img src={tagIcon} height={20} width={20} alt="Tag" />
                  </div>
                  <span className="text-4xl font-bold text-[#002140] tracking-wider font-[Philosopher]">
                    {product.title}
                  </span>
                  <span className="text-lg font-medium">
                    <span className="font-bold text-gray-500">Price: </span>₹
                    {product.price || product.prices}/-
                  </span>
                </div>
              </div>
              <button className="bg-[#0D986A] w-full px-4 py-2 rounded-full mx-auto md:mx-10">
                <span className="text-white font-bold">Add to Cart</span>
              </button>
            </div>

            {/* RIGHT: Details */}
            <div className="md:w-2/3 mx-auto md:mx-10">
              {/* Overview */}
              <h4 className="text-xl font-bold text-[#002140] tracking-wide">
                Overview
              </h4>
              <div className="flex flex-col sm:flex-row gap-10 mt-3">
                {[
                  {
                    icon: waterIcon,
                    label: "WATER",
                    value: product.overview?.water,
                    unit: "ml",
                  },
                  {
                    icon: lightIcon,
                    label: "LIGHT",
                    value: product.overview?.light,
                    unit: "%",
                  },
                  {
                    icon: fertilizerIcon,
                    label: "FERTILIZER",
                    value: product.overview?.fertilizer,
                    unit: "gm",
                  },
                ].map(({ icon, label, value, unit }) => (
                  <div key={label} className="flex items-center gap-3">
                    <img src={icon} className="h-8" alt={`${label} Icon`} />
                    <div className="flex flex-col">
                      <span className="text-gray-500 font-extrabold">
                        {label}
                      </span>
                      <span className="text-[#0D986A] font-extrabold">
                        {value}
                        {unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Plant Bio */}
              <div className="mt-5">
                <h4 className="text-xl font-bold text-[#002140] tracking-wide">
                  Plant Bio
                </h4>
                <p className="mt-3 font-medium w-full md:w-3/4">
                  {product.plantBio || product.description}
                </p>
              </div>

              {/* Care Instructions */}
              <div className="mt-5">
                <h4 className="text-xl font-bold text-[#002140] tracking-wide">
                  Care Instructions
                </h4>
                <div>
                  {careInstructionsArray.map(([key, value]) => (
                    <div key={key} className="mb-3">
                      <div
                        onClick={() =>
                          setActiveSection(activeSection === key ? null : key)
                        }
                        className="flex items-center cursor-pointer hover:opacity-80"
                      >
                        <img
                          src={activeSection === key ? upArrow : downArrow}
                          className="h-5 mr-2"
                          alt={activeSection === key ? "Collapse" : "Expand"}
                        />
                        <p className="font-semibold">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                      </div>
                      {activeSection === key && (
                        <p className="ml-7 font-medium w-full md:w-3/4 mt-1">
                          {value}
                        </p>
                      )}
                      <hr className="w-full md:w-3/4 mt-2 border-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: globeIcon, label: "Origin", value: product.origin },
                  {
                    icon: tempIcon,
                    label: "Temperature",
                    value: product.idealTemperature,
                  },
                  {
                    icon: humidityIcon,
                    label: "Humidity",
                    value: product.humidity,
                  },
                  { icon: tagIcon, label: "Toxicity", value: product.toxicity },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center bg-gray-100 gap-4 px-5 py-3 rounded-xl"
                  >
                    <img src={icon} className="h-5" alt={`${label} Icon`} />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-600">{label}</span>
                      <span className="font-bold">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl mt-5 text-center font-bold  text-[#002140] tracking-wide">
              Similar Plant
            </h4>
            <div className="mb-9">
              <SimilarProductList category={product?.category} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetail;
