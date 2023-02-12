import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/cart_context";
import { AuthContextProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <AppProvider>
    <AuthContextProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
      </AuthContextProvider>
    </AppProvider>
  
);
