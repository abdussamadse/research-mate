import { useState, useEffect } from "react";
import { parseArxiv } from "../utils/parseArxiv";

export default function useArxivAPI(query, category, start = 0, max = 10) {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPapers() {
      setLoading(true);
      const search = query
        ? `all:${encodeURIComponent(query)}`
        : `cat:${category}`;
      const url = `https://export.arxiv.org/api/query?search_query=${search}&start=${start}&max_results=${max}&sortBy=submittedDate&sortOrder=descending`;

      const res = await fetch(url);
      const xml = await res.text();
      const parsed = parseArxiv(xml);
      setPapers(parsed);
      setLoading(false);
    }
    fetchPapers();
  }, [query, category, start, max]);

  return { papers, loading };
}
