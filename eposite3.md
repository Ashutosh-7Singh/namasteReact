import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//  React.createElement=>Object=>HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");
console.log(heading);

// React function Component or React Component

const Heading = React.createElement("h1", { id: "heading" }, "Namaste React ");
console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX- (transpiles before it reaches the js Engine)=>it is tranispiled by webpack(PARCEL,VITE, etc) and webpack takes  helps  of Babel
// How the jsx works ->JSX->React.createElement =>reactElement-JS Oject=>HTMLElement(render)
// Who is converting the jsx code in react =>Babel is converting

const jsxHeading = <h1 id="heading"> Namaste React using JSX</h1>;

// react Component
// class component -old
// functional component - new

// ********* React Fcuntional Component *******************
//  A function returining a JSX component is called  Functional component

const HeadingComponent = () => {
  return <h1>Namaste React Fcuntional Component </h1>;
};
const title = () => {
  <HeadingComponent />;
};

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondComponent />);

// For rendering React Componenet we have to  put it in the angular bracket < componenet />
// and these angular bracket helps Bable to know which is funcitonal component

// What is component composition
// calling or composing two component in one another is called component composition

// example of
const FirstComponent = () => {
  <h1>Hey</h1>;
};

const SecondComponent = () => {
  <FirstComponent />;
};

//
const data = api.getData();

const HeadingComponent2=()=>(
    <div id="container">
        {data}
        <h1 className="heading">Namaste React function componenet</h1>
    </div>
)

//  what if any attacker send some mallacious data in this data and  what we call this type of attack ->  we call it cross site scripting  and attacker read data ,steal cookies 

// but JSX is take care of these mallious attack and it escap it and sanstize the data so JSX prevent this type of attack  auto for free 
// so we can freely execute the javascript code inside 