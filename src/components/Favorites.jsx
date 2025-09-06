import { useEffect, useState } from "react";
import PaperCard from "./PaperCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  function removeFavorite(id) {
    let saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    saved = saved.filter((p) => p.id !== id);
    localStorage.setItem("favorites", JSON.stringify(saved));
    setFavorites(saved);
  }

  if (!favorites.length) {
    return <p className="p-4">No favorites yet.</p>;
  }

  console.log(favorites);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
      {favorites.map((p) => (
        <PaperCard key={p.id} paper={p} onSave={() => removeFavorite(p.id)} />
      ))}
    </div>
  );
}
