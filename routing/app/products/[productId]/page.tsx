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
