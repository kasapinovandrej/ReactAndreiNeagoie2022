import React, { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
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
