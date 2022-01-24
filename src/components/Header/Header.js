import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import useAuth from "../../hooks/useAuth";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";
import { useSelector } from "react-redux";
import "./header.scss";

const Header = () => {
  const { user, handleLogout } = useAuth();
  const hiddenObj = useSelector((state) => state.toggle);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {user.email ? (
          <div className="option" onClick={handleLogout}>
            Logout
          </div>
        ) : (
          <Link to="/signup">Signup</Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {hiddenObj.hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
