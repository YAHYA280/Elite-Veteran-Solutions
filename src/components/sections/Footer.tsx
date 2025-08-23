"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Mission", href: "#about" },
      { label: "Our Values", href: "#about" },
      { label: "Certifications", href: "#about" },
    ],
    services: [
      { label: "Cybersecurity Solutions", href: "#services" },
      { label: "IT Services", href: "#services" },
      { label: "Logistics Management", href: "#services" },
      { label: "Strategic Consulting", href: "#services" },
    ],
    contact: [
      { label: "Contact Us", href: "#contact" },
      { label: "Get Quote", href: "#contact" },
      { label: "Support", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-gray-300 py-3 text-sm border-b border-gray-700">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 text-xs sm:text-sm">
              <a
                href="tel:888-747-9909"
                className="flex items-center hover:text-red-400 transition-colors group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                888-747-9909
              </a>
              <a
                href="mailto:info@elitevetsolutions.com"
                className="flex items-center hover:text-red-400 transition-colors group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                info@elitevetsolutions.com
              </a>
              <div className="hidden lg:flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                San Antonio, Texas
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded border border-green-600/30">
                  VOSB Certified
                </span>
                <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded border border-blue-600/30">
                  SDVOSB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="text-white font-bold">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L3 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-9-5z" />
                      <path
                        d="M12 7L8 9.5v3L12 15l4-2.5v-3L12 7z"
                        fill="#1e1b4b"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ELITE</h3>
                  <p className="text-sm text-red-400 font-semibold">
                    VETERAN SOLUTIONS
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                SERVICE BEYOND EXPECTATIONS
              </p>

              <p className="text-gray-400 text-sm mb-6">
                Elite Veteran Solutions combines proven military precision and
                innovative thinking to deliver unparalleled results in the
                federal marketplace.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-8 lg:col-span-3">
              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-red-400">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-red-400">
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-red-400">
                  Get In Touch
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="tel:888-747-9909"
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                      >
                        888-747-9909
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="mailto:info@elitevetsolutions.com"
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                      >
                        info@elitevetsolutions.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 text-sm">
                        4950 Woodstone DR APT 321
                        <br />
                        San Antonio, Texas 78230-1199
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SBA Certifications */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-8">
                {/* SBA Logos with actual images */}
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-2">
                    <img
                      src="/SbaLogo.png"
                      alt="SBA Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-medium">VETERAN-OWNED</p>
                    <p className="text-gray-400">CERTIFIED</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-2">
                    <img
                      src="/SbaLogo.png"
                      alt="SBA Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-medium">SERVICE-DISABLED</p>
                    <p className="text-gray-400">VETERAN-OWNED</p>
                  </div>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="icon"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Copyright © 2024 Elite Veteran Solutions | All Rights Reserved |
                <span className="text-red-400 ml-1">
                  Service Beyond Expectations
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
