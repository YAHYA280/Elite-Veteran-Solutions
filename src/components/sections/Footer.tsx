"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Shield,
  Star,
  Award,
  ExternalLink,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

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
      { label: "Leadership Team", href: "#about" },
    ],
    services: [
      { label: "Cybersecurity Solutions", href: "#services" },
      { label: "IT Services & Support", href: "#services" },
      { label: "Logistics Management", href: "#services" },
      { label: "Strategic Consulting", href: "#services" },
      { label: "Government Contracting", href: "#services" },
    ],
    resources: [
      { label: "Case Studies", href: "#" },
      { label: "White Papers", href: "#" },
      { label: "Industry Insights", href: "#" },
      { label: "News & Updates", href: "#" },
      { label: "Career Opportunities", href: "#" },
    ],
    support: [
      { label: "Contact Support", href: "#contact" },
      { label: "Emergency Services", href: "#contact" },
      { label: "Client Portal", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Training Resources", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/elite-veteran-solutions",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/elitevetsolutions",
      color: "hover:text-sky-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/elitevetsolutions",
      color: "hover:text-blue-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@elitevetsolutions",
      color: "hover:text-red-500",
    },
  ];

  const certifications = [
    {
      name: "VOSB",
      fullName: "Veteran-Owned Small Business",
      status: "Certified",
      color: "bg-green-600",
    },
    {
      name: "SDVOSB",
      fullName: "Service-Disabled Veteran-Owned Small Business",
      status: "Certified",
      color: "bg-blue-600",
    },
    {
      name: "8(a)",
      fullName: "SBA 8(a) Program",
      status: "Certified",
      color: "bg-purple-600",
    },
    {
      name: "ISO 27001",
      fullName: "Information Security Management",
      status: "Certified",
      color: "bg-orange-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4 mb-8 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-orange-500/25 transition-all duration-300">
                    <Shield className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-orange-400 transition-colors">
                    ELITE
                  </h3>
                  <p className="text-sm text-orange-400 font-semibold tracking-wide">
                    VETERAN SOLUTIONS
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    SERVICE BEYOND EXPECTATIONS
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Elite Veteran Solutions combines proven military precision and
                innovative thinking to deliver unparalleled results in the
                federal marketplace. Your trusted partner in government
                contracting excellence.
              </p>

              {/* Enhanced Social Media */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 ${social.color} border border-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:border-orange-500/50 group`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="space-y-3">
                <a
                  href="tel:888-747-9909"
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-600/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">888-747-9909</span>
                </a>
                <a
                  href="mailto:info@elitevetsolutions.com"
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-600/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">
                    info@elitevetsolutions.com
                  </span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-4 gap-8 lg:col-span-4">
              {/* Company */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                  <Award className="w-5 h-5 text-orange-400 mr-2" />
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                  <Shield className="w-5 h-5 text-orange-400 mr-2" />
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                  <Globe className="w-5 h-5 text-orange-400 mr-2" />
                  Resources
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-2" />
                  Support
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Emergency Contact */}
                <div className="mt-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                  <p className="text-red-400 text-xs font-semibold mb-1">
                    24/7 EMERGENCY
                  </p>
                  <a
                    href="tel:888-747-9909"
                    className="text-white font-bold hover:text-red-400 transition-colors"
                  >
                    888-747-9909
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-gray-800 bg-gray-950/50">
          <div className="container-custom py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div>
                <h5 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 text-orange-400 mr-2" />
                  Our Certifications & Credentials
                </h5>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <div
                        className={`w-12 h-10 ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-white text-xs font-bold">
                          {cert.name}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          {cert.fullName}
                        </p>
                        <p className="text-green-400 text-xs">{cert.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll to Top Button */}
              <div className="flex items-center space-x-4">
                <div className="text-right hidden lg:block">
                  <p className="text-orange-400 text-sm font-semibold">
                    Ready to Get Started?
                  </p>
                  <p className="text-gray-400 text-xs">
                    Contact us for a free consultation
                  </p>
                </div>
                <Button
                  onClick={scrollToTop}
                  className="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 group"
                >
                  <ArrowUp className="h-6 w-6 group-hover:translate-y-[-2px] transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  Copyright © 2024 Elite Veteran Solutions. All Rights Reserved.
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-orange-400 text-sm font-semibold">
                  Service Beyond Expectations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
