import Link from "next/link";

import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Featured Products
            </h2>

            <p className="mt-2 text-gray-500">
              Hand-picked products just for you
            </p>
          </div>

          <Link
            href="/products"
            className="rounded-lg border border-slate-300 px-5 py-2 transition hover:bg-slate-900 hover:text-white"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}