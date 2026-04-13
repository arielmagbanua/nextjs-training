import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Product",
    template: "%s | Product",
  },
  description: "Product Details",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <>
      <h1>Product Details</h1>
      <h2>Product {productId}</h2>
    </>
  );
}
