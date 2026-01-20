import React from "react";
import "./cart.css"

const Cart = ({ cartOpen }) => {
  if (!cartOpen) return null;
  return (
    <>
      <div id="cart_menu">No itens here</div>
    </>
  );
}

export default Cart;
