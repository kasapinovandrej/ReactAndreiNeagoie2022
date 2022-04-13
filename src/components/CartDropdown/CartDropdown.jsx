import React from "react";
import Button from "../Button/Button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
