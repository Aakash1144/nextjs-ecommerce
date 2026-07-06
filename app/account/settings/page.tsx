"use client";

import { Bell, Lock, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";

export default function SettingsPage() {
  const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your account preferences.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">

        <button className="flex w-full items-center gap-3 rounded-lg border p-4 transition hover:bg-slate-50">
          <Lock size={20} />
          Change Password
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg border p-4 transition hover:bg-slate-50">
          <Bell size={20} />
          Notification Preferences
        </button>

        <button
          onClick={() => {
            logout();
            toast.success("Logged out successfully.");
            router.push("/");
          }}
          className="flex w-full items-center gap-3 rounded-lg border border-red-200 p-4 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}