import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducers/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //setting grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  //setting list view
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  //loading all the products for grid and list
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  //product sorting function
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  //to sort the products
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sortingValue]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
