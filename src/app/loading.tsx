export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500 mx-auto mb-4"></div>
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
}
