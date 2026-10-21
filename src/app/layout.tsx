import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://agra-web-eta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AGRA | Technology, AI, SEO & Digital Content",
    template: "%s | AGRA",
  },

  description:
    "Explore AGRA's journey across technology, AI, SEO, digital content, FnB, barista skills, hospitality, and professional growth.",

  applicationName: "AGRA",

    
verification: {
  google: "MCnO1-6GjkiGn0BrvLfjf621ekHTXEPYfa8jesTLarM",
},

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "AGRA | Technology, AI, SEO & Digital Content",
    description:
      "Explore AGRA's journey across technology, AI, SEO, digital content, FnB, barista skills, hospitality, and professional growth.",
    url: siteUrl,
    siteName: "AGRA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AGRA | Technology, AI, SEO & Digital Content",
    description:
      "Explore AGRA's journey across technology, AI, SEO, digital content, FnB, barista skills, hospitality, and professional growth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}