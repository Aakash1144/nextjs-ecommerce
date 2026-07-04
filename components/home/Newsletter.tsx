export default function Newsletter() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-indigo-300">
          📩 Newsletter
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Be the first to know about new arrivals, exclusive offers,
          and seasonal collections.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-slate-700 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none focus:border-indigo-500"
          />

          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700">
            Subscribe
          </button>

        </div>

        <p className="mt-4 text-sm text-slate-400">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}