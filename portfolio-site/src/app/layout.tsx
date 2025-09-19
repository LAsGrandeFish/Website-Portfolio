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
  title: "Ivan Zhang - Software Engineer",
  description: "Portfolio template highlighting projects, writing, and resources for a software engineer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ivan Zhang - Software Engineer",
    description: "Showcasing side projects, resources, and writing on building resilient products.",
    images: [
      {
        url: "/profile-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Ivan Zhang portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Zhang - Software Engineer",
    description: "Showcasing side projects, resources, and writing on building resilient products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
