import React from "react";
import ReactDOM from "react-dom/client";
import { HorizontalNavBar } from "./containers/HorizontalNavBar";
import { VerticalNavBar } from "./containers/VerticalNavBar";
import { Dashboard } from "./pages/Dashboard";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HorizontalNavBar />
        <VerticalNavBar />
        <Routes>
          <Route path="/dashboard/:userId" element={<Dashboard />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
