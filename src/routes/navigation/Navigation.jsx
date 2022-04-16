import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartDropdownContext } from "../../contexts/cartToggle.context";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showCart } = useContext(CartDropdownContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {showCart && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
