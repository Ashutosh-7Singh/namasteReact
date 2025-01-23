import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // let btnName = "Login";
  console.log("header Renderd");

  // if no dependency array=> useEffect is called on every render
  // if there is one empty dependency array =>useEffect is called on initial render(just ince)
  //if depencendey array is [ anything ] =>called every time anything i updated  

  useEffect(() => {
    console.log("UseEffect called");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
