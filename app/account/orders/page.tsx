import Link from "next/link";
import { Package } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          My Orders
        </h1>

        <p className="mt-2 text-slate-600">
          Track all your previous purchases.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-12 text-center shadow-sm">

        <Package
          size={56}
          className="mx-auto text-slate-400"
        />

        <h2 className="mt-6 text-2xl font-semibold">
          No Orders Yet
        </h2>

        <p className="mt-3 text-slate-500">
          Looks like you haven't placed any orders.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          Start Shopping
        </Link>

      </div>

    </div>
  );
}