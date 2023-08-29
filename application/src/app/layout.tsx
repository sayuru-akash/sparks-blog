import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import { getNavigation } from "./ghost-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparks by Codezela",
  description:
    "Sparks is an initiative by Codezela to help you learn and grow while exploring the world of technology.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteHead = await getNavigation();

  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <Header navLinks={siteHead?.navigation as []} />
        <div className="bg-white">{children}</div>
        <Footer navLinks={siteHead?.navigation as []} />
      </body>
    </html>
  );
}
