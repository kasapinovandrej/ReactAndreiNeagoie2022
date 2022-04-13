import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { setShowCart } = useContext(CartDropdownContext);
  const toggleCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;