import type { Metadata } from "next";
import { Inter, Kavoon } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kavoon = Kavoon({
  weight: "400",
  variable: "--font-kavoon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cottage Finder",
  description: "Find your perfect cottage getaway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kavoon.variable}`}>
        {children}
      </body>
    </html>
  );
}
