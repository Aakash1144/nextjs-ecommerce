"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User, Search } from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight md:text-2xl"
        >
          🛍️ Arora Store
        </Link>

        {/* Search */}
        <div className="relative hidden w-full max-w-md md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border py-2 pl-10 pr-4 outline-none transition focus:border-black"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">

          {/* ❤️ Wishlist */}
          <Link
            href="/wishlist"
            className="relative transition hover:scale-110"
          >
            <Heart
              size={22}
              className={
                wishlistItems.length > 0
                  ? "text-red-500 fill-red-500"
                  : "text-black"
              }
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* 🛒 Cart */}
          <Link
            href="/cart"
            className="relative transition hover:scale-110"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* 👤 User */}
          <button className="transition hover:scale-110">
            <User size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t px-4 py-3 md:hidden">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border py-2 pl-10 pr-4 outline-none focus:border-black"
          />
        </div>
      </div>
    </header>
  );
}