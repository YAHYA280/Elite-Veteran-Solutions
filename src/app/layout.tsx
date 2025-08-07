import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitevetsolutions.com"),
  title: {
    default:
      "Elite Veteran Solutions | Strategic Partner in Government Contracting",
    template: "%s | Elite Veteran Solutions",
  },
  description:
    "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. Certified Veteran-Owned Small Business (VOSB) and Service-Disabled Veteran-Owned Small Business (SDVOSB) offering cybersecurity, IT services, logistics, and strategic consulting.",
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
    "government procurement",
    "federal marketplace",
    "SBA certified",
    "defense contracting",
    "veteran-owned small business",
    "service-disabled veteran-owned",
    "government technology solutions",
    "federal IT support",
    "military precision",
    "government compliance",
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
      "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. VOSB & SDVOSB certified with 15+ years of excellence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Veteran Solutions - Strategic Partner in Government Contracting",
      },
      {
        url: "/og-logo.png",
        width: 800,
        height: 800,
        alt: "Elite Veteran Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Veteran Solutions",
    description:
      "Strategic Partner in Government Contracting | VOSB & SDVOSB Certified",
    images: ["/twitter-card.jpg"],
    creator: "@elitevetsolutions",
    site: "@elitevetsolutions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      "msvalidate.01": "your-bing-verification",
      "facebook-domain-verification": "your-facebook-verification",
    },
  },
  alternates: {
    canonical: "https://elitevetsolutions.com",
    languages: {
      "en-US": "https://elitevetsolutions.com",
    },
  },
  category: "Government Services",
  classification: "Business",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and Browser Configuration */}
        <meta
          name="theme-color"
          content="#1e1b4b"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#111827"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="dark light" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Performance and Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elite Veteran Solutions",
              alternateName: "EVS",
              url: "https://elitevetsolutions.com",
              logo: {
                "@type": "ImageObject",
                url: "https://elitevetsolutions.com/logo.png",
                width: 512,
                height: 512,
              },
              description:
                "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. Certified VOSB and SDVOSB.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4950 Woodstone DR APT 321",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78230-1199",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.4241",
                longitude: "-98.4936",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-888-747-9909",
                contactType: "customer service",
                email: "info@elitevetsolutions.com",
                areaServed: "US",
                availableLanguage: ["English"],
                hoursAvailable: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "10:00",
                    closes: "16:00",
                  },
                ],
              },
              sameAs: [
                "https://www.linkedin.com/company/elite-veteran-solutions",
                "https://twitter.com/elitevetsolutions",
                "https://www.facebook.com/elitevetsolutions",
                "https://www.youtube.com/@elitevetsolutions",
              ],
              foundingDate: "2009",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 25,
                maxValue: 50,
              },
              award: [
                "VOSB Certification - SBA Verified",
                "SDVOSB Certification - SBA Verified",
                "SBA 8(a) Program Certified",
                "ISO 27001:2013 Information Security Management",
              ],
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              knowsAbout: [
                "Government Contracting",
                "Cybersecurity",
                "Information Technology",
                "Logistics Management",
                "Strategic Consulting",
                "Federal Procurement",
                "Military Operations",
                "Defense Technology",
              ],
              slogan: "Service Beyond Expectations",
            }),
          }}
        />

        {/* Google Analytics (replace with your GA4 measurement ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* Microsoft Clarity (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white px-4 py-2 rounded-lg z-50 focus:z-[9999]"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen">
          {children}
        </div>

        {/* Error boundary fallback (handled by Next.js in production) */}
        <noscript>
          <div className="fixed inset-0 bg-gray-900 text-white flex items-center justify-center z-50">
            <div className="text-center p-8">
              <h1 className="text-2xl font-bold mb-4">JavaScript Required</h1>
              <p className="text-gray-300 mb-4">
                Please enable JavaScript in your browser to view this website.
              </p>
              <p className="text-sm text-gray-400">
                For assistance, call us at{" "}
                <a
                  href="tel:888-747-9909"
                  className="text-orange-400 underline"
                >
                  888-747-9909
                </a>
              </p>
            </div>
          </div>
        </noscript>

        {/* Emergency contact for accessibility */}
        <div className="sr-only">
          <h2>Emergency Contact Information</h2>
          <p>
            For urgent matters, please call Elite Veteran Solutions at{" "}
            <a href="tel:888-747-9909">888-747-9909</a> or email{" "}
            <a href="mailto:info@elitevetsolutions.com">
              info@elitevetsolutions.com
            </a>
          </p>
        </div>

        {/* Performance monitoring script (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic performance monitoring
              if ('performance' in window && 'observe' in window.PerformanceObserver.prototype) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                      console.log('CLS:', entry.value);
                    }
                  }
                });
                observer.observe({entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']});
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
