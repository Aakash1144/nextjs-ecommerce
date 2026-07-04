import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 pt-8 pb-12">

        {/* Left Content */}
        <div className="max-w-xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🔥 Summer Collection 2026
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight">
            Shop Premium Products
            <span className="block text-blue-600">
              For Everyday Life
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover carefully selected products with exceptional quality,
            affordable prices and fast delivery.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-white">
              Explore Collection
            </button>

          </div>

        </div>

        {/* Right Content */}

        <div className="relative hidden h-[420px] w-[420px] overflow-hidden rounded-3xl shadow-2xl md:block">

          <Image
            src="/images/hero.jpg"
            alt="Shopping Collection"
            fill
            className="object-cover"
            priority
            />

        </div>

      </div>
    </section>
  );
}