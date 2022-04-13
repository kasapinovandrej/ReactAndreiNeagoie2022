import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  showCart: false,
  setShowCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  console.log("mile", showCart);

  return (
    <CartDropdownContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartDropdownContext.Provider>
  );
};
