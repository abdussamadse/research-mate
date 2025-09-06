export default function PaperDetailsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-4 animate-pulse">
      <div className="h-5 w-24 bg-gray-300 rounded mb-4"></div>

      <div className="h-8 w-3/4 bg-gray-300 rounded mb-3"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>

      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-11/12"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      <div className="flex gap-2">
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
        <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}
