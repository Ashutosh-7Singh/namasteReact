import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import About from "./component/About";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    paht: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// A component is  just a javascript function which return some JSX
// props a short form of properties and we pass it to the different diffrent component , just like  functional components  it just a normal javaScript function and similarly  the props are just a normal arguments
// so passing a argument to a fucntion means passing a props to a functoin
// When a function in React takes arguments and those arguments are passed as props, they are usually passed as an object.

// what is config driven UI
//  see when you are in bengaluru the swiggy show you the food or restaurant available in the that pleace only so the data show according to the place so our website is driven by data that is come form backend and the data came from backend it show the UI
// in short config driven UI means our ui is driven by data

// this key={index}  indicate that each of these items is unique so alsways make habbit to give key when you use map
