import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teknoro Software",
  description: "Teknoro Software Solutions Private Limited",
  icons: {
    icon: [
      { url: "/teknoro-2.png", sizes: "16x16", type: "image/png" },
      { url: "/teknoro-2.png", sizes: "32x32", type: "image/png" },
      { url: "/teknoro-2.png", sizes: "48x48", type: "image/png" },
      { url: "/teknoro-2.png", sizes: "64x64", type: "image/png" }, // sharper on retina
      { url: "/teknoro-2.svg", type: "image/svg+xml" }, // vector fallback
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
