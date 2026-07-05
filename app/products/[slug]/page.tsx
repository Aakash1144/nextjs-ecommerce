import { notFound } from "next/navigation";

import { products } from "@/data/products";
import ProductDetails from "@/components/product/ProductDetails";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (product) => product.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <ProductDetails product={product} />
    </main>
  );
}