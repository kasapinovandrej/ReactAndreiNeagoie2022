import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItem,
  deleteItem,
} from "../../store/cart/cart.actions";
import "./checkout-item.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity, id } = cartItem;
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  const deleteItemHandler = () => {
    return dispatch(deleteItem(cartItems, id));
  };
  const addItemHandler = () => {
    return dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    return dispatch(removeItem(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
