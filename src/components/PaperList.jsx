import PaperCard from "./PaperCard";

export default function PaperList({ papers, onSave }) {
  if (!papers.length) return <p className="p-4">No papers found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {papers.map((p) => (
        <PaperCard key={p.id} paper={p} onSave={onSave} />
      ))}
    </div>
  );
}
