"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ExternalLink,
  Globe,
  Shield,
} from "lucide-react";
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
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/elite-veteran-solutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/elitevetsolutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/elitevetsolutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/Logo_white.png"
                alt="Elite Veteran Solutions Logo"
                width={160}
                height={64}
                className="h-16 w-auto rounded-lg"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-orange-400 font-bold text-sm mb-2">
                SERVICE BEYOND EXPECTATIONS
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Elite Veteran Solutions combines proven military precision and
                innovative thinking to deliver unparalleled results in the
                federal marketplace.
              </p>
            </div>

            {/* Certifications Badges */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center space-x-2 bg-blue-600/20 border border-blue-600/30 rounded-lg px-3 py-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium text-blue-300">
                    VOSB
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-600/20 border border-blue-600/30 rounded-lg px-3 py-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium text-blue-300">
                    SDVOSB
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-lg px-3 py-2">
                  <Globe className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-medium text-green-300">
                    ISO 27001
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 group border border-slate-700 hover:border-orange-500"
                  aria-label={social.name}
                >
                  <div className="text-slate-300 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 lg:col-span-3">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400 flex items-center">
                <div className="w-1 h-6 bg-orange-500 rounded-full mr-3"></div>
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center group"
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
              <h4 className="text-lg font-semibold mb-6 text-orange-400 flex items-center">
                <div className="w-1 h-6 bg-orange-500 rounded-full mr-3"></div>
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-orange-400 flex items-center">
                <div className="w-1 h-6 bg-orange-500 rounded-full mr-3"></div>
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:888-747-9909"
                    className="flex items-start space-x-3 text-slate-300 hover:text-orange-400 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:border-orange-500 transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">888-747-9909</p>
                      <p className="text-xs text-slate-400">
                        24/7 Emergency Support
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@elitevetsolutions.com"
                    className="flex items-start space-x-3 text-slate-300 hover:text-orange-400 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:border-orange-500 transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">info@elitevetsolutions.com</p>
                      <p className="text-xs text-slate-400">
                        Response within 2-4 hours
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-slate-300">
                  <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-medium">San Antonio, Texas</p>
                    <p className="text-xs text-slate-400">
                      Serving clients nationwide
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* SBA Certifications Display */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SBA</span>
                </div>
                <div className="text-xs">
                  <p className="text-white font-medium">VETERAN-OWNED</p>
                  <p className="text-slate-400">SMALL BUSINESS</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SBA</span>
                </div>
                <div className="text-xs">
                  <p className="text-white font-medium">SERVICE-DISABLED</p>
                  <p className="text-slate-400">VETERAN-OWNED</p>
                </div>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm">
            <p className="text-slate-400">
              Copyright © 2024 Elite Veteran Solutions. All Rights Reserved.
              Made by Yahya :p
            </p>
            <div className="flex items-center space-x-6 text-xs text-slate-500">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <span className="text-orange-400 font-medium">
                Service Beyond Expectations
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
