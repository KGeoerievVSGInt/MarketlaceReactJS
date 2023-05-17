import HomePage from "./components/Pages/HomePage";
import ContentPage from "./components/Pages/ContentPage";
import { Routes, Route } from "react-router-dom";
import Protected from "./routes/Protected";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Protected />}>
        <Route path="marketplace" element={<ContentPage />} />
        <Route path="myorders" element={<ContentPage />} />
        <Route path="inventory" element={<ContentPage />} />
        <Route path="pending" element={<ContentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
