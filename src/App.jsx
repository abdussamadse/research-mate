import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import Documentation from "./pages/Documentation";

export default function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Router>
    </div>
  );
}
