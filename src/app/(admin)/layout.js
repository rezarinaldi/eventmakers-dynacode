import { Header } from "@/components/Header";

export default function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-stretch px-5 mt-8 lg:mt-16 mb-48">
        {children}
      </section>
    </div>
  );
}
