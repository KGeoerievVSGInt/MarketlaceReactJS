// import { useState } from "react";
import HomePage from "./components/Pages/HomePage";
import ContentPage from "./components/Pages/ContentPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const routes = ["/marketplace", "/inventory", "/pending", "/myorders"];
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {routes.map((route, index) => (
        <Route path={route} element={<ContentPage />} key={index} />
      ))}
    </Routes>
  );
};

export default App;
