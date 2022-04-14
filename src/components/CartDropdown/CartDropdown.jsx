import React, { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>
      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
