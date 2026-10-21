
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGRA — Personal Space",
  description:
    "A personal space for projects, thoughts, experiments, and the journey in between.",
  applicationName: "AGRA",
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
