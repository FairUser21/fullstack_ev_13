import React, { useContext, useEffect } from "react";
import { productContext } from "../Contexts/ProductContext";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return <div></div>;
};

export default ProductList;
