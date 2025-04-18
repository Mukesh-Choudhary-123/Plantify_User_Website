import React, { useState } from "react";
import { FiFilter, FiChevronDown, FiCheck, FiSearch } from "react-icons/fi";

function SideBar() {
  const options = [
    { label: "Top Pick", id: "topPick" },
    { label: "Outdoor", id: "outdoor" },
    { label: "Indoor", id: "indoor" },
    { label: "Seeds", id: "seed" },
    { label: "Plants", id: "plants" },
    { label: "Flowers", id: "flowers" },
    { label: "Herbs", id: "herbs" },
    { label: "Fruits", id: "fruits" },
    { label: "Vegetables", id: "vegetables" },
    { label: "Fertilizers", id: "fertilizer" },
  ];

  const [selectedValue, setSelectedValue] = useState("best-selling");

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="hidden md:block bg-white h-full p-4 md:p-8 lg:p-10 w-full md:w-72 lg:w-80">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FiFilter className="w-6 h-6 text-emerald-600" />
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">Filters</h3>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h4 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Plant Categories
        </h4>
        <ul className="space-y-2">
          {options.map((option, index) => (
            <li key={index}>
              <label
                htmlFor={option.id}
                className="flex items-center group cursor-pointer hover:bg-emerald-50 rounded-lg p-2 transition-colors"
              >
                <div className="relative flex items-center">
                  <input type="checkbox" id={option.id} className="peer hidden" />
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-md peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-colors flex items-center justify-center">
                    <FiCheck className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="ml-2 text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">
                  {option.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-gray-100 my-4" />

      {/* Sort By */}
      <div className="mb-6">
        <h4 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Sort By
        </h4>
        <ul className="space-y-2">
          {[
            { value: "best-selling", label: "Best Selling", id: "best-selling" },
            { value: "new-arrivals", label: "New Arrivals", id: "new-arrivals" },
            { value: "air-purifying", label: "Air Purifying", id: "air-purifying" },
            { value: "price-low-high", label: "Price: Low to High", id: "price-low-high" },
            { value: "price-high-low", label: "Price: High to Low", id: "price-high-low" },
          ].map((option) => (
            <li key={option.value}>
              <label
                htmlFor={option.id}
                className="flex items-center group cursor-pointer hover:bg-emerald-50 rounded-lg p-2 transition-colors"
              >
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    id={option.id}
                    name="sort-by"
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={() => handleSelection(option.value)}
                    className="peer hidden"
                  />
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="ml-2 text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">
                  {option.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
