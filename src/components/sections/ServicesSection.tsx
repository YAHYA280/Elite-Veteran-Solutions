"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Server,
  Truck,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Target,
} from "lucide-react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive cybersecurity solutions, safeguarding your data and systems from evolving threats with military-grade protection.",
      features: [
        "Risk assessments and vulnerability management",
        "Incident response and security awareness training",
        "Advanced security controls and compliance",
        "24/7 monitoring and threat detection",
      ],
      gradient: "from-red-500 to-red-600",
      iconColor: "text-red-400",
      price: "Custom Quote",
      popular: false,
    },
    {
      icon: Server,
      title: "IT Services",
      description:
        "Complete IT services managing your technology infrastructure with lifecycle design, development, and cutting-edge solutions.",
      features: [
        "Network management and cloud computing",
        "Data centers and help desk support",
        "IT consulting and system integration",
        "Digital transformation solutions",
      ],
      gradient: "from-red-600 to-red-700",
      iconColor: "text-red-400",
      price: "Starting $5k",
      popular: true,
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description:
        "Optimize your logistics operations, ensuring efficient procurement, warehousing, and distribution of critical resources.",
      features: [
        "Supply chain optimization",
        "Inventory management systems",
        "Transportation and distribution",
        "Procurement process improvement",
      ],
      gradient: "from-red-700 to-red-800",
      iconColor: "text-red-400",
      price: "Starting $3k",
      popular: false,
    },
    {
      icon: Users,
      title: "Strategic Consulting",
      description:
        "Strategic consulting guides you through all aspects of government contracting and business development with proven expertise.",
      features: [
        "Business development strategies",
        "Proposal writing and management",
        "Contract administration support",
        "Compliance and regulatory guidance",
      ],
      gradient: "from-red-800 to-red-900",
      iconColor: "text-red-400",
      price: "Starting $2k",
      popular: false,
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick response and implementation within 48-72 hours",
      color: "text-red-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Nationwide service coverage with international capabilities",
      color: "text-red-500",
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Military-grade security protocols and compliance",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98% success rate with measurable ROI",
      color: "text-red-300",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current systems and identify opportunities",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Develop customized solutions aligned with your objectives",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy solutions with minimal disruption to operations",
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "Continuous monitoring and improvement for maximum efficiency",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-red-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-red-500 rounded-full animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-bounce animation-delay-700"></div>
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="animate-on-scroll text-center mb-20">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Target className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-300 font-medium">
              Expertise & Capabilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Strategic Government
            <span className="block gradient-text mt-2">
              Contracting Solutions
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your government contracting journey with Elite Veteran
            Solutions, where we combine proven military precision and innovative
            thinking to deliver unparalleled results in the federal marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`animate-on-scroll group bg-gradient-to-br from-black to-red-950/30 border-red-900/50 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/20 ${
                service.popular
                  ? "ring-2 ring-red-500/40 shadow-lg shadow-red-500/20"
                  : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-red-400 shadow-lg">
                    🔥 Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-0 relative">
                {/* Red glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10">
                  {/* Service Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-700/30 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon
                        className={`w-8 h-8 ${service.iconColor} group-hover:text-red-300 transition-colors`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors mb-1">
                        {service.title}
                      </h3>
                      <p className="text-red-400 font-semibold text-sm">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 group/feature"
                      >
                        <div className="w-5 h-5 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-red-400" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed group-hover/feature:text-gray-200 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 font-semibold py-3"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Animated Gradient Footer */}
                <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 group-hover:h-2 transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="animate-on-scroll mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Our Proven <span className="gradient-text">Process</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              We follow a systematic approach to ensure successful project
              delivery and client satisfaction with military precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-8 z-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto text-white font-bold text-xl shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300 relative z-30">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 z-10">
                      <div className="h-full bg-gradient-to-r from-red-500/60 via-red-400/40 to-transparent"></div>
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="animate-on-scroll bg-gradient-to-br from-black to-red-950/20 border border-red-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-red-500/10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="gradient-text">Elite Veteran Solutions</span>?
            </h3>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Navigate complex federal procurement processes with our expert
              guidance. We'll help you identify, pursue, and win lucrative
              government contracts with proven methodologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-red-900/20 to-black/50 border border-red-800/30 rounded-2xl hover:border-red-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className={`w-8 h-8 ${capability.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                  {capability.title}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 p-8 bg-black/30 rounded-2xl border border-red-900/20">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Success Rate" },
              { value: "15+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 group shadow-2xl shadow-red-500/30 hover:shadow-red-500/50"
            >
              Start Your Project Today
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
