import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jasa Towing Moge & Harley Spesialis Semarang",
  description: "Layanan towing dan evakuasi moge Harley Davidson profesional di Semarang. Armada flatbed hidrolik khusus dengan standar operasional aman, anti-gores, dan siap 24 Jam.",
  keywords: ["Towing moge aman Semarang", "Towing Harley Davidson Semarang", "Sewa towing moge spesialis", "Truk towing flatbed Semarang", "Evakuasi moge mogok Semarang"],
  authors: [{ name: "Storing Towing Semarang" }],
  openGraph: {
    title: "Jasa Towing Moge & Harley Spesialis Semarang",
    description: "Layanan towing dan evakuasi moge Harley Davidson profesional di Semarang.",
    url: "https://domainmu.com",
    siteName: "Storing Towing Semarang",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Storing Towing Semarang - Spesialis Moge",
  "image": "https://domainmu.com/images/hero_bg.png",
  "@id": "https://domainmu.com/#official",
  "url": "https://domainmu.com",
  "telephone": "+6285225234870",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Alamat Dummy",
    "addressLocality": "Semarang",
    "addressRegion": "Jawa Tengah",
    "postalCode": "50000",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.9932, 
    "longitude": 110.4203
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Semarang" },
    { "@type": "AdministrativeArea", "name": "Banyumanik" },
    { "@type": "AdministrativeArea", "name": "Tembalang" }
  ]
};

import FloatingWA from "@/components/FloatingWA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        <Analytics />
        {children}
        <FloatingWA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
