import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search papers..."
        className="flex-1 border p-2 rounded-lg"
      />
      <button
        onClick={() => onSearch(term)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
