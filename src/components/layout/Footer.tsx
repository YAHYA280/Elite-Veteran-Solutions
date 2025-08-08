"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Globe,
  ExternalLink,
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
    {
      name: "YouTube",
      href: "https://youtube.com/@elitevetsolutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  // const certifications = [
  //   {
  //     title: "VOSB",
  //     subtitle: "Veteran-Owned Small Business",
  //     description: "SBA Certified",
  //   },
  //   {
  //     title: "SDVOSB",
  //     subtitle: "Service-Disabled Veteran-Owned",
  //     description: "SBA Certified",
  //   },
  //   {
  //     title: "ISO 27001",
  //     subtitle: "Information Security",
  //     description: "International Standard",
  //   },
  // ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-red-950/10 to-black"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Logo */}
              <div
                className="group cursor-pointer"
                onClick={() => scrollToSection("#home")}
              >
                <Image
                  src="/Logo_white.png"
                  alt="Elite Veteran Solutions Logo"
                  width={180}
                  height={72}
                  className="h-16 w-auto group-hover:scale-105 transition-transform duration-300 filter brightness-110"
                />
              </div>

              <div>
                <h3 className="text-red-400 font-bold text-lg mb-3 tracking-wide">
                  SERVICE BEYOND EXPECTATIONS
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Elite Veteran Solutions combines proven military precision and
                  innovative thinking to deliver unparalleled results in the
                  federal marketplace.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:888-747-9909"
                  className="flex items-center group text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold">888-747-9909</p>
                    <p className="text-xs text-gray-500">
                      24/7 Emergency Support
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@elitevetsolutions.com"
                  className="flex items-center group text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold">info@elitevetsolutions.com</p>
                    <p className="text-xs text-gray-500">
                      Response within 2-4 hours
                    </p>
                  </div>
                </a>

                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold">San Antonio, Texas</p>
                    <p className="text-xs text-gray-500">
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-800/30 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:border-red-500/50"
                    aria-label={social.name}
                  >
                    <div className="text-red-400 group-hover:text-white transition-colors duration-300">
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
                <h4 className="text-xl font-bold mb-8 text-white flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-3"></div>
                  Company
                </h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xl font-bold mb-8 text-white flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-3"></div>
                  Services
                </h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-bold mb-8 text-white flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-3"></div>
                  Get In Touch
                </h4>
                <ul className="space-y-4">
                  {footerLinks.contact.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        {/* <div className="border-t border-red-900/30">
          <div className="container-custom py-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our <span className="gradient-text">Certifications</span>
              </h3>
              <p className="text-gray-400">
                Trusted by federal agencies and recognized for excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-xl border border-red-800/30 rounded-3xl hover:border-red-500/50 transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/25">
                      {cert.title === "ISO 27001" ? (
                        <Shield className="w-8 h-8 text-white" />
                      ) : (
                        <span className="text-white text-xs font-bold">
                          SBA
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-1">
                      {cert.subtitle}
                    </p>
                    <p className="text-red-400 text-xs font-semibold">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="border-t border-red-900/30">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  Copyright © 2024 Elite Veteran Solutions. All Rights Reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Made with ❤️ by Yahya
                </p>
              </div>

              {/* Scroll to Top Button */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Globe className="w-4 h-4" />
                  <span className="gradient-text font-semibold">
                    Service Beyond Expectations
                  </span>
                </div>
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="icon"
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 rounded-xl"
                >
                  <ArrowUp className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Brand Strip */}
        <div className="border-t border-red-900/30 bg-gradient-to-r from-red-950/20 to-black">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
                    <span className="text-white text-xs font-bold">EVS</span>
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-bold">ELITE VETERAN</p>
                    <p className="text-red-400 font-semibold">SOLUTIONS</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <button className="hover:text-red-400 transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-red-400 transition-colors">
                  Terms of Service
                </button>
                <button className="hover:text-red-400 transition-colors">
                  Accessibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
