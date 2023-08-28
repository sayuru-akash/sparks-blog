import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparks by Codezela",
  description:
    "Sparks is an initiative by Codezela to help you learn and grow while exploring the world of technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <Header />
        <div className="bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
