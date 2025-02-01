import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

// AppLayout is the main layout of the application
// It includes the Header component and the Body component.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* {if path = /} */}
      <Outlet />
      {/* {if path = /about } */}
    </div>
  );
};

// Config-driven UI explained:
// For example, in Bengaluru, Swiggy shows restaurants and food options available in that place.
// The data is fetched from the backend, and the UI is updated accordingly.
// Config-driven UI means our UI is driven by data.

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// A component is just a JavaScript function that returns some JSX.
// Props (short for properties) are passed to components just like arguments are passed to JavaScript functions.
// For example, when a function in React takes arguments (passed as props), they are usually passed as an object.
// This makes React components reusable and dynamic.

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application using RouterProvider to manage routing
root.render(<RouterProvider router={appRouter} />);

// When using map to render a list of components, always use the `key` prop to provide a unique identifier for each item.
// For example: items.map((item) => <div key={item.id}>{item.name}</div>)
// The key helps React efficiently update and render items in the DOM.
