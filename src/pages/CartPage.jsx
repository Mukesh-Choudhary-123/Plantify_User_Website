import React from "react";
import Cart from "../features/cart/components/Cart";
import Navbar from "../ui/Navbar";

function CartPage() {
  return (
    <>
      <Navbar hide={false} />
      <div className="my-5">
        <Cart />
      </div>
    </>
  );
}

export default CartPage;
