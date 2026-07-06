import { ReactNode } from "react";
import AccountSidebar from "@/components/account/AccountSidebar";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

        <AccountSidebar />

        <section>
          {children}
        </section>

      </div>
    </main>
  );
}