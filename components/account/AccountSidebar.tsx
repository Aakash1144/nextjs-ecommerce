"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MapPin,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

const menuItems = [
  {
    name: "Dashboard",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    href: "/account/orders",
    icon: Package,
  },
  {
    name: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/account/settings",
    icon: Settings,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  return (
    <aside className="rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        My Account
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 border-t pt-6">
        <button
          onClick={() => {
            logout();
            toast.success("Logged out successfully");
            router.push("/");
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}