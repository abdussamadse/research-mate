# 📚 College Paper Explorer

**College Paper Explorer** is a web app for college students to explore research papers from [arXiv.org](https://arxiv.org).  
You can search by keywords, filter by subjects, save your favorite papers, and browse the latest research across all fields.

---

## 🌟 Features

- Search papers by **keywords** and **category/subject**  
- Default **All Fields** search on first visit  
- **Favorites** system using localStorage  
- Pagination with numbered pages and Next/Previous buttons  
- Example placeholder in search input to help you get started  
- Works in **dark mode**  
- Responsive design using **TailwindCSS**  

---

## 🛠 Technologies Used

- **React** for frontend  
- **TailwindCSS** for styling  
- **arXiv API** to fetch papers  
- **localStorage** for saving favorite papers  
- **lucide-react** for icons  

---

## 📂 Folder Structure

src/
├─ components/
│ ├─ PaperCard.jsx # Single paper card
│ ├─ PaperList.jsx # List of papers
│ └─ SearchBar.jsx # Search input + category dropdown
├─ hooks/
│ └─ useArxivAPI.js # Custom hook to fetch papers
├─ pages/
│ ├─ Home.jsx # Main page with search & results
│ └─ Favorites.jsx # Page to view saved papers
├─ utils/
│ └─ parseArxiv.js # XML parser for arXiv API
├─ App.jsx
└─ index.js

yaml
Copy code

---

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/college-paper-explorer.git
cd college-paper-explorer
Install dependencies:

bash
Copy code
npm install
Start the app:

bash
Copy code
npm run dev
Open in your browser:

arduino
Copy code
http://localhost:5173
📝 How to Use
Search: Type keywords like Deep Learning or Quantum Computing.

Category: Select a subject (e.g., AI, Robotics, Physics) or leave “All Fields” to browse everything.

Favorites: Click the star on a paper card to save it. View saved papers on the Favorites page.

Pagination: Use numbered pages or Next/Previous buttons to navigate results.

Dark Mode: Works automatically if your system is in dark mode.

💡 Example Searches
Deep Learning

Quantum Computing

Reinforcement Learning
