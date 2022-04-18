import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styled";
import { cartCounter, selectShowCart } from "../../store/cart/cart.selector";
import { setShowCart } from "../../store/cart/cart.actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const counter = useSelector(cartCounter);
  const showCart = useSelector(selectShowCart);

  const toggleCartHandler = () => {
    dispatch(setShowCart(!showCart));
  };

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon />
      <ItemCount>{counter}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
