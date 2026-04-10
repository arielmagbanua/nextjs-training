import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white text-center dark:bg-black">
        <h1 className="text-6xl font-bold text-black dark:text-zinc-50">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
          Page Not Found
        </h2>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-4 flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Go Back Home
        </Link>
      </main>
    </div>
  );
}
