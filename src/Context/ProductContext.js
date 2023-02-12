import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/productReducer";

const AppContext = createContext();

const API = "http://localhost:3000/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // API Call for feature product

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;

      dispatch({
        type: "SET_API_DATA",
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: "API_ERROR",
      });
    }
  };

  //API call for single product page

  const getSingleProduct = async (url) => {
    dispatch({
      type: "SET_SINGLE_LOADING",
    });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;

      dispatch({
        type: "SET_SINGLE_PRODUCT",
        payload: singleProduct[0],
      });
    } catch (error) {
      dispatch({
        type: "SET_SINGLE_ERROR",
      });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//Custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
