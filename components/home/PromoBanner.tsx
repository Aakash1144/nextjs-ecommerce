export default function PromoBanner() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

        <div>
          <p className="text-blue-400 font-semibold uppercase">
            Limited Time Offer
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Up to 50% OFF
          </h2>

          <p className="mt-5 max-w-xl text-gray-300">
            Discover amazing deals on premium products. Don't miss this
            exclusive sale.
          </p>

          <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200">
            Shop Sale
          </button>
        </div>

        <div className="hidden md:flex h-64 w-64 items-center justify-center rounded-3xl bg-gray-800 text-7xl">
          🎁
        </div>

      </div>
    </section>
  );
}