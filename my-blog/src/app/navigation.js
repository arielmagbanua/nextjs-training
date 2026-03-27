import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-gray-100">
        <ul className="flex gap-4 p-4">
          <li className="text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-blue-500">
            <Link href="/posts/1">Posts 1</Link>
          </li>
          <li className="text-blue-500">
            <Link href="/posts/2">Posts 2</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
