"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { Product } from "@/types/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <button
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow transition hover:scale-110"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={18} />
        </button>

        {product.discountPercentage && (
          <span className="absolute left-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content */}

      <div className="space-y-3 p-4">
        <p className="text-sm text-slate-500">{product.brand}</p>

        <h3 className="line-clamp-2 font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-sm">
          <Star
            className="fill-yellow-400 text-yellow-400"
            size={16}
          />

          <span>{product.rating}</span>

          <span className="text-slate-400">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-white transition hover:bg-slate-800"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </Link>
  );
}