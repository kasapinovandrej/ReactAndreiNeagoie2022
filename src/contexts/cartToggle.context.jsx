import { createContext, useState } from "react";

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
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItem = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItem = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
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
