"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Something went wrong!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        An unexpected error has occurred while trying to render this page.
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
