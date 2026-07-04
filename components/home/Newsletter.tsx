export default function Newsletter() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-4 text-blue-100">
          Subscribe to receive the latest offers and product launches.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <input
            placeholder="Enter your email"
            className="w-96 rounded-lg px-5 py-3 text-black outline-none"
          />

          <button className="rounded-lg bg-black px-6 py-3 hover:bg-gray-800">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}