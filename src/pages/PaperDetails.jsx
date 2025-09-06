import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PaperDetailsSkeleton from "../components/PaperDetailsSkeleton";

export default function PaperDetails({ favorites, onFavoriteToggle }) {
  const { paperId } = useParams();
  const [paper, setPaper] = useState(null);

  // Fetch paper details from localStorage or API
  useEffect(() => {
    const favPaper = favorites.find((f) => f.id === paperId);
    if (favPaper) {
      setPaper(favPaper);
    } else {
      // Fetch from arXiv API
      fetch(`https://export.arxiv.org/api/query?id_list=${paperId}`)
        .then((res) => res.text())
        .then((xml) => {
          // Simple parser
          const parser = new DOMParser();
          const doc = parser.parseFromString(xml, "application/xml");
          const entry = doc.querySelector("entry");
          if (!entry) return;

          setPaper({
            id: entry.querySelector("id")?.textContent,
            title: entry.querySelector("title")?.textContent,
            summary: entry.querySelector("summary")?.textContent,
            authors: Array.from(entry.querySelectorAll("author > name")).map(
              (a) => a.textContent
            ),
            published: entry.querySelector("published")?.textContent,
            pdf: entry.querySelector("link[title='pdf']")?.getAttribute("href"),
          });
        });
    }
  }, [paperId, favorites]);

  if (!paper) return <PaperDetailsSkeleton />;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-bold mb-2">{paper.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        Authors: {paper.authors.join(", ")}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        Published: {new Date(paper.published).toLocaleDateString()}
      </p>
      <p className="mb-4">{paper.summary}</p>

      <div className="flex gap-2">
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            View PDF
          </a>
        )}

        <button
          onClick={() => onFavoriteToggle(paper)}
          className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500"
        >
          {favorites.some((f) => f.id === paper.id)
            ? "★ Remove Favorite"
            : "☆ Add Favorite"}
        </button>
      </div>
    </div>
  );
}
