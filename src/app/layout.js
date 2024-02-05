import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventmakers Dynacode",
  description: "The React Framework for the Web",
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
