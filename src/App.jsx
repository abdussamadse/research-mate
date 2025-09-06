import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import PaperDetails from "./pages/PaperDetails";
import { useState, useEffect } from "react";
import Documentation from "./pages/Documentation";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorite = (paper) => {
    let updated;
    if (favorites.some((f) => f.id === paper.id)) {
      updated = favorites.filter((f) => f.id !== paper.id);
    } else {
      updated = [...favorites, paper];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home favorites={favorites} onFavoriteToggle={toggleFavorite} />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              onFavoriteToggle={toggleFavorite}
            />
          }
        />
        <Route
          path="/paper/:paperId"
          element={
            <PaperDetails
              favorites={favorites}
              onFavoriteToggle={toggleFavorite}
            />
          }
        />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}
