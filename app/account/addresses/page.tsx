"use client";

import { MapPin } from "lucide-react";
import { toast } from "sonner";

export default function AddressesPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Saved Addresses
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your delivery addresses.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-10 shadow-sm">

        <MapPin
          size={52}
          className="mb-6 text-slate-400"
        />

        <h2 className="text-2xl font-semibold">
          No Address Added
        </h2>

        <p className="mt-3 text-slate-500">
          Save an address to speed up checkout.
        </p>

        <button
          onClick={() =>
            toast.info("Address form will be added in backend integration.")
          }
          className="mt-8 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white"
        >
          Add Address
        </button>

      </div>

    </div>
  );
}