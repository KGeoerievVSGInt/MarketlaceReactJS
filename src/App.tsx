import HomePage from "./components/Elements/HomeElements/HomePage";
import ContentPage from "./pages/ContentPage";
import { Routes, Route } from "react-router-dom";
import Protected from "./routes/Protected";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Protected />}>
        <Route path="/marketplace" element={<ContentPage />} />
        <Route path="/myorders" element={<ContentPage />} />
        <Route path="/inventory" element={<ContentPage />} />
        <Route path="/pending" element={<ContentPage />} />
        <Route path="/lent" element={<ContentPage />} />
        <Route path="/borrowed" element={<ContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
