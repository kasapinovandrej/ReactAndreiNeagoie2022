import React, { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styled";

const CartIcon = () => {
  const { setShowCart, cartCounter } = useContext(CartDropdownContext);

  const toggleCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCounter}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
