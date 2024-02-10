import { Header } from "@/components/Header";
import { Login } from "@/components/auth/components/Login";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Header />
      <Link className="text-blue-600" href="/login"> Info lebih lengkap, silakan Login</Link>
    </main>
  );
}
