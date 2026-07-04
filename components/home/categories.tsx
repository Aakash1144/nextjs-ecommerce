const categories = [
  {
    id: 1,
    name: "Fashion",
    emoji: "👕",
    items: "120+ Products",
  },
  {
    id: 2,
    name: "Electronics",
    emoji: "💻",
    items: "85+ Products",
  },
  {
    id: 3,
    name: "Footwear",
    emoji: "👟",
    items: "60+ Products",
  },
  {
    id: 4,
    name: "Furniture",
    emoji: "🛋️",
    items: "40+ Products",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Shop by Category
          </h2>

          <p className="mt-2 text-gray-500">
            Browse our most popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.id}
              className="cursor-pointer rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {category.emoji}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {category.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {category.items}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}