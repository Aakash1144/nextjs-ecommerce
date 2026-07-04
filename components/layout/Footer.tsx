export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-10 px-8 md:grid-cols-4">

        <div>
          <h3 className="text-2xl font-bold text-white">
            🛍️ Aakash Store
          </h3>

          <p className="mt-4">
            Premium shopping experience built with Next.js.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Shop
          </h4>

          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>Electronics</li>
            <li>Furniture</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Company
          </h4>

          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Contact
          </h4>

          <p>Email: support@aakashstore.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        © 2026 Aakash Store. All rights reserved.
      </div>

    </footer>
  );
}