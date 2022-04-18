import React from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { useSelector } from "react-redux";
import { categorySelector } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categorySelector);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
