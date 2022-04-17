import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  cartCounter: 0,
  total: 0,
};

const CART_ACTION_TYPES = {
  SET_SHOW_CART: "SET_SHOW_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNTER: "SET_CART_COUNTER",
  SET_TOTAL: "SET_TOTAL",
};

const cartReducer = (state, action) => {
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
    case CART_ACTION_TYPES.SET_CART_COUNTER:
      return {
        ...state,
        cartCounter: action.payload,
      };
    case CART_ACTION_TYPES.SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw new Error(`Unhandled type ${action.type}`);
  }
};

export const CartDropdownContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCounter: 0,
  removeItem: () => {},
  deleteItem: () => {},
  total: 0,
});

export const CartDropdownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, showCart } = state;
  const addItemToCart = (productToAdd) => {
    dispatch(
      createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        addCartItem(cartItems, productToAdd)
      )
    );
  };

  const removeItem = (cartItemToRemove) => {
    dispatch(
      createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        removeCartItem(cartItems, cartItemToRemove)
      )
    );
  };

  const deleteItem = (productToDelete) => {
    dispatch(
      createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        deleteCartItem(cartItems, productToDelete)
      )
    );
  };

  const setShowCart = () => {
    dispatch(createAction(CART_ACTION_TYPES.SET_SHOW_CART, !state.showCart));
  };

  const cartCounter = cartItems.reduce((acc, el) => acc + el.quantity, 0);
  const total = cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0);

  return (
    <CartDropdownContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        addItemToCart,
        cartCounter,
        removeItem,
        deleteItem,
        total,
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};
