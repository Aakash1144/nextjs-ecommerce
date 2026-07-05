import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          All Products
        </h1>

        <p className="mt-2 text-slate-500">
          Explore our latest collection.
        </p>
      </div>

      <ProductGrid products={products} />
    </main>
  );
}