export default function Documentation({ darkMode }) {
  return (
    <div
      className={`max-w-7xl mx-auto p-6 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">
        📚 College Paper Explorer Documentation
      </h1>

      <p className="mb-4">
        College Paper Explorer (ResearchMate) is a web app for students to explore
        research papers from arXiv.org. This page explains how to use the app.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc pl-6">
        <li>Search papers by keywords and categories/subjects</li>
        <li>Default “All Fields” search on first visit</li>
        <li>Favorites system using localStorage</li>
        <li>Pagination with numbered pages and Next/Previous buttons</li>
        <li>Example placeholder in search input</li>
        <li>Dark mode support</li>
        <li>Responsive design with TailwindCSS</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How to Use</h2>
      <ol className="list-decimal pl-6">
        <li>Open the app in your browser.</li>
        <li>
          Type a keyword like <strong>Deep Learning</strong> or <strong>Quantum Computing</strong> in the search bar.
        </li>
        <li>
          Optionally select a <strong>category/subject</strong> from the dropdown or leave it as "All Fields".
        </li>
        <li>Click <strong>Search</strong> to view results or <strong>Clear</strong> to reset.</li>
        <li>Use pagination at the bottom to navigate pages.</li>
        <li>
          Click the <strong>star icon</strong> on a paper card to add it to Favorites. View saved papers on the Favorites page.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example Searches</h2>
      <ul className="list-disc pl-6">
        <li>Deep Learning</li>
        <li>Quantum Computing</li>
        <li>Reinforcement Learning</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Notes</h2>
      <ul className="list-disc pl-6">
        <li>Favorites are stored locally using your browser's localStorage.</li>
        <li>First-time users see the latest papers from all major categories.</li>
        <li>The app automatically adapts to dark mode if your system uses it.</li>
      </ul>
    </div>
  );
}
