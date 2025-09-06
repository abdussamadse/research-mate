export default function PaperCardSkeleton() {
  return (
    <div
      className="p-4 bg-white rounded-xl border border-gray-300 shadow-md animate-pulse"
    >
      <div className="flex justify-between items-start">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>

      <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>

      <div className="h-3 bg-gray-200 rounded mb-2 w-1/2"></div>
      <div className="h-3 bg-gray-200 rounded mb-2 w-1/3"></div>

      <div className="flex gap-2 mb-2">
        <span className="h-5 w-12 bg-gray-200 rounded"></span>
        <span className="h-5 w-16 bg-gray-200 rounded"></span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
