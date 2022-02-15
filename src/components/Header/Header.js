import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import useAuth from "../../hooks/useAuth";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";
import { useSelector } from "react-redux";
import {
  HeaderCOntainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./header-styles";

const Header = () => {
  const { user, handleLogout } = useAuth();
  const hiddenObj = useSelector((state) => state.toggle);

  return (
    <HeaderCOntainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {user.email ? (
          <OptionDiv onClick={handleLogout}> Logout</OptionDiv>
        ) : (
          <OptionLink to="/signup">Signup</OptionLink>
        )}
        <CartIcon></CartIcon>
      </OptionsContainer>
      {hiddenObj.hidden ? null : <CartDropdown />}
    </HeaderCOntainer>
  );
};

export default Header;
