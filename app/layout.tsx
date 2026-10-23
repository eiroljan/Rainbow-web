import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RainbowVPN — Secure, Fast & Private Internet",
  description:
    "RainbowVPN protects your privacy with military-grade encryption, 10,000+ servers in 100+ countries, and lightning-fast speeds. Browse freely and securely.",
  keywords: "VPN, secure internet, privacy, encryption, anonymous browsing",
  openGraph: {
    title: "RainbowVPN — Secure, Fast & Private Internet",
    description: "Military-grade encryption. Lightning-fast speeds. True digital freedom.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
