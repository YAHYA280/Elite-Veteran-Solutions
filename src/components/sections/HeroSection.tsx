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
      className="min-h-screen bg-slate-900 flex items-center justify-center relative pt-20 pb-20"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/BackgroundHero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title - Updated with red gradient */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              YOUR STRATEGIC PARTNER IN
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent leading-tight">
              GOVERNMENT CONTRACTING
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl text-slate-200 max-w-5xl mx-auto leading-relaxed">
              Elite Veteran Solutions combines military precision with
              cutting-edge technology to deliver exceptional results in federal
              contracting and cybersecurity.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              <div className="flex items-center bg-slate-800 border border-slate-600 rounded-full px-4 py-3 text-slate-200">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="font-medium">
                  Government Contracting Expertise
                </span>
              </div>

              <div className="flex items-center bg-slate-800 border border-slate-600 rounded-full px-4 py-3 text-slate-200">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="font-medium">24/7 Support & Monitoring</span>
              </div>
              <div className="flex items-center bg-slate-800 border border-slate-600 rounded-full px-4 py-3 text-slate-200">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
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
                onClick={() => scrollToSection("#services")}
                variant="outline"
                className="border-slate-400 text-slate-200 hover:bg-slate-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Stats Section - Enhanced with red accent color */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-8 bg-slate-800/90 backdrop-blur-sm border border-slate-500/50 rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/30 border border-red-400/30 rounded-2xl flex items-center justify-center shadow-xl">
                    <img
                      src="/HeroSectionIcons/YearsOfExcellence.png"
                      alt="Years of Excellence"
                      className="w-12 h-12 drop-shadow-lg"
                      style={{
                        filter: "brightness(1.2) contrast(1.3) saturate(1.2)",
                      }}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  15+
                </div>
                <div className="text-base text-slate-200 font-semibold">
                  Years of Excellence
                </div>
              </div>

              <div className="text-center p-8 bg-slate-800/90 backdrop-blur-sm border border-slate-500/50 rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/30 border border-green-400/30 rounded-2xl flex items-center justify-center shadow-xl">
                    <img
                      src="/HeroSectionIcons/contract.png"
                      alt="Contracts Secured"
                      className="w-12 h-12 drop-shadow-lg"
                      style={{
                        filter: "brightness(1.2) contrast(1.3) saturate(1.2)",
                      }}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  200+
                </div>
                <div className="text-base text-slate-200 font-semibold">
                  Contracts Secured
                </div>
              </div>

              <div className="text-center p-8 bg-slate-800/90 backdrop-blur-sm border border-slate-500/50 rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-xl">
                    <img
                      src="/HeroSectionIcons/Succes.png"
                      alt="Success Rate"
                      className="w-12 h-12 drop-shadow-lg"
                      style={{
                        filter: "brightness(1.2) contrast(1.3) saturate(1.2)",
                      }}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  98%
                </div>
                <div className="text-base text-slate-200 font-semibold">
                  Success Rate
                </div>
              </div>

              <div className="text-center p-8 bg-slate-800/90 backdrop-blur-sm border border-slate-500/50 rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/30 border border-purple-400/30 rounded-2xl flex items-center justify-center shadow-xl">
                    <img
                      src="/HeroSectionIcons/team.png"
                      alt="Expert Team"
                      className="w-12 h-12 drop-shadow-lg"
                      style={{
                        filter: "brightness(1.2) contrast(1.3) saturate(1.2)",
                      }}
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  25+
                </div>
                <div className="text-base text-slate-200 font-semibold">
                  Expert Team
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Updated with larger SBA Logo */}
          <div>
            <p className="text-slate-400 text-sm mb-6 font-medium">
              Trusted by Federal Agencies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center space-x-3 bg-slate-800 border border-slate-600 rounded-lg px-6 py-4">
                <div className="w-16 h-10 flex items-center justify-center">
                  <img
                    src="/SbaLogo.png"
                    alt="SBA Logo"
                    className="w-14 h-8 object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">VOSB</div>
                  <div className="text-sm text-slate-400">Certified</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-slate-800 border border-slate-600 rounded-lg px-6 py-4">
                <div className="w-16 h-10 flex items-center justify-center">
                  <img
                    src="/SbaLogo.png"
                    alt="SBA Logo"
                    className="w-14 h-8 object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">SDVOSB</div>
                  <div className="text-sm text-slate-400">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact - Desktop Only - Updated with red color */}
      <div className="absolute top-1/2 right-8 hidden xl:flex flex-col space-y-3 transform -translate-y-1/2">
        <a
          href="tel:888-747-9909"
          className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="mailto:info@elitevetsolutions.com"
          className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          title="Email Us"
          style={{ backgroundColor: "#d51e1e" }}
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
