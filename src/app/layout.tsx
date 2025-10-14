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
  title: "Technodrome Solutions",
  description: "Technodrome Solutions Private Limited",
  icons: {
    icon: [
      { url: "/technodromeTlogo.png", sizes: "16x16", type: "image/png" },
      { url: "/technodromeTlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/technodromeTlogo.png", sizes: "48x48", type: "image/png" },
      { url: "/technodromeTlogo.png", sizes: "64x64", type: "image/png" }, // sharper on retina
      { url: "/technodromeTlogo.svg", type: "image/svg+xml" }, // vector fallback
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
