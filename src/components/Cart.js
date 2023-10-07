import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="text-center m- p-4 ">
      <h2 className="font-bold">Cart</h2>
      <button
        onClick={handleClearCart}
        className="p-2 m-2 bg-black text-white rounded-lg"
      >
        Clear Cart
      </button>
      {cartItems}
    </div>
  );
}

export default Cart;
