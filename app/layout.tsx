import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  INSTAGRAM_URL,
  PHONE_E164,
  EMAIL,
} from "@/lib/constants";
import CookieBanner from "@/components/ui/CookieBanner";

// „Plakat"-Typografie: Anton (Display), Hanken Grotesk (Body), JetBrains Mono (Labels)
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const HOME_TITLE = `Website auffrischen für 199 € in 48 h | ${SITE_NAME}`;

export const metadata: Metadata = {
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "JFN6j-BG43reeb6-x465OP5_dbQ0s3nEXWIvw8UdDPU",
  },
};

// Strukturierte Daten (JSON-LD): Organization, LocalBusiness, WebSite, Person.
// NAP-Daten konsistent mit dem Impressum.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-full.png`,
      description: SITE_DESCRIPTION,
      email: EMAIL,
      telephone: PHONE_E164,
      sameAs: [INSTAGRAM_URL],
      founder: { "@id": `${SITE_URL}/#georgios` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blumenstraße 12",
        postalCode: "42119",
        addressLocality: "Wuppertal",
        addressCountry: "DE",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      image: `${SITE_URL}/logo-full.png`,
      url: SITE_URL,
      telephone: PHONE_E164,
      email: EMAIL,
      priceRange: "€",
      areaServed: "DE",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blumenstraße 12",
        postalCode: "42119",
        addressLocality: "Wuppertal",
        addressCountry: "DE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#georgios`,
      name: "Georgios Apostolidis",
      jobTitle: "Gründer & Entwickler",
      url: SITE_URL,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${anton.variable} ${hanken.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
