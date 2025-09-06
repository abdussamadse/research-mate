import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PaperList from "../components/PaperList";
import useArxivAPI from "../hooks/useArxivAPI";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(""); // empty = all fields
  const [page, setPage] = useState(0);
  const perPage = 10;

  const { papers, loading } = useArxivAPI(query, category, page, perPage);

  function handleSearch(term, cat) {
    setQuery(term);
    setCategory(cat);
    setPage(0); // reset page
  }

  function goToPage(num) {
    setPage(num);
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="p-4">Loading...</p>
      ) : (
        <>
          <PaperList papers={papers} />

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 p-6">
            <button
              onClick={() => goToPage(Math.max(page - 1, 0))}
              disabled={page === 0}
              className={`px-3 py-1 rounded-lg ${
                page === 0
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: 5 }, (_, i) => {
              const pageNum = page - 2 + i;
              if (pageNum < 0) return null;
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-1 rounded-lg ${
                    pageNum === page
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {pageNum + 1}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(page + 1)}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
