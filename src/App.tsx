// import { useState } from "react";
import HomePage from "./components/Pages/HomePage";
import ContentPage from "./components/Pages/ContentPage";
import { Routes, Route } from "react-router-dom";
import ProtectedLogin from "./routes/ProtectedLogin";
import ProtectedAdmin from "./routes/ProtectedAdmin";

const App = () => {
  fetch(`https://localhost:7245/Inventory`)
    .then((data) => data.json())
    .then((data) => console.log(data));
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/marketplace"
        element={
          <ProtectedLogin>
            <ContentPage />
          </ProtectedLogin>
        }
      />
      <Route
        path="/inventory"
        element={
          <ProtectedLogin>
            <ProtectedAdmin>
              <ContentPage />
            </ProtectedAdmin>
          </ProtectedLogin>
        }
      />
      <Route
        path="/pending"
        element={
          <ProtectedLogin>
            <ProtectedAdmin>
              <ContentPage />
            </ProtectedAdmin>
          </ProtectedLogin>
        }
      />
      <Route
        path="/myorders"
        element={
          <ProtectedLogin>
            <ContentPage />
          </ProtectedLogin>
        }
      />
    </Routes>
  );
};

export default App;
