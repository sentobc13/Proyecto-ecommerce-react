import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import Product from './Product';

const Products = () => {
  const { getProducts } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
    
  }, []);

  return (
    <>
    <Product />
    </>
  );
};

export default Products