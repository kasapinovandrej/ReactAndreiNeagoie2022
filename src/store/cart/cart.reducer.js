import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_SHOW_CART:
      return {
        ...state,
        showCart: action.payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
