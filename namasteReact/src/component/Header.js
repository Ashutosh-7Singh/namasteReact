import { LOGO_URL } from "../utils/constants";
import {  useState } from "react";
import useOnlineStaus from "../utils/useOnlineStatus";

import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  const onlineStatus=useOnlineStaus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online status:{onlineStatus ? "🟢":"🔴"}
          </li>
          <li>
            {" "}
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li> Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
