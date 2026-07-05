"use client";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { Product } from "@/types/products";
import { formatPrice } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.thumbnail
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || ""
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || ""
  );

  return (
    <section className="grid gap-12 lg:grid-cols-2">
      {/* ================= IMAGE GALLERY ================= */}

      <div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border bg-slate-100">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {product.images && product.images.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative h-24 w-24 overflow-hidden rounded-xl border-2 transition ${
                  selectedImage === image
                    ? "border-slate-900"
                    : "border-slate-200 hover:border-slate-400"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= PRODUCT INFO ================= */}

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {product.name}
        </h1>

        {/* Rating */}

        <div className="mt-5 flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-medium">
            {product.rating}
          </span>

          <span className="text-slate-500">
            ({product.reviewCount} Reviews)
          </span>
        </div>

        {/* Price */}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-4xl font-bold">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span className="text-xl text-slate-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}

          {product.discountPercentage && (
            <span className="rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Stock */}

        <div className="mt-5">
          {product.stock > 0 ? (
            <span className="font-medium text-green-600">
              In Stock ({product.stock} available)
            </span>
          ) : (
            <span className="font-medium text-red-600">
              Out of Stock
            </span>
          )}
        </div>

        {/* Description */}

        <p className="mt-8 leading-8 text-slate-600">
          {product.description}
        </p>

        {/* Colors */}

        {product.colors && product.colors.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-3 font-semibold">
              Color
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-lg border px-4 py-2 transition ${
                    selectedColor === color
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "hover:border-slate-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sizes */}

        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-3 font-semibold">
              Size
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-5 py-2 transition ${
                    selectedSize === size
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "hover:border-slate-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}

        <div className="mt-10 flex gap-4">
          <button
            onClick={() => {
                addToCart(product);
                alert(`${product.name} added to cart!`);
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
            <ShoppingCart size={20} />
                Add to Cart
            </button>

          <button className="rounded-xl border p-4 transition hover:bg-slate-100">
            <Heart size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}