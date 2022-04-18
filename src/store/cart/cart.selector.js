import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectShowCart = createSelector(
  [selectCartReducer],
  (cart) => cart.showCart
);

export const cartCounter = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, el) => acc + el.quantity, 0)
);

export const total = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0)
);
