import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Beauty",
    image: "/images/categories/beauty.jpg",
    count: "100+ Products",
  },
  {
    name: "Fashion",
    image: "/images/categories/fashion.jpg",
    count: "120+ Products",
  },
  {
    name: "Footwear",
    image: "/images/categories/footwear.jpg",
    count: "60+ Products",
  },
  {
    name: "Furniture",
    image: "/images/categories/furniture.jpg",
    count: "40+ Products",
  },
  {
    name: "Electronics",
    image: "/images/categories/electronics.jpg",
    count: "85+ Products",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-10">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <p className="mt-2 text-gray-500">
            Browse our most popular categories
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* TEXT */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}