"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function OrderSuccessPage() {
  useEffect(() => {
    // optional: you can later send analytics / tracking here
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm">

        {/* ICON */}
        <div className="flex justify-center">
          <CheckCircle size={70} className="text-green-500" />
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-2xl font-bold">
          Order Placed Successfully!
        </h1>

        <p className="mt-2 text-gray-500">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* ORDER ID (mock for now) */}
        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          Order ID: <span className="font-semibold">#ORD-{Date.now()}</span>
        </div>

        {/* BUTTON */}
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