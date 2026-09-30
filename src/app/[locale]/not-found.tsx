import { Link } from "@/i18n/routing";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">404 - Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        We couldn't find the page or tool you're looking for. It might have been moved or deleted.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
