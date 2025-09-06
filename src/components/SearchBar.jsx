import { useState, useRef, useEffect } from "react";
import { ChevronsDown } from "lucide-react"; // Lucide icon

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
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleSearch() {
    onSearch(term, category);
  }

  function handleClear() {
    setTerm("");
    setCategory("");
    onSearch("", "");
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-2 p-4 items-center justify-center">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="e.g. Deep Learning, Quantum Computing, Reinforcement Learning"
        className="flex-1 border p-2 rounded-lg w-full md:w-1/2 bg-white text-gray-900 outline-none"
      />

      {/* Custom Dropdown */}
      <div className="relative w-full md:w-1/4" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full border p-2 rounded-lg flex justify-between items-center bg-white text-gray-900"
        >
          {categories.find((c) => c.value === category)?.label || "All Fields"}
          <ChevronsDown className="ml-2 h-4 w-4 cursor-pointer" />
        </button>
        {open && (
          <ul className="absolute z-10 mt-1 w-full bg-white border rounded-lg max-h-120 overflow-auto shadow-lg">
            {categories.map((c) => (
              <li
                key={c.value || "all"}
                onClick={() => {
                  setCategory(c.value);
                  setOpen(false);
                }}
                className="p-2 cursor-pointer hover:bg-blue-100"
              >
                {c.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 cursor-pointer"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
