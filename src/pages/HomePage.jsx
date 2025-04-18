import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import SideBar from "../features/sidebar/components/SideBar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../ui/Footer";
import { useGetProductsQuery } from "../features/product/api/productApi";

function HomePage() {
  const [page, setPage] = useState(1);
  const limit = 8;
  const { data, isLoading, error } = useGetProductsQuery({ page, limit });

  const { products = [], totalPages = 1 } = data ?? {};

  const SkeletonCard = () => (
    <div className="bg-gray-100 rounded-lg p-4 w-full sm:w-[250px] h-[290px] animate-pulse justify-center items-center">
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 items-center"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 "></div>
      <div className="bg-gray-200 h-40 rounded-md "></div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-64">
          <SideBar />
        </div>
        <div className="flex-1">
          {/* show loader */}
          {isLoading && (
            <div className="m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[...Array(8)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}

          {/* show products when ready */}
          {!isLoading && !error && <ProductList Products={products} />}

          {/* error message */}
          {error && (
            <div className="text-red-500 text-center py-4">
              Failed to load products.
            </div>
          )}

          {/* pagination: disable buttons while loading */}
          <nav className="flex justify-center space-x-2 my-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={isLoading || page === 1}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                disabled={isLoading}
                className={`px-3 py-1 rounded ${
                  p === page ? "bg-[#0D986A] text-white" : "bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={isLoading || page === totalPages}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
