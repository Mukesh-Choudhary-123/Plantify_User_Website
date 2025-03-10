import React, { useEffect } from "react";
import ProductDetail from "../features/product/components/ProductDetail";
import Navbar from "../ui/Navbar";
import SimilarProductList from "../features/product/components/SimilarProductList";

function ProductDetailPage() {
  return (
    <>
      <Navbar hide={false} />
      <ProductDetail />
      <div>
        <h4 className="text-2xl mt-5 text-center font-bold  text-[#002140] tracking-wide">
          Similar Plant
        </h4>
        <div className="mb-9">
          <SimilarProductList />
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
