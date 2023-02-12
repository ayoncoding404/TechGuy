const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    //view part
    case "SET_GRIDVIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        gridView: false,
      };

    //sorting part
    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sortingValue: sort_value,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];

      if (state.sortingValue === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sortingValue === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }

      return {
        ...state,
        filterProducts: newSortData,
      };
    default:
      return state;
  }
};

export default filterReducer;

