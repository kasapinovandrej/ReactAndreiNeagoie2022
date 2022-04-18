import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import {
  categorySelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/Spinner/Spinner";

const Category = () => {
  const categoriesMap = useSelector(categorySelector);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log("DSDSADSAD", isLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="categor-container">
          {products &&
            products.map((el) => <ProductCard key={el.id} product={el} />)}
        </div>
      )}
    </>
  );
};

export default Category;
