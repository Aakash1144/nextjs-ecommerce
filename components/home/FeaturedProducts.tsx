const products = [
  {
    id: 1,
    name: "MacBook Pro",
    image: "💻",
    price: "₹1,49,999",
    rating: "★★★★★",
  },
  {
    id: 2,
    name: "Nike Shoes",
    image: "👟",
    price: "₹5,999",
    rating: "★★★★☆",
  },
  {
    id: 3,
    name: "Sony Headphones",
    image: "🎧",
    price: "₹9,999",
    rating: "★★★★★",
  },
  {
    id: 4,
    name: "Apple Watch",
    image: "⌚",
    price: "₹39,999",
    rating: "★★★★☆",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Featured Products
            </h2>

            <p className="mt-2 text-gray-500">
              Hand-picked products just for you
            </p>
          </div>

          <button className="rounded-lg border px-5 py-2 hover:bg-white">
            View All
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-48 items-center justify-center rounded-xl bg-slate-100 text-7xl">
                {product.image}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-yellow-500">
                {product.rating}
              </p>

              <p className="mt-2 text-2xl font-bold">
                {product.price}
              </p>

              <button className="mt-5 w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800">
                Add to Cart
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}