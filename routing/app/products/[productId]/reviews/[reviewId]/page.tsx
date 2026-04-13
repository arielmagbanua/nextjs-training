import type { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { productId, reviewId } = await params;

  // you can fetch the product and review from the database here

  return {
    title: `Product (${productId}) Review ${reviewId}`,
    description: `Product (${productId}) Review ${reviewId} Details`,
  };
};

export default async function ProductReviewPage({ params }: Props) {
  const { productId, reviewId } = await params;

  return (
    <>
      <h1>Product Review</h1>
      <h2>Product {productId}</h2>
      <h2>Review {reviewId}</h2>
    </>
  );
}
