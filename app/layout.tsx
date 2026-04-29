import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// 1. Initialize the font
const syne = Syne({ subsets: ["latin"] });

// 2. Declare and export the metadata object
export const metadata: Metadata = {
  title: "Bhupinder Singh - Blockchain Engineer & AI Researcher", // Added a base title
  description: "Blockchain Engineer & Generative AI Student at CGC University, Jhanjeri. Specializing in Web3, Smart Contracts, DeFi, and Cybersecurity. Building decentralized solutions for real-world problems.",
  keywords: [
    "blockchain engineer",
    "web3 developer",
    "smart contracts",
    "solidity",
    "defi",
    "dapp developer",
    "generative ai",
    "machine learning",
    "ai researcher",
    "cybersecurity",
    "ethereum",
    "cryptocurrency",
    "javascript",
    "typescript",
    "react",
    "next.js",
    "python",
    "java",
    "portfolio",
    "blockchain portfolio",
    "web3 portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Bhupinder Singh - Blockchain Engineer & AI Researcher",
    description:
      "Blockchain Engineer & Generative AI Student at CGC University, Jhanjeri. Specializing in Web3, Smart Contracts, DeFi, and Cybersecurity. Building decentralized solutions for real-world problems.",
    url: "https://rumanasaab.me/",
    siteName: "rumanasaab.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Bhupinder Singh — Blockchain Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupinder Singh — Blockchain Engineer & AI Researcher",
    description:
      "Blockchain Engineer & Generative AI Student at CGC University, Jhanjeri. Specializing in Web3, Smart Contracts, DeFi, and Cybersecurity. Building decentralized solutions for real-world problems.",
    creator: "rumanasaab",
    creatorId: "1243720976552144897",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* 3. syne.className will now work correctly */}
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}