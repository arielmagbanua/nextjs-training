import { notFound } from "next/navigation";

export default async function ProductReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>Product Review</h1>
      <h2>Product {productId}</h2>
      <h2>Review {reviewId}</h2>
    </>
  );
}
