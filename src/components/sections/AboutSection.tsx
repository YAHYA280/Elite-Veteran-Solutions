"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Award,
  Target,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Globe,
  Lock,
} from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { metric: "15+", label: "Years of Experience", icon: TrendingUp },
    { metric: "200+", label: "Successful Projects", icon: Target },
    { metric: "98%", label: "Client Satisfaction", icon: Award },
    { metric: "24/7", label: "Support Available", icon: Globe },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="animate-on-scroll text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
            Military Precision Meets
            <span className="block gradient-text mt-2">
              Government Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Elite Veteran Solutions, we bring a unique blend of military
            discipline, government contracting expertise, and unwavering
            dedication to your projects. As a certified VOSB and SDVOSB, we
            understand the intricacies of government regulations and procurement
            processes.
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <Card className="hover-lift bg-white border border-gray-200 shadow-lg hover:border-orange-300 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <img
                  src="/SbaLogo.png"
                  alt="SBA Logo"
                  className="w-12 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">
                Veteran-Owned Business
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Small Business Administration (SBA) is a United States
                government agency that provides support to entrepreneurs and
                small businesses through loan programs, contracting
                opportunities, and business development resources.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-white border border-gray-200 shadow-lg hover:border-orange-300 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <img
                  src="/AboutSectionIcons/contract.png"
                  alt="Contract Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">
                Government Contracting Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide strategic, dependable, and results-oriented solutions
                for all aspects of government contracting. Our expertise spans a
                wide range of processes.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-white border border-gray-200 shadow-lg hover:border-orange-300 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <img
                  src="/AboutSectionIcons/success.png"
                  alt="Success Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">
                Ensuring Mission Success
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We consistently deliver exceptional results, exceeding
                expectations and achieving mission objectives with our
                commitment to quality and transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
