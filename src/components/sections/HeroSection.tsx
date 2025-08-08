"use client";

import React, { useState, useEffect } from "react";
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
  ArrowUpRight,
  Play,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Strategic Government Solutions",
      subtitle: "Elite expertise",
      description:
        "Military precision meets cutting-edge technology to deliver exceptional results in federal contracting and cybersecurity.",
      bgColor: "from-slate-900 via-slate-800 to-gray-900",
    },
    {
      title: "Mission-Critical Excellence",
      subtitle: "Veteran-owned",
      description:
        "Combining military discipline with innovative thinking to deliver unparalleled results in the federal marketplace.",
      bgColor: "from-blue-900 via-blue-800 to-slate-900",
    },
    {
      title: "Beyond Excellence",
      subtitle: "Digital agency",
      description:
        "Their ability to understand our vision and translate it into a comprehensive contracting strategy is truly exceptional.",
      bgColor: "from-purple-900 via-purple-800 to-slate-900",
    },
  ];

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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="grid xl:grid-cols-5 grid-cols-1 items-center relative min-h-screen">
        {/* Content Side */}
        <div className="relative xl:col-span-2 p-6 xl:p-0 xl:-me-24 xl:mt-0 -mt-24 z-10 order-2 xl:order-none">
          <div className="max-w-xl mx-auto xl:ms-auto xl:me-0 rounded-xl bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20">
            <div className="p-6">
              {/* Content Slider */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {heroSlides.map((slide, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="flex-col flex items-start justify-end xl:h-full">
                          <span className="text-base font-medium uppercase tracking-wider text-orange-400">
                            {slide.subtitle}
                          </span>
                          <h2 className="md:text-4xl/snug text-3xl font-semibold text-white mt-6">
                            {slide.title}
                          </h2>
                          <p className="md:w-3/4 text-base text-slate-300 font-medium mt-5 mb-7">
                            {slide.description}
                          </p>
                          <Button
                            onClick={() => scrollToSection("#contact")}
                            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white py-2 px-6 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-500"
                          >
                            Get Solution
                            <ArrowUpRight className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-orange-500 w-8"
                          : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <div className="mb-2 flex justify-center">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-xs text-slate-300 font-medium">
                Years Experience
              </div>
            </div>

            <div className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <div className="mb-2 flex justify-center">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-xs text-slate-300 font-medium">
                Contracts Secured
              </div>
            </div>

            <div className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <div className="mb-2 flex justify-center">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-xs text-slate-300 font-medium">
                Success Rate
              </div>
            </div>

            <div className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <div className="mb-2 flex justify-center">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">25+</div>
              <div className="text-xs text-slate-300 font-medium">
                Expert Team
              </div>
            </div>
          </div>
        </div>

        {/* Image Side - Now with gradient backgrounds instead of images */}
        <div className="xl:col-span-3 order-1 xl:order-none">
          <div className="relative h-screen overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  {/* Gradient Background instead of image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}
                  />
                  <div className="absolute inset-0 bg-black/25"></div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-16 h-16 rounded-full border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 mb-4"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </Button>
                      <p className="text-white/80 text-sm">Watch Our Story</p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/30 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="lg:pb-10 relative z-10">
        <div className="relative gap-28 m-auto flex overflow-hidden border-t border-white/20 py-6 bg-black/30 backdrop-blur-sm">
          <div className="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full animate-marquee">
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Cybersecurity Solutions
              </h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Government Contracting
              </h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">IT Services</h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Strategic Consulting
              </h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Logistics Management
              </h2>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full animate-marquee"
          >
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Cybersecurity Solutions
              </h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Government Contracting
              </h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">IT Services</h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Strategic Consulting
              </h2>
            </div>
            <div className="py-2">
              <h2 className="text-4xl font-medium text-white">
                Logistics Management
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact - Desktop Only */}
      <div className="absolute top-1/2 right-8 hidden xl:flex flex-col space-y-3 transform -translate-y-1/2 z-20">
        <a
          href="tel:888-747-9909"
          className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
          title="Call Now"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="mailto:info@elitevetsolutions.com"
          className="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
          title="Email Us"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
