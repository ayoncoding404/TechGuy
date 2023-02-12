const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let cartProduct;

    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  //setting the increment and decrement of cart
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decrAmount = curElem.amount - 1;
        if (decrAmount <= 1) {
          decrAmount = 1;
        }
        return {
          ...curElem,
          amount: decrAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incrAmount = curElem.amount + 1;
        if (incrAmount >= curElem.max) {
          incrAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incrAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  //showing total item at cart icon
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedTotalItem = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedTotalItem,
    };
  }

  //final pricing & subtotaling
  if (action.type === "CART_TOTAL_PRICE") {
    let updatedTotalPrice = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + amount * price;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_price: updatedTotalPrice,
    };
  }

  return state;
};

export default cartReducer;
