import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((prod) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Shop;
