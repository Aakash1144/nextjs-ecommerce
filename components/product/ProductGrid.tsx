import { Product } from "@/types/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">No Products Found</h2>
        <p className="mt-2 text-slate-500">
          Try changing your filters.
        </p>
      </div>
    );
  }

  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}