import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="py-4">
          {process.env.APP_NAME || "My Awesome Application"}
        </h1>
        <ul className="flex flex-row gap-6 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-blue-500 font-medium transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts/abc"
              className="hover:text-blue-500 font-medium transition-colors duration-200"
            >
              ABC
            </Link>
          </li>

          <li>
            <Link
              href="/posts/1"
              className="hover:text-blue-500 font-medium transition-colors duration-200"
            >
              Post 1
            </Link>
          </li>

          <li>
            <Link
              href="/posts/2"
              className="hover:text-blue-500 font-medium transition-colors duration-200"
            >
              Post 2
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">{children}</main>
    </>
  );
}
