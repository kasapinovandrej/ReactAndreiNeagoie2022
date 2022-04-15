import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
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
