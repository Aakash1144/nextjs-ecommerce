import Link from "next/link";
import {
  Heart,
  MapPin,
  Package,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

import StatCard from "@/components/account/StatCard";

export default function AccountPage() {
  const { user } = useAuthStore.getState();

  const cartItems = useCartStore.getState().items;
  const wishlistItems = useWishlistStore.getState().items;

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.name.split(" ")[0]} 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your profile, orders and shopping activity.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Orders"
          value={0}
          icon={Package}
          color="bg-blue-600"
        />

        <StatCard
          title="Wishlist"
          value={wishlistItems.length}
          icon={Heart}
          color="bg-red-500"
        />

        <StatCard
          title="Cart"
          value={totalCartItems}
          icon={ShoppingCart}
          color="bg-emerald-600"
        />

        <StatCard
          title="Addresses"
          value={0}
          icon={MapPin}
          color="bg-amber-500"
        />

      </div>

      {/* Recent Orders */}

      <section className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold">
          Recent Orders
        </h2>

        <p className="mt-6 text-slate-500">
          You haven't placed any orders yet.
        </p>

        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline"
        >
          Browse Products

          <ArrowRight size={18} />
        </Link>

      </section>

      {/* Default Address */}

      <section className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold">
          Default Address
        </h2>

        <p className="mt-6 text-slate-500">
          No address has been added yet.
        </p>

        <Link
          href="/account/addresses"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline"
        >
          Add Address

          <ArrowRight size={18} />
        </Link>

      </section>

      {/* Quick Actions */}

      <section className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-6">
          Quick Actions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Link
            href="/products"
            className="rounded-lg border p-5 transition hover:bg-slate-50"
          >
            <ShoppingCart
              size={24}
              className="mb-3"
            />

            <p className="font-semibold">
              Browse Products
            </p>
          </Link>

          <Link
            href="/wishlist"
            className="rounded-lg border p-5 transition hover:bg-slate-50"
          >
            <Heart
              size={24}
              className="mb-3 text-red-500"
            />

            <p className="font-semibold">
              Wishlist
            </p>
          </Link>

          <Link
            href="/account/profile"
            className="rounded-lg border p-5 transition hover:bg-slate-50"
          >
            <Package
              size={24}
              className="mb-3"
            />

            <p className="font-semibold">
              Manage Profile
            </p>
          </Link>

          <Link
            href="/account/addresses"
            className="rounded-lg border p-5 transition hover:bg-slate-50"
          >
            <MapPin
              size={24}
              className="mb-3"
            />

            <p className="font-semibold">
              Saved Addresses
            </p>
          </Link>

        </div>

      </section>

    </div>
  );
}