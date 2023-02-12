import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducers/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("storeCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  //to remove an item from the cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //to store cart data locally
  // & show total item quantity of cart
  //total pricing with shipping fee
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch ({type: "CART_TOTAL_PRICE"})
    localStorage.setItem("storeCart", JSON.stringify(state.cart));
  }, [state.cart]);

  //increment and decrement of the product

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  //to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrement,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//global custom hook
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
