import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/dashboard" className="link link-hover">
          Dashboard
        </Link>
        <Link href={`/dashboard/#events`} className="link link-hover">
          Events
        </Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Dynacode</p>
      </aside>
    </footer>
  );
};
