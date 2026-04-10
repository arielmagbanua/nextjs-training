export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Products Layout</h1>
      {children}
    </div>
  );
}
