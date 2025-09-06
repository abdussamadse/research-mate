import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function PaperCard({ paper }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFav(saved.some((p) => p.id === paper.id));
  }, [paper.id]);

  function toggleFavorite() {
    let saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFav) {
      saved = saved.filter((p) => p.id !== paper.id);
      localStorage.setItem("favorites", JSON.stringify(saved));
      setIsFav(false);
    } else {
      saved.push(paper);
      localStorage.setItem("favorites", JSON.stringify(saved));
      setIsFav(true);
    }
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <h2 className="font-bold text-lg mb-2 pr-2 text-gray-900">
          {paper.title}
        </h2>
        <button onClick={toggleFavorite}>
          <Star
            className={`w-6 h-6 ${
              isFav ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <p className="text-gray-600 text-sm mb-2 line-clamp-3">{paper.summary}</p>

      <p className="text-xs text-gray-500 mb-2">
        <span className="font-semibold">Authors:</span>{" "}
        {paper.authors.join(", ")}
      </p>

      <p className="text-xs text-gray-500 mb-2">
        <span className="font-semibold">Published:</span>{" "}
        {new Date(paper.published).toLocaleDateString()}
      </p>

      {paper.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {paper.categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {paper.pdfLink && (
        <a
          href={paper.pdfLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          📄 Read PDF
        </a>
      )}
    </div>
  );
}
