import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template Next.js | Devscale ID",
  description: "The React Framework for the Web",
  publishedTime: "28-01-2024",
  authors: ["Devscale ID Student"],
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://devscale.id/public/devscalefav.svg"),
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
