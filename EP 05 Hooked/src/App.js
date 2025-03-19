import React from "react"; // we import this React as default import
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'
// import { Route, Routes } from "react-router-dom";



const AppLayout = () => {
  // console.log(<Body />); // This is virtual dom this is object this object is basically react virtual dom like
  // React.createElement this will give you object

  return (
    <div className="app  px-10">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
