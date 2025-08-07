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
      {/* Top Contact Bar - Moved from Navbar */}
      <div className="bg-gray-800 text-gray-300 py-3 text-sm border-b border-gray-700">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 text-xs sm:text-sm">
              <a
                href="tel:888-747-9909"
                className="flex items-center hover:text-orange-400 transition-colors group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                888-747-9909
              </a>
              <a
                href="mailto:info@elitevetsolutions.com"
                className="flex items-center hover:text-orange-400 transition-colors group"
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

              {/* Social Links */}
              <div className="hidden sm:flex items-center space-x-3">
                {[
                  // Twitter
                  <svg
                    key="twitter"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>,
                  // LinkedIn
                  <svg
                    key="linkedin"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>,
                ].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-orange-400 transition-colors transform hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
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
                  <p className="text-sm text-orange-400 font-semibold">
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

              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-8 lg:col-span-3">
              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-orange-400">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-orange-400">
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-orange-400">
                  Get In Touch
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="tel:888-747-9909"
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        888-747-9909
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="mailto:info@elitevetsolutions.com"
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        info@elitevetsolutions.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
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
                {/* SBA Logos */}
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-medium">VETERAN-OWNED</p>
                    <p className="text-gray-400">CERTIFIED</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SBA</span>
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
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
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
                <span className="text-orange-400 ml-1">
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
