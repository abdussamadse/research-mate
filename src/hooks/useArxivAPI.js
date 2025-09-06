import { useState, useEffect } from "react";
import { parseArxiv } from "../utils/parseArxiv";

// List of main categories to include for "All Fields"
const ALL_CATEGORIES = [
  "cs.AI",
  "cs.LG",
  "cs.CL",
  "cs.CV",
  "cs.RO",
  "cs.IR",
  "cs.HC",
  "cs.SE",
  "cs.NI",
  "cs.OS",
  "cs.GR",
  "math.ST",
  "math.OC",
  "physics.gen-ph",
  "physics.comp-ph",
  "physics.optics",
  "q-bio",
  "q-fin",
  "eess",
  "econ",
];

export default function useArxivAPI(query, category, page = 0, perPage = 10) {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPapers() {
      setLoading(true);

      let searchQuery = "";

      if (query) {
        // User searched a keyword
        searchQuery = `all:${encodeURIComponent(query)}`;
      } else if (category) {
        // Specific category selected
        searchQuery = `cat:${category}`;
      } else {
        // "All Fields" -> combine main categories
        searchQuery = ALL_CATEGORIES.map((c) => `cat:${c}`).join("+OR+");
      }

      const start = page * perPage;
      const url = `https://export.arxiv.org/api/query?search_query=${searchQuery}&start=${start}&max_results=${perPage}&sortBy=submittedDate&sortOrder=descending`;

      const res = await fetch(url);
      const xml = await res.text();
      const parsed = parseArxiv(xml);
      setPapers(parsed);
      setLoading(false);
    }

    fetchPapers();
  }, [query, category, page, perPage]);

  return { papers, loading };
}
