import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, SearchIcon } from "lucide-react";
import Logo from "../assets/image/favicon.png";

function Navbar({ hide = true }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md backdrop-saturate-150 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Plantify" className="h-8 w-10" />
            <span className="text-xl font-bold text-[#002140] tracking-wider font-[Philosopher]">
              Plantify
            </span>
          </Link>

          {/* Search Bar & Icons */}

          <div className="flex items-center space-x-4">
            {hide && (
              <div className="hidden sm:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search Plant"
                  className="block w-full pl-10 pr-3 py-1.5 border border-gray-400 rounded-md focus:outline-none  focus:border-[#0D986A]"
                />
              </div>
            )}
            <Link to="/cart" className="text-gray-700 hover:text-[#0D986A]">
              <ShoppingCart size={24} />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-[#0D986A]">
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
