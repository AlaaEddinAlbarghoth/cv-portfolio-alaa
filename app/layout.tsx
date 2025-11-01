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
  title: {
    default: siteData.meta.seoTitle,
    template: `%s | ${siteData.meta.seoTitle}`
  },
  description: siteData.meta.seoDescription,
  keywords: [
    "Android Developer", 
    "Kotlin", 
    "Jetpack Compose", 
    "KMP", 
    "Mobile Development", 
    "Clean Architecture", 
    "CI/CD",
    "Senior Android Engineer",
    "Mobile Apps",
    "Kotlin Coroutines",
    "Hilt",
    "ARCore"
  ],
  authors: [{ name: siteData.personal.name }],
  creator: siteData.personal.name,
  publisher: siteData.personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alaaalbarghoth.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alaaalbarghoth.com',
    title: siteData.meta.seoTitle,
    description: siteData.meta.seoDescription,
    siteName: siteData.meta.seoTitle,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteData.personal.name} - ${siteData.personal.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@alaaeddinalb',
    creator: '@alaaeddinalb',
    title: siteData.meta.seoTitle,
    description: siteData.meta.seoDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  category: 'technology',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark light" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": siteData.personal.name,
              "jobTitle": siteData.personal.title,
              "description": siteData.personal.summary,
              "url": "https://alaaalbarghoth.com",
              "email": siteData.personal.email,
              "telephone": siteData.personal.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Istanbul",
                "addressCountry": "Turkey"
              },
              "sameAs": [
                siteData.personal.github,
                siteData.personal.linkedin
              ],
              "knowsAbout": [
                "Android Development",
                "Kotlin",
                "Jetpack Compose",
                "Clean Architecture",
                "CI/CD"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Istanbul University"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "Yarmouk Private University"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
