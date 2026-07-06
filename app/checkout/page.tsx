"use client";

import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.city) {
      alert("Please fill all required fields");
      return;
    }

    // clearCart();
    router.push("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-xl font-semibold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* LEFT - FORM */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          {/* PAYMENT (UI ONLY) */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Payment Method</h2>

            <div className="mt-3 space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                UPI (Coming Soon)
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full rounded-lg bg-black py-3 text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}