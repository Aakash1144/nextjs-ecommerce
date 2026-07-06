"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  Package,
  MapPin,
  LogOut,
  User,
  UserCircle,
} from "lucide-react";
import { toast } from "sonner";

import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const router = useRouter();

  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  const { user, isAuthenticated, logout } = useAuthStore();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleLogout = () => {
    logout();
    setShowMenu(false);

    toast.success("Logged out successfully.");

    router.push("/");
  };

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

        {/* Desktop Search */}
        <div className="relative hidden w-full max-w-md md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border py-2 pl-10 pr-4 outline-none transition focus:border-slate-900"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative transition hover:scale-110"
          >
            <Heart
              size={22}
              className={
                wishlistItems.length > 0
                  ? "fill-red-500 text-red-500"
                  : "text-black"
              }
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
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

          {/* User */}
          <div
            ref={menuRef}
            className="relative"
          >
            {!isAuthenticated ? (
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-slate-100"
              >
                <User size={22} />

                <span className="hidden font-medium md:block">
                  Sign In
                </span>
              </Link>
            ) : (
              <>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-slate-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-slate-800 to-slate-600 text-sm font-semibold text-white shadow-sm">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>

                  <span className="hidden font-medium md:block">
                    {user?.name.split(" ")[0]}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      showMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-xl border bg-white shadow-xl">

                    {/* User Info */}
                    <div className="border-b bg-slate-50 px-5 py-4">
                      <p className="font-semibold">
                        {user?.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {user?.email}
                      </p>
                    </div>

                    {/* Menu */}

                    <Link
                      href="/account"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-3 px-5 py-3 transition hover:bg-slate-100"
                    >
                      <UserCircle size={18} />
                      My Account
                    </Link>

                    <Link
                      href="/account/orders"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-3 px-5 py-3 transition hover:bg-slate-100"
                    >
                      <Package size={18} />
                      My Orders
                    </Link>

                    <Link
                      href="/account/addresses"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-3 px-5 py-3 transition hover:bg-slate-100"
                    >
                      <MapPin size={18} />
                      Saved Addresses
                    </Link>

                    <div className="border-t" />

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 px-5 py-3 text-left text-red-600 transition hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>
                )}
              </>
            )}
          </div>

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
            className="w-full rounded-full border py-2 pl-10 pr-4 outline-none transition focus:border-slate-900"
          />
        </div>
      </div>
    </header>
  );
}