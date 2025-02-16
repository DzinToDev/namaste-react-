import React from "react"; // it is come from our node module
import ReactDOM from "react-dom/client"; 

const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste react"),
    React.createElement("h2", {}, "we have our own react in local"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "and it is come from our node module"),
    React.createElement("h2", {}, "Parcel is doing lot of things for us behind the scenes"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
