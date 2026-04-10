import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-16">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-center text-zinc-600 dark:text-zinc-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
      >
        Go back to the home page
      </Link>
    </div>
  );
}
