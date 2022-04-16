import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2 onClick={() => navigate(`${title.toLowerCase()}`)}>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((el) => {
            return <ProductCard key={el.id} product={el} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
