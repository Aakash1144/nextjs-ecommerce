import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          🛍️ Aakash Store
        </Link>

        {/* Search */}
        <div className="relative w-96">

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

        {/* Right Icons */}
        <div className="flex items-center gap-6">

          <Heart
            className="cursor-pointer"
            size={22}
          />

          <ShoppingCart
            className="cursor-pointer"
            size={22}
          />

          <User
            className="cursor-pointer"
            size={22}
          />

        </div>

      </div>
    </header>
  );
}