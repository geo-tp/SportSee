import React from "react";
import ReactDOM from "react-dom/client";
import { HorizontalNavBar } from "./containers/HorizontalNavBar";
import { VerticalNavBar } from "./containers/VerticalNavBar";
import { PageContent } from "./pages/PageContent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HorizontalNavBar />
    <VerticalNavBar />
    <PageContent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
