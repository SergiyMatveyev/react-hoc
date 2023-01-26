import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import withFilteredProps from "./hoc/withFilteredProps";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const starWarsChars = [
  { name: "Dark Wayder", side: "dark" },
  { name: "Luck Skywalker", side: "light" },
  { name: "Palpatine", side: "dark" },
  { name: "Obivan Cenoby", side: "light" },
];
const FilteredList = withFilteredProps(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilteredList list={starWarsChars} side="light" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
