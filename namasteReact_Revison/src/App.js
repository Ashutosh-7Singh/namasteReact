import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Form from "./Form";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Form /> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
