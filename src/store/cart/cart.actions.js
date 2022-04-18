import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

///////////HELEPER F/////////////////////////////

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) =>
  cartItems.filter((el) => el.id !== cartItemToDelete);

///////////////////////////////////////////////////////

export const setShowCart = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_SHOW_CART, bool);
};

export const addItemToCart = (cartItems, productToAdd) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    addCartItem(cartItems, productToAdd)
  );
};

export const removeItem = (cartItems, cartItemToRemove) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    removeCartItem(cartItems, cartItemToRemove)
  );
};

export const deleteItem = (cartItems, productToDelete) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    deleteCartItem(cartItems, productToDelete)
  );
};
