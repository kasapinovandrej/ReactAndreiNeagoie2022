import React, { useContext } from "react";
import Button from "../Button/Button";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartDropdownContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverter" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
