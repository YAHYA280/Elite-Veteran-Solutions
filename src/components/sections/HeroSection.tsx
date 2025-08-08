"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Shield,
  Target,
  Users,
  CheckCircle,
  Award,
  Phone,
  Mail,
} from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center relative pt-20 pb-20"
      style={{ minHeight: "100vh" }}
    >
      {/* Red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-red-800"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-red-400 rounded-full animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-bounce animation-delay-700"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Status Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Star className="w-5 h-5 text-red-400 mr-3" />
              <span className="text-red-300 font-medium text-sm">
                Veteran-Owned Excellence Since 2009
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              YOUR STRATEGIC PARTNER IN
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent leading-tight animate-red-glow">
              GOVERNMENT CONTRACTING
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
              Elite Veteran Solutions combines military precision with
              cutting-edge technology to deliver exceptional results in federal
              contracting and cybersecurity.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              <div className="flex items-center bg-black/60 border border-red-800 rounded-full px-4 py-3 text-gray-200 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-red-400" />
                <span className="font-medium">
                  Government Contracting Expertise
                </span>
              </div>
              <div className="flex items-center bg-black/60 border border-red-800 rounded-full px-4 py-3 text-gray-200 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-red-400" />
                <span className="font-medium">Military-Grade Security</span>
              </div>
              <div className="flex items-center bg-black/60 border border-red-800 rounded-full px-4 py-3 text-gray-200 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-red-400" />
                <span className="font-medium">24/7 Support & Monitoring</span>
              </div>
              <div className="flex items-center bg-black/60 border border-red-800 rounded-full px-4 py-3 text-gray-200 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-red-400" />
                <span className="font-medium">
                  Rapid Deployment Capabilities
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#services")}
                variant="outline"
                className="border-red-400 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-black/60 border border-red-800 rounded-xl backdrop-blur-sm hover:border-red-600 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-red-900/50 rounded-xl flex items-center justify-center">
                    <Star className="w-7 h-7 text-red-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-gray-400 font-medium">
                  Years of Excellence
                </div>
              </div>

              <div className="text-center p-6 bg-black/60 border border-red-800 rounded-xl backdrop-blur-sm hover:border-red-600 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-red-900/50 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-red-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-sm text-gray-400 font-medium">
                  Contracts Secured
                </div>
              </div>

              <div className="text-center p-6 bg-black/60 border border-red-800 rounded-xl backdrop-blur-sm hover:border-red-600 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-red-900/50 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-red-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-gray-400 font-medium">
                  Success Rate
                </div>
              </div>

              <div className="text-center p-6 bg-black/60 border border-red-800 rounded-xl backdrop-blur-sm hover:border-red-600 transition-all">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-red-900/50 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-red-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-sm text-gray-400 font-medium">
                  Expert Team
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div>
            <p className="text-gray-400 text-sm mb-6 font-medium">
              Trusted by Federal Agencies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center space-x-3 bg-black/60 border border-red-800 rounded-lg px-4 py-3 backdrop-blur-sm">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SBA</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">VOSB</div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-black/60 border border-red-800 rounded-lg px-4 py-3 backdrop-blur-sm">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SBA</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">SDVOSB</div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-black/60 border border-red-800 rounded-lg px-4 py-3 backdrop-blur-sm">
                <Award className="w-6 h-6 text-red-400" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">
                    ISO 27001
                  </div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="flex flex-col items-center cursor-pointer group animate-bounce"
          onClick={() => scrollToSection("#about")}
        >
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Scroll to explore
          </p>
        </div>
      </div>

      {/* Quick Contact - Desktop Only */}
      <div className="absolute top-1/2 right-8 hidden xl:flex flex-col space-y-3 transform -translate-y-1/2">
        <a
          href="tel:888-747-9909"
          className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-red-500/25"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="mailto:info@elitevetsolutions.com"
          className="w-12 h-12 bg-red-800 hover:bg-red-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-red-500/25"
          title="Email Us"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
