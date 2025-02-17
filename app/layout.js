import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation";
import Hamburger from "@/components/hamburger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barber Shop",
  description: "Barber Shop appointment app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="main-header"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header id="main-header" className="flex flex-row justify-between">
          <Link href='/'>
            <h1 className="text-3xl m-4">Barber Shop</h1>
          </Link>
          <MainNavigation />
          <Hamburger />
        </header>
        <main id="main">
          {children}
        </main>
        <footer id="main-footer" className="bg-zinc-950 text-center">
          <div>
            <Link href='https://mihais-git.github.io/'>
              Mihai Suciu &copy; 2025
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
