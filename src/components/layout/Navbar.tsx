"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  Sun,
  Moon,
  Download,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

// Create a safe theme hook that doesn't throw errors
const useSafeTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme, mounted };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useSafeTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#faq", label: "FAQ" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <header className="sticky inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center bg-white/90 backdrop-blur-3xl shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="shrink">
              <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="h-4 w-16 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {/* Main Navigation */}
      <header
        className={`sticky inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="shrink">
              <button
                onClick={() => scrollToSection("#home")}
                className="flex items-center group"
              >
                {/* Use a fallback logo or text if images don't exist */}
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                      Elite Veteran
                    </h1>
                    <p className="text-xs text-orange-600 font-semibold">
                      SOLUTIONS
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="menu lg:flex items-center justify-center hidden relative mx-auto grow">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="menu-item text-gray-700 dark:text-slate-300 mx-2 transition-all duration-300 hover:text-orange-600 [&.active]:text-orange-600"
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Right Side Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-slate-300 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:inline-flex py-1.5 px-6 items-center gap-2 rounded-full text-base text-white bg-orange-600 hover:bg-orange-700 transition-all duration-500"
              >
                <Download className="h-4 w-4 fill-white/40" />
                <span>Get Quote</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-700 dark:text-slate-300 hover:text-orange-600"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="pb-4 border-b border-gray-200 dark:border-slate-700 space-y-3">
                <a
                  href="tel:888-747-9909"
                  className="flex items-center text-gray-600 dark:text-slate-300 hover:text-orange-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  888-747-9909
                </a>
                <a
                  href="mailto:info@elitevetsolutions.com"
                  className="flex items-center text-gray-600 dark:text-slate-300 hover:text-orange-600 transition-colors"
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
                  className="block w-full text-left px-4 py-3 text-gray-600 dark:text-slate-300 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
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
      </header>
    </>
  );
};

export default Navbar;
