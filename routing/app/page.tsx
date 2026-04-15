import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome to the Home Page</h1>
        <Link href="/products/1">Products 1</Link>
        <Link href="/products/2">Products 2</Link>
        <Link href="/products/3">Products 3</Link>
        <Link href="/articles/breaking-news-1?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-1?lang=fr">Read in French</Link>
      </main>
    </div>
  );
}
