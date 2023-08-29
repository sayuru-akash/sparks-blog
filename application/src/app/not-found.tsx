import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you are looking for might have been removed or doesn&rsquo;t
        exist.
      </p>
      <Link href="/" className="text-purple-600 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
