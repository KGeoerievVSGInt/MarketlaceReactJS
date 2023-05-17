import HomePage from "./components/Pages/HomePage";
import ContentPage from "./components/Pages/ContentPage";
import { Routes, Route } from "react-router-dom";
import ProtectedLogin from "./routes/ProtectedLogin";
import ProtectedAdmin from "./routes/ProtectedAdmin";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectedLogin />}>
        <Route path="/marketplace" element={<ContentPage />} />
        <Route path="/myorders" element={<ContentPage />} />
      </Route>
      <Route element={<ProtectedAdmin />}>
        <Route path="/inventory" element={<ContentPage />} />
        <Route path="/pending" element={<ContentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
