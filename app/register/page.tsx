import RegisterForm from "@/components/account/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>

        <p className="mt-2 text-gray-600">
          Join Arora Store and start shopping today.
        </p>
      </div>

      <RegisterForm />
    </main>
  );
}