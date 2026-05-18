import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Form from "./Form";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Cart from "./component/Cart";
import Error from "./component/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      {/* <Form /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
