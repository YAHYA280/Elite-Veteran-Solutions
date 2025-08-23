"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

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
    ],
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/Logo.png"
                alt="Elite Veteran Solutions Logo"
                width={150}
                height={80}
                className="rounded-lg"
              />
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Elite Veteran Solutions combines proven military precision and
              innovative thinking to deliver unparalleled results in the federal
              marketplace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 lg:col-span-3">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-600">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-600">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-600">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="tel:888-747-9909"
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300 text-sm"
                    >
                      888-747-9909
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="mailto:info@elitevetsolutions.com"
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300 text-sm"
                    >
                      info@elitevetsolutions.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      San Antonio, Texas
                      <br />
                      Serving clients nationwide
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              {/* SBA Certifications */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-2">
                    <Image
                      src="/SbaLogo.png"
                      alt="SBA Logo"
                      width={56}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-medium">VETERAN-OWNED</p>
                    <p className="text-gray-400">CERTIFIED</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-2">
                    <Image
                      src="/SbaLogo.png"
                      alt="SBA Logo"
                      width={56}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-medium">SERVICE-DISABLED</p>
                    <p className="text-gray-400">VETERAN-OWNED</p>
                  </div>
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
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 Elite Veteran Solutions | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
