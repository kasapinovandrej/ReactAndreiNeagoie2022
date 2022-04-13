import React from "react";
import Button from "../Button/Button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverter">Add to card</Button>
    </div>
  );
};

export default ProductCard;
