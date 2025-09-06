import { XMLParser } from "fast-xml-parser";

export function parseArxiv(xmlString) {
  const parser = new XMLParser({ ignoreAttributes: false });
  const data = parser.parse(xmlString);

  let entries = data.feed.entry;
  if (!entries) return [];
  if (!Array.isArray(entries)) entries = [entries];

  return entries.map((paper) => {
    const pdfLink = Array.isArray(paper.link)
      ? paper.link.find((l) => l["@_title"] === "pdf")?.["@_href"]
      : null;

    const categories = Array.isArray(paper.category)
      ? paper.category.map((c) => c["@_term"])
      : paper.category
      ? [paper.category["@_term"]]
      : [];

    return {
      id: paper.id,
      title: paper.title,
      summary: paper.summary,
      authors: Array.isArray(paper.author)
        ? paper.author.map((a) => a.name)
        : [paper.author?.name],
      published: paper.published,
      pdfLink,
      categories,
    };
  });
}
