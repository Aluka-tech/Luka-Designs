import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUKA DESIGNS — Avant-Garde Architecture",
  description: "High-end modern architectural design studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-studio-cobalt selection:text-white">
        {children}
      </body>
    </html>
  );
}