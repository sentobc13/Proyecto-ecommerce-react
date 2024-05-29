import React, { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer'
import axios from 'axios'

const cart = JSON.parse(localStorage.getItem("cart")) || []
const initialState = {
  products: [],
  cart: cart
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

const addCart = (product) => {
  dispatch({
    type: "ADD_CART",
    payload: product,
  });
}
  

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart
      }}>
        {children}

    </ProductsContext.Provider>
  )
}
