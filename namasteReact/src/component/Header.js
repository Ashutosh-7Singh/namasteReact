import { LOGO_URL } from "../utils/constants";
import {  useContext, useState } from "react";
import useOnlineStaus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus=useOnlineStaus()

  const {loggedInUser}=useContext(UserContext);
  console.log("data",loggedInUser);
  
  // Subscribing to the store using a Selector

  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  

  return (
    
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online status:{onlineStatus ? "🟢":"🔴"}
          </li>
          <li  className="px-4">
            {" "}
            <Link to="/">Home </Link>
          </li>
          <li  className="px-4">
            {" "}
            <Link to="/about">About Us </Link>
          </li>
          <li  className="px-4">
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li  className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li  className="px-4 text-xl font-bold"> 
            <Link to="/cart">
            Cart-({cartItems.length} items)
            
            </Link>
            </li>
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
          <li  className="px-4 font-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
