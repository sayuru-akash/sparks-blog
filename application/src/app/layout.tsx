import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import { getNavigation } from "./ghost-client";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sparks by Codezela - Tech Blog",
    template: "%s | Sparks by Codezela",
  },
  description:
    "Sparks is an initiative by Codezela to help you learn and grow while exploring the world of technology. Latest tech news, case studies, and industry trends.",
  keywords: [
    "technology blog",
    "tech news",
    "case studies",
    "Codezela",
    "software development",
    "programming",
    "web development",
    "industry trends",
  ],
  authors: [{ name: "Codezela Technologies", url: "https://codezela.com" }],
  creator: "Codezela Technologies",
  publisher: "Codezela Technologies",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sparks.codezela.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparks.codezela.com",
    title: "Sparks by Codezela - Tech Blog",
    description: "Sparks is an initiative by Codezela to help you learn and grow while exploring the world of technology.",
    siteName: "Sparks by Codezela",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sparks by Codezela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparks by Codezela - Tech Blog",
    description: "Sparks is an initiative by Codezela to help you learn and grow while exploring the world of technology.",
    images: ["/logo.png"],
    creator: "@codezela",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteHead = await getNavigation();

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header navLinks={siteHead?.navigation ?? []} />
        <main className="flex-1">{children}</main>
        <Footer navLinks={siteHead?.navigation ?? []} />
      </body>
    </html>
  );
}
