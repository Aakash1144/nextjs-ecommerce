import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 pt-8 pb-12">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* Badge */}
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🔥 Summer Collection 2026
          </span>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Shop Premium Products
            <span className="block text-blue-600">
              For Everyday Life
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base text-gray-600">
            Discover carefully selected products with exceptional quality,
            affordable prices and fast delivery.
          </p>

          {/* INLINE FEATURES */}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Secure Checkout</span>
            </div>

            <div className="flex items-center gap-2">
              <span>↩</span>
              <span>Easy Returns</span>
            </div>
          </div>

          {/* SOFT DIVIDER (NEW) */}
          <div className="mt-6 h-px w-40 bg-gradient-to-r from-slate-300 to-transparent" />

          {/* SOCIAL PROOF (NEW) */}
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">

            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="font-medium text-gray-800">4.8</span>
            </div>

            <span className="text-gray-400">|</span>

            <span>10K+ Happy Customers</span>

            <span className="text-gray-400">|</span>

            <span>Trusted Store</span>

          </div>

          {/* CTA */}
          <div className="mt-7">
            <a
              href="/products"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              View All Products
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden h-[420px] w-[420px] overflow-hidden rounded-3xl md:block">

          {/* SOFT BACKGROUND GLOW (NEW) */}
          <div className="absolute -inset-6 rounded-3xl bg-blue-200/30 blur-2xl" />

          {/* IMAGE CONTAINER */}
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/hero1.jpg"
              alt="Shopping Collection"
              fill
              priority
              className="object-cover object-center"
            />

            {/* LIVE BADGE */}
            <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
              ● Trending Now
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}