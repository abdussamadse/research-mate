import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PaperList from "../components/PaperList";
import useArxivAPI from "../hooks/useArxivAPI";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category] = useState("cs.AI");
  const { papers, loading } = useArxivAPI(query, category, 0, 5);

  function handleSave(paper) {
    let saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    // prevent duplicates
    if (!saved.some((p) => p.id === paper.id)) {
      saved.push(paper);
      localStorage.setItem("favorites", JSON.stringify(saved));
    }
    alert("Saved to Favorites!");
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SearchBar onSearch={(t) => setQuery(t)} />
      {loading ? (
        <p className="p-4">Loading...</p>
      ) : (
        <PaperList papers={papers} onSave={handleSave} />
      )}
    </div>
  );
}
