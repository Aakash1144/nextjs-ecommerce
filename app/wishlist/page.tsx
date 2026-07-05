"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlistStore } from "@/store/wishlistStore";
import { Trash2 } from "lucide-react";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-xl font-semibold">
          Your wishlist is empty ❤️
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <h1 className="text-3xl font-bold">Wishlist</h1>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border bg-white p-4"
          >
            <Link href={`/products/${product.slug}`}>
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mt-3 font-semibold">{product.name}</h2>
            </Link>

            <button
              onClick={() => removeFromWishlist(product.id)}
              className="mt-3 flex items-center gap-2 text-red-500"
            >
              <Trash2 size={16} />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}