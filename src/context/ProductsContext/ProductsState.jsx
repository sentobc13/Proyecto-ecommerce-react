import React, { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer'
import axios from 'axios'

const initialState = {
  products: [],
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    const action = {
      type: "GET_PRODUCTS",
      payload: res.data
    }
    dispatch(action)
  }
  

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}>
        {children}

    </ProductsContext.Provider>
  )
}
