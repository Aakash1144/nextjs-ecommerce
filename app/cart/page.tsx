"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-4 text-slate-600">
          Looks like you haven't added anything yet.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-lg bg-black px-8 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-10 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        {/* Cart Items */}

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 rounded-xl border p-5"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={item.thumbnail}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.brand}
                </p>

                <p className="mt-3 text-2xl font-bold">
                  {formatPrice(item.price)}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded border p-2"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded border p-2"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}

        <div className="h-fit rounded-xl border p-6">
          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>

          <div className="mt-6 flex justify-between">
            <span>Subtotal</span>

            <span className="font-bold">
              {formatPrice(subtotal())}
            </span>
          </div>

          <div className="mt-3 flex justify-between">
            <span>Shipping</span>

            <span className="text-green-600">
              FREE
            </span>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>

            <span>{formatPrice(subtotal())}</span>
          </div>

          <button className="mt-8 w-full rounded-lg bg-black py-3 text-white hover:bg-slate-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}