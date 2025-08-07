import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elitevetsolutions.com"),
  title: {
    default:
      "Elite Veteran Solutions | Strategic Partner in Government Contracting",
    template: "%s | Elite Veteran Solutions",
  },
  description:
    "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. Certified Veteran-Owned Small Business (VOSB) and Service-Disabled Veteran-Owned Small Business (SDVOSB).",
  keywords: [
    "government contracting",
    "veteran owned business",
    "VOSB",
    "SDVOSB",
    "military contracting",
    "federal contracts",
    "cybersecurity",
    "logistics",
    "IT services",
    "strategic consulting",
  ],
  authors: [
    { name: "Elite Veteran Solutions", url: "https://elitevetsolutions.com" },
  ],
  creator: "Elite Veteran Solutions",
  publisher: "Elite Veteran Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitevetsolutions.com",
    siteName: "Elite Veteran Solutions",
    title:
      "Elite Veteran Solutions | Strategic Partner in Government Contracting",
    description:
      "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Veteran Solutions - Strategic Partner in Government Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Veteran Solutions",
    description: "Strategic Partner in Government Contracting",
    images: ["/og-image.jpg"],
    creator: "@elitevetsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elite Veteran Solutions",
              url: "https://elitevetsolutions.com",
              logo: "https://elitevetsolutions.com/logo.png",
              description:
                "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4950 Woodstone DR APT 321",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78230-1199",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-888-747-9909",
                contactType: "customer service",
                email: "info@elitevetsolutions.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/elite-veteran-solutions",
                "https://twitter.com/elitevetsolutions",
                "https://www.facebook.com/elitevetsolutions",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
