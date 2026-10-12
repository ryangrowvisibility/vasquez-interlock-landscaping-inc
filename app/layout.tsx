import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vasquez Interlock & Landscaping | Interlock, Flagstone & Patios in Kitchener, Waterloo & Cambridge",
  description:
    "Custom interlock driveways, walkways, flagstone and stone patios, sod and full backyard makeovers across Kitchener, Waterloo and Cambridge. 5.0 stars from 13 Google reviews. Free quotes from owner Julio: (647) 706-2321.",
  openGraph: {
    title: "Vasquez Interlock & Landscaping | Kitchener-Waterloo-Cambridge",
    description: "Interlock, flagstone, patios and backyard makeovers. 5.0 stars on Google. Call Julio at (647) 706-2321 for a free quote.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSans.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
