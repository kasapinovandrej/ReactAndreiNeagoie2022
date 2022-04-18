import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem cartItem={item} key={item.id} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
