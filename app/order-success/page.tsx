"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

import { useCartStore } from "@/store/cartStore";

export default function OrderSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();

    // Later:
    // Analytics
    // Order tracking
    // Email confirmation
  }, [clearCart]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm">

        <div className="flex justify-center">
          <CheckCircle
            size={70}
            className="text-green-500"
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold">
          Order Placed Successfully!
        </h1>

        <p className="mt-2 text-gray-500">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          Order ID:{" "}
          <span className="font-semibold">
            #ORD-{Date.now()}
          </span>
        </div>

        <Link
          href="/"
          className="mt-6 block rounded-lg bg-black py-3 text-white transition hover:bg-gray-800"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}