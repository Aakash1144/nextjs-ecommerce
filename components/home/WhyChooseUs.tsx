const features = [
  {
    title: "Free Shipping",
    icon: "🚚",
    desc: "Free shipping on orders above ₹999",
  },
  {
    title: "Secure Payment",
    icon: "🔒",
    desc: "100% secure payment gateway",
  },
  {
    title: "Easy Returns",
    icon: "↩️",
    desc: "30-day hassle-free returns",
  },
  {
    title: "24x7 Support",
    icon: "💬",
    desc: "Always here to help",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Shop With Us?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}