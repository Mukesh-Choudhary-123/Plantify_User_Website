import React from "react";
import Navbar from "../ui/Navbar";
import SideBar from "../features/sidebar/components/SideBar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../ui/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <div className="w-64 bg-amber-300">
          <SideBar />
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
        <Footer/>
    </>
  );
}

export default HomePage;
