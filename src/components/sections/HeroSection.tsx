"use client";

import React, { useEffect, useRef } from "react";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced entrance animations with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Animate elements on load
    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, index * 150);
    });

    // Stats counter animation
    const animateCounters = () => {
      const counters = statsRef.current?.querySelectorAll(".counter-value");
      counters?.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const suffix = counter.getAttribute("data-suffix") || "";
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current).toString() + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString() + suffix;
          }
        };

        setTimeout(updateCounter, 800);
      });
    };

    // Trigger counter animation after component mounts
    setTimeout(animateCounters, 1000);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80; // Account for navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const stats = [
    {
      icon: Star,
      label: "Years of Excellence",
      value: 15,
      suffix: "+",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
    },
    {
      icon: Shield,
      label: "Contracts Secured",
      value: 200,
      suffix: "+",
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
    },
    {
      icon: Target,
      label: "Success Rate",
      value: 98,
      suffix: "%",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: Users,
      label: "Expert Team",
      value: 25,
      suffix: "+",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  const capabilities = [
    "Government Contracting Expertise",
    "Military-Grade Security",
    "24/7 Support & Monitoring",
    "Rapid Deployment Capabilities",
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center relative overflow-hidden pt-20 pb-20"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: "float 20s ease-in-out infinite",
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-4 h-4 bg-orange-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500/15 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-green-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-500/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Status Badge */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-8">
              <div className="inline-flex items-center bg-orange-600/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 group hover:bg-orange-600/20 hover:border-orange-500/30 transition-all duration-300">
                <Star className="w-5 h-5 text-orange-400 mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-orange-300 font-semibold text-sm">
                  Veteran-Owned Excellence Since 2009
                </span>
                <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Main Title */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                YOUR STRATEGIC PARTNER IN
                <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  GOVERNMENT CONTRACTING
                </span>
              </h1>
            </div>

            {/* Enhanced Subtitle */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Elite Veteran Solutions combines military precision with
                cutting-edge technology to deliver exceptional results in
                federal contracting and cybersecurity.
              </p>
            </div>

            {/* Key Capabilities Pills */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12">
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-orange-500/40 hover:bg-gray-800/50 hover:text-orange-300 transition-all duration-300 group"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/25 group border-0"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection("#services")}
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm"
                >
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16">
              <div
                ref={statsRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`group text-center p-6 bg-gray-800/20 backdrop-blur-sm border ${stat.border} rounded-2xl hover:bg-gray-800/30 hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
                  >
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`w-16 h-16 ${stat.bg} backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-gray-600/20`}
                      >
                        <stat.icon
                          className={`w-8 h-8 ${stat.color} group-hover:rotate-12 transition-transform`}
                        />
                      </div>
                    </div>
                    <div
                      className="counter-value text-3xl md:text-4xl font-bold text-white mb-2"
                      data-target={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0{stat.suffix}
                    </div>
                    <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <p className="text-gray-400 text-sm mb-6 font-medium">
                Trusted by Federal Agencies
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
                {/* SBA Certifications */}
                <div className="flex items-center space-x-3 bg-gray-800/20 backdrop-blur-sm border border-gray-700/20 rounded-lg px-4 py-2">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">VOSB</div>
                    <div className="text-xs text-gray-400">Certified</div>
                  </div>
                </div>

                <div className="w-px h-8 bg-gray-600 hidden sm:block"></div>

                <div className="flex items-center space-x-3 bg-gray-800/20 backdrop-blur-sm border border-gray-700/20 rounded-lg px-4 py-2">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">
                      SDVOSB
                    </div>
                    <div className="text-xs text-gray-400">Certified</div>
                  </div>
                </div>

                <div className="w-px h-8 bg-gray-600 hidden sm:block"></div>

                <div className="flex items-center space-x-3 bg-gray-800/20 backdrop-blur-sm border border-gray-700/20 rounded-lg px-4 py-2">
                  <Award className="w-6 h-6 text-green-400" />
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
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500/70 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Scroll to explore
          </p>
        </div>
      </div>

      {/* Quick Contact Floating Button */}
      <div className="absolute top-1/2 right-8 hidden xl:flex flex-col space-y-3 transform -translate-y-1/2 z-20">
        <a
          href="tel:888-747-9909"
          className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          title="Call Now"
        >
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="mailto:info@elitevetsolutions.com"
          className="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          title="Email Us"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </a>
        <div className="w-1 h-16 bg-gradient-to-b from-orange-500/50 to-transparent rounded-full mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
