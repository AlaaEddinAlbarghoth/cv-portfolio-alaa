import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteData from '@/content/site.json';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteData.meta.seoTitle,
  description: siteData.meta.seoDescription,
  keywords: "Android Developer, Kotlin, Jetpack Compose, KMP, Mobile Development, Clean Architecture, CI/CD",
  authors: [{ name: siteData.personal.name }],
  creator: siteData.personal.name,
  openGraph: {
    type: 'website',
    title: siteData.meta.seoTitle,
    description: siteData.meta.seoDescription,
    siteName: siteData.meta.seoTitle,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.meta.seoTitle,
    description: siteData.meta.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
