import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white min-h-screen" : "min-h-screen"
      }
    >
      <Router>
        <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </div>
  );
}
