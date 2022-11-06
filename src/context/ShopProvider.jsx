import React, { useState, useReducer, useContext, createContext } from "react";

import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  TOGGLE_CART,
} from "./reducers";

const ShopContext = createContext({
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
  toggleCart: () => {},
  cartOpen: null,
});

const ShopProvider = (props) => {
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, {
    cart: [],
    cartOpen: false,
  });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };

  return (
    <ShopContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        toggleCart: toggleCart,
        cartOpen: cartState.cartOpen,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

export const useShopContext = () => {
  return useContext(ShopContext);
};
