import React, { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const { deleteItem, addItemToCart, removeItem } =
    useContext(CartDropdownContext);
  const deleteItemHandler = () => {
    deleteItem(id);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItem(cartItem);
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
