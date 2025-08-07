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
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-400",
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
      gradient: "from-green-500 to-green-600",
      iconColor: "text-green-400",
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
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-400",
      price: "Starting $2k",
      popular: false,
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick response and implementation within 48-72 hours",
      color: "text-yellow-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Nationwide service coverage with international capabilities",
      color: "text-blue-400",
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Military-grade security protocols and compliance",
      color: "text-green-400",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98% success rate with measurable ROI",
      color: "text-purple-400",
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
      className="section-padding bg-gray-900 relative overflow-hidden"
    >
      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="animate-on-scroll text-center mb-20">
          <div className="inline-flex items-center bg-orange-600/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Target className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium">
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
              className={`animate-on-scroll group bg-gray-800/50 border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden backdrop-blur-sm ${
                service.popular ? "ring-2 ring-orange-500/30" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-600 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-0">
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center mr-4">
                        <service.icon
                          className={`w-7 h-7 ${service.iconColor}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-orange-400 font-medium text-sm">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-gray-700/50 hover:bg-orange-600 text-gray-300 hover:text-white border border-gray-600/50 hover:border-orange-500 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Gradient Footer */}
                <div
                  className={`h-1 bg-gradient-to-r ${service.gradient}`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="animate-on-scroll mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Proven Process
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a systematic approach to ensure successful project
              delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mx-auto text-white font-bold text-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-14 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="animate-on-scroll bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Elite Veteran Solutions?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Navigate complex federal procurement processes with our expert
              guidance. We&apos;ll help you identify, pursue, and win lucrative
              government contracts with proven methodologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-900/50 border border-gray-700/30 rounded-xl hover:border-orange-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className={`w-7 h-7 ${capability.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Success Rate" },
              { value: "15+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Start Your Project Today
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
