import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import Documentation from "./pages/Documentation";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <Router>
        <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Router>
    </div>
  );
}
