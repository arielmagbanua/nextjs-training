import Link from "next/link";

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Reading in language: {lang}</p>

      <div>
        <ul>
          <li>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
          </li>
          <li>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
          </li>
          <li>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
