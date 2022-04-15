import React, { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import "./category.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  console.log(category);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="categor-container">
      {products &&
        products.map((el) => <ProductCard key={el.id} product={el} />)}
    </div>
  );
};

export default Category;
