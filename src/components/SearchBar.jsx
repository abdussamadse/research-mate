import { useState } from "react";

// Category list
const categories = [
  { label: "All Fields", value: "" },
  { label: "Artificial Intelligence", value: "cs.AI" },
  { label: "Machine Learning", value: "cs.LG" },
  { label: "Computation & Language", value: "cs.CL" },
  { label: "Computer Vision", value: "cs.CV" },
  { label: "Robotics", value: "cs.RO" },
  { label: "Information Retrieval", value: "cs.IR" },
  { label: "Human-Computer Interaction", value: "cs.HC" },
  { label: "Software Engineering", value: "cs.SE" },
  { label: "Networks and Internet Architecture", value: "cs.NI" },
  { label: "Operating Systems", value: "cs.OS" },
  { label: "Computer Graphics", value: "cs.GR" },
  { label: "Mathematics – Statistics", value: "math.ST" },
  { label: "Mathematics – Optimization", value: "math.OC" },
  { label: "Physics – General", value: "physics.gen-ph" },
  { label: "Physics – Computational", value: "physics.comp-ph" },
  { label: "Physics – Optics", value: "physics.optics" },
  { label: "Quantitative Biology", value: "q-bio" },
  { label: "Quantitative Finance", value: "q-fin" },
  { label: "Electrical Engineering", value: "eess" },
  { label: "Economics", value: "econ" },
];

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState(""); // All Fields default

  function handleSearch() {
    onSearch(term, category);
  }

  function handleClear() {
    setTerm("");
    setCategory(""); // reset to All Fields
    onSearch("", "");
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 p-4 items-center justify-center">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="e.g. Deep Learning, Quantum Computing, Reinforcement Learning"
        className="flex-1 border p-2 rounded-lg w-full md:w-1/2 bg-white text-gray-900"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/4 bg-white text-gray-900"
      >
        {categories.map((c) => (
          <option key={c.value || "all"} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
