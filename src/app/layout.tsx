import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://agra-web-eta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AGRA — Personal Website",
    template: "%s | AGRA",
  },

  description:
    "Explore AGRA's work, personal notes, ideas, and ongoing projects.",

  applicationName: "AGRA",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "AGRA — Personal Website",
    description:
      "Explore AGRA's work, personal notes, ideas, and ongoing projects.",
    url: siteUrl,
    siteName: "AGRA",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AGRA — Personal Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AGRA — Personal Website",
    description:
      "Explore AGRA's work, personal notes, ideas, and ongoing projects.",
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