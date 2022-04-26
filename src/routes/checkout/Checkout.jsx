import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { total, selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import "./checkout.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalSum = useSelector(total);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return <CheckoutItem cartItem={item} key={item.id} />;
      })}
      <span className="total">Total: ${totalSum}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
