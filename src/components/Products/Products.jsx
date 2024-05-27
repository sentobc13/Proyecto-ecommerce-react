import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const Products = () => {
  const { products, getProducts } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
 
  return (
    <div>Products</div>
  )
}

export default Products