import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
     <Card user="moni" age={21} img="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"/>
     <Card user="Ashutosh" age={30} img="https://images.unsplash.com/photo-1490138139357-fc819d02e344?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </>
  );
};

export default App;
