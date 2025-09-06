import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleDark }) {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">
          ResearchMate
        </Link>

        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/favorites" className="hover:underline">
            Favorites
          </Link>
          <button
            onClick={toggleDark}
            className="bg-white text-blue-600 px-3 py-1 rounded-lg shadow-md"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
