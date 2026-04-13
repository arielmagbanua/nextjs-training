"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/products/1", label: "Product 1" },
  { href: "/products/2", label: "Product 2" },
  { href: "/products/3", label: "Product 3" },
];

export default function ProductsPage() {
  const testProductId = 45;
  const pathname = usePathname();

  return (
    <>
      <h1>Product List</h1>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <h2
            key={link.href}
            className={isActive ? "text-blue-500 font-bold mr-4" : ""}
          >
            <Link href={link.href}>{link.label}</Link>
          </h2>
        );
      })}
      <h2>
        <Link href={`/products/${testProductId}`} replace>
          Product {testProductId}
        </Link>
      </h2>
    </>
  );
}
