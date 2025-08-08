"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Globe,
  Shield,
  MoveRight,
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
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    socialMedia: [
      {
        name: "Facebook",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        ),
      },
      {
        name: "Instagram",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.599-1.137c.463.602 1.174.984 1.974.984.8 0 1.511-.382 1.974-.984l1.599 1.137c-.757.937-1.908 1.533-3.205 1.533zm6.756-1.533c-.757.937-1.908 1.533-3.205 1.533s-2.448-.596-3.205-1.533l1.599-1.137c.463.602 1.174.984 1.974.984.8 0 1.511-.382 1.974-.984l1.599 1.137z" />
          </svg>
        ),
      },
      {
        name: "Twitter",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
    ],
    legalPress: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Presskit", href: "#" },
    ],
  };

  return (
    <footer className="bg-background dark:bg-slate-900 text-foreground dark:text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full"></div>
      </div>

      <div className="border-y border-default-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Company Info */}
            <div className="xl:col-span-2 md:col-span-3">
              <div>
                <button onClick={() => scrollToSection("#home")}>
                  <Image
                    src="/Logo_white.png"
                    alt="Elite Veteran Solutions Logo"
                    width={160}
                    height={64}
                    className="h-10 dark:flex hidden"
                  />
                  <Image
                    src="/logo-dark.png"
                    alt="Elite Veteran Solutions Logo"
                    width={160}
                    height={64}
                    className="h-10 flex dark:hidden"
                  />
                </button>
                <p className="text-base font-medium text-default-800 dark:text-slate-300 mt-6">
                  Integer auctor aliquet martor, sed lorem malesuada eros
                  blandit eget. Proin lacinia mortoc id odio vestibulum.
                </p>

                {/* Newsletter Signup */}
                <form className="space-y-2 mt-6">
                  <div className="relative">
                    <Input
                      type="email"
                      id="subscribe"
                      className="py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 dark:placeholder:text-slate-400 text-default-950 dark:text-white rounded-lg bg-default-100 dark:bg-slate-800 border-default-200 dark:border-slate-600 focus:ring-0 focus:border-primary"
                      placeholder="Type Your Email"
                      name="email"
                    />
                    <Button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-white"
                    >
                      <MoveRight className="h-6 w-6" />
                    </Button>
                  </div>
                </form>

                {/* Certifications Badges */}
                <div className="mt-6">
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
              </div>
            </div>

            {/* Quick Links */}
            <div className="">
              <ul className="flex flex-col gap-3">
                <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 dark:text-slate-200 mb-2">
                  Company
                </h5>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-base text-default-700 dark:text-slate-300 hover:text-primary transition-all"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="">
              <ul className="flex flex-col gap-3">
                <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 dark:text-slate-200 mb-2">
                  Social Media
                </h5>
                <ul className="space-y-3">
                  {footerLinks.socialMedia.map((social, index) => (
                    <li key={index} className="flex items-center gap-5 group">
                      <a
                        href="#"
                        className="h-10 w-10 inline-flex items-center justify-center border border-default-300 dark:border-slate-600 text-default-800 dark:text-slate-300 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                      >
                        {social.icon}
                      </a>
                      <h5 className="text-base font-medium text-default-800 dark:text-slate-300">
                        {social.name}
                      </h5>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>

            {/* Legal & Press */}
            <div className="">
              <ul className="flex flex-col gap-3">
                <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 dark:text-slate-200 mb-2">
                  Legal & Press
                </h5>
                {footerLinks.legalPress.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-base text-default-700 dark:text-slate-300 hover:text-primary transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SBA Certifications Display */}
      <div className="border-b border-default-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SBA</span>
                </div>
                <div className="text-xs">
                  <p className="text-default-950 dark:text-white font-medium">
                    VETERAN-OWNED
                  </p>
                  <p className="text-default-600 dark:text-slate-400">
                    SMALL BUSINESS
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SBA</span>
                </div>
                <div className="text-xs">
                  <p className="text-default-950 dark:text-white font-medium">
                    SERVICE-DISABLED
                  </p>
                  <p className="text-default-600 dark:text-slate-400">
                    VETERAN-OWNED
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:888-747-9909"
                className="flex items-center text-default-700 dark:text-slate-300 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                888-747-9909
              </a>
              <a
                href="mailto:info@elitevetsolutions.com"
                className="flex items-center text-default-700 dark:text-slate-300 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@elitevetsolutions.com
              </a>
              <div className="flex items-center text-default-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 mr-2" />
                San Antonio, Texas
              </div>
            </div>

            {/* Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-full md:justify-between text-center md:text-start">
          <p className="text-base font-medium text-default-800 dark:text-slate-300">
            <script
              dangerouslySetInnerHTML={{
                __html: "document.write(new Date().getFullYear())",
              }}
            />
            © Elite Veteran Solutions -{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Design crafted 🙂 by Yahya
            </a>
          </p>
          <p className="text-base font-medium text-default-800 dark:text-slate-300">
            <a href="#" className="hover:text-primary transition-colors">
              Terms Conditions & Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
