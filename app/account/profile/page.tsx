"use client";

import { useState } from "react";
import { toast } from "sonner";
import { User, Mail, Phone } from "lucide-react";

import { useAuthStore } from "@/store/authStore";

export default function ProfilePage() {
  const { user } = useAuthStore();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your personal information.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-3xl font-bold text-white">
            {user?.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {user?.name}
            </h2>

            <p className="text-slate-500">
              Customer Account
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <User size={16} />
              Full Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border p-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <Mail size={16} />
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border p-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <Phone size={16} />
              Phone
            </label>

            <input
              placeholder="+91 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border p-3 outline-none focus:border-slate-900"
            />
          </div>

        </div>

        <button
          onClick={handleSave}
          className="mt-8 rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}