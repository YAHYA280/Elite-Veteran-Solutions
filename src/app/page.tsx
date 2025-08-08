import { Metadata } from "next";
import dynamic from "next/dynamic";

// Optimized dynamic imports for better performance
const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  loading: () => (
    <div className="h-20 bg-background animate-pulse">
      <div className="h-20 bg-muted/30"></div>
    </div>
  ),
});

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse mx-auto mb-4"></div>
        <div className="h-8 bg-muted/30 rounded w-64 mx-auto mb-4 animate-pulse"></div>
        <div className="h-4 bg-muted/20 rounded w-48 mx-auto animate-pulse"></div>
      </div>
    </div>
  ),
});

const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  {
    loading: () => (
      <div className="h-96 bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 bg-muted/30 rounded w-48 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted/20 rounded w-32 mx-auto animate-pulse"></div>
        </div>
      </div>
    ),
  }
);

const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
  {
    loading: () => (
      <div className="h-96 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 bg-muted/30 rounded w-48 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted/20 rounded w-32 mx-auto animate-pulse"></div>
        </div>
      </div>
    ),
  }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  {
    loading: () => (
      <div className="h-96 bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 bg-muted/30 rounded w-48 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted/20 rounded w-32 mx-auto animate-pulse"></div>
        </div>
      </div>
    ),
  }
);

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => (
    <div className="h-64 bg-background border-t border-border animate-pulse">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-muted/30 rounded w-20"></div>
              <div className="h-3 bg-muted/20 rounded w-32"></div>
              <div className="h-3 bg-muted/20 rounded w-28"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
});

// Enhanced metadata with better SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://elitevetsolutions.com"),
  title: {
    default:
      "Elite Veteran Solutions | Strategic Partner in Government Contracting",
    template: "%s | Elite Veteran Solutions",
  },
  description:
    "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. Certified VOSB & SDVOSB offering cybersecurity, IT services, logistics, and strategic consulting for federal clients.",
  keywords: [
    "government contracting",
    "veteran owned business",
    "VOSB",
    "SDVOSB",
    "military contracting",
    "federal contracts",
    "cybersecurity solutions",
    "IT services",
    "logistics management",
    "strategic consulting",
    "government procurement",
    "federal marketplace",
    "SBA certified",
    "veteran-owned small business",
    "service-disabled veteran-owned",
    "government technology",
    "defense contracting",
    "federal IT support",
  ],
  authors: [
    {
      name: "Elite Veteran Solutions",
      url: "https://elitevetsolutions.com",
    },
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
      "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. Certified VOSB & SDVOSB with proven results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Veteran Solutions - Strategic Partner in Government Contracting",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Elite Veteran Solutions - VOSB & SDVOSB Certified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Veteran Solutions | Government Contracting Excellence",
    description:
      "Strategic Partner in Government Contracting | VOSB & SDVOSB Certified",
    images: ["/twitter-image.jpg"],
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://elitevetsolutions.com",
  },
  category: "Business Services",
};

// Enhanced viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Enhanced performance with proper loading states */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />

      {/* JSON-LD Structured Data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://elitevetsolutions.com/#organization",
                name: "Elite Veteran Solutions",
                url: "https://elitevetsolutions.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://elitevetsolutions.com/logo.png",
                  width: 512,
                  height: 512,
                },
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
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-888-747-9909",
                    contactType: "customer service",
                    email: "info@elitevetsolutions.com",
                    availableLanguage: ["English"],
                    areaServed: "US",
                  },
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-888-747-9909",
                    contactType: "emergency",
                    availableLanguage: ["English"],
                    areaServed: "US",
                  },
                ],
                sameAs: [
                  "https://www.linkedin.com/company/elite-veteran-solutions",
                  "https://twitter.com/elitevetsolutions",
                  "https://www.facebook.com/elitevetsolutions",
                  "https://www.youtube.com/@elitevetsolutions",
                ],
                foundingDate: "2009",
                numberOfEmployees: "25-50",
                award: [
                  "VOSB Certification",
                  "SDVOSB Certification",
                  "SBA 8(a) Program",
                  "ISO 27001",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://elitevetsolutions.com/#website",
                url: "https://elitevetsolutions.com",
                name: "Elite Veteran Solutions",
                description: "Strategic Partner in Government Contracting",
                publisher: {
                  "@id": "https://elitevetsolutions.com/#organization",
                },
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target:
                      "https://elitevetsolutions.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://elitevetsolutions.com/#services",
                name: "Government Contracting Services",
                provider: {
                  "@id": "https://elitevetsolutions.com/#organization",
                },
                serviceType: [
                  "Cybersecurity Solutions",
                  "IT Services",
                  "Logistics Management",
                  "Strategic Consulting",
                  "Government Contracting Support",
                  "Federal Compliance Services",
                ],
                description:
                  "Comprehensive government contracting services including cybersecurity, IT support, logistics management, and strategic consulting for federal clients.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Government Contracting Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Cybersecurity Solutions",
                        description:
                          "Comprehensive cybersecurity solutions for government and enterprise clients",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "IT Services",
                        description:
                          "Complete IT infrastructure management and support services",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Logistics Management",
                        description:
                          "Supply chain optimization and logistics management solutions",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Strategic Consulting",
                        description:
                          "Government contracting and business development consulting",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://elitevetsolutions.com/#localbusiness",
                name: "Elite Veteran Solutions",
                image: "https://elitevetsolutions.com/logo.png",
                telephone: "+1-888-747-9909",
                email: "info@elitevetsolutions.com",
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
                url: "https://elitevetsolutions.com",
                priceRange: "$",
                openingHoursSpecification: [
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
              {
                "@type": "BreadcrumbList",
                "@id": "https://elitevetsolutions.com/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://elitevetsolutions.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "About",
                    item: "https://elitevetsolutions.com#about",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Services",
                    item: "https://elitevetsolutions.com#services",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Contact",
                    item: "https://elitevetsolutions.com#contact",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </main>
  );
}
