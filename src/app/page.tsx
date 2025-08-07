import { Metadata } from "next";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Dynamic imports for better performance
const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  loading: () => <div className="h-20 bg-navy-950" />,
});

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  loading: () => <LoadingSpinner />,
});

const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  {
    loading: () => <div className="h-96 bg-gray-50" />,
  }
);

const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
  {
    loading: () => <div className="h-96 bg-white" />,
  }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  {
    loading: () => <div className="h-96 bg-gray-50" />,
  }
);

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => <div className="h-32 bg-navy-950" />,
});

export const metadata: Metadata = {
  title:
    "Elite Veteran Solutions | Strategic Partner in Government Contracting",
  description:
    "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects. Certified Veteran-Owned Small Business (VOSB) and Service-Disabled Veteran-Owned Small Business (SDVOSB).",
  keywords:
    "government contracting, veteran owned business, VOSB, SDVOSB, military contracting, federal contracts, cybersecurity, logistics, IT services",
  authors: [{ name: "Elite Veteran Solutions" }],
  openGraph: {
    title:
      "Elite Veteran Solutions | Strategic Partner in Government Contracting",
    description:
      "Elite Veteran Solutions brings military discipline and government contracting expertise to your projects.",
    url: "https://elitevetsolutions.com",
    siteName: "Elite Veteran Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Veteran Solutions",
    description: "Strategic Partner in Government Contracting",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
