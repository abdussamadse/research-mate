export default function PaperCard({ paper, onSave }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="font-bold text-lg mb-2">{paper.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {paper.summary}
      </p>
      <p className="text-xs text-gray-500 mb-2">{paper.authors.join(", ")}</p>
      {paper.pdfLink && (
        <a
          href={paper.pdfLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Read PDF
        </a>
      )}
      <button
        onClick={() => onSave(paper)}
        className="ml-4 px-3 py-1 bg-green-500 text-white rounded-lg"
      >
        Save
      </button>
    </div>
  );
}
