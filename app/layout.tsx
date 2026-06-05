import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import CookieBanner from "@/components/ui/CookieBanner";

// General Sans (display + body) — self-hosted for privacy & no layout shift
const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    { path: "./fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – Dein technischer Mitgründer auf Zeit`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} – Dein technischer Mitgründer auf Zeit`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Dein technischer Mitgründer auf Zeit`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${generalSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
