"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#contact", label: "CONTACT" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700"
            : "bg-slate-900/90 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center group cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="relative">
                <Image
                  src="/Logo_white.png"
                  alt="Elite Veteran Solutions Logo"
                  width={160}
                  height={64}
                  className="h-14 w-auto group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-slate-300 hover:text-orange-400 font-medium transition-all duration-300 py-2 group text-sm"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="pb-4 border-b border-slate-700 space-y-3">
                <a
                  href="tel:888-747-9909"
                  className="flex items-center text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  888-747-9909
                </a>
                <a
                  href="mailto:info@elitevetsolutions.com"
                  className="flex items-center text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3" />
                  info@elitevetsolutions.com
                </a>
              </div>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
