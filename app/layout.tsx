import type { Metadata, Viewport } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Akango — Learn Twi, one small lesson at a time",
  description:
    "Akango is a gamified Twi learning app built in Ghana. Six units, 40+ lessons, 130+ exercises, proverbs and idioms, translation, and text-to-speech.",
  keywords: [
    "Akango",
    "learn Twi",
    "Twi app",
    "Akan language",
    "Ghanaian languages",
    "language learning",
  ],
  openGraph: {
    title: "Akango — Learn Twi, one small lesson at a time",
    description:
      "A gamified Twi learning app built in Ghana. Lessons, proverbs, translation, and text-to-speech.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akango — Learn Twi, one small lesson at a time",
    description:
      "A gamified Twi learning app built in Ghana. Lessons, proverbs, translation, and text-to-speech.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090914",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
