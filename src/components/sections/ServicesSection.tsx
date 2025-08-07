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
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from(".services-header > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Service cards animation
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive cybersecurity solutions, safeguarding your data and systems from evolving threats.",
      features: [
        "Risk assessments and vulnerability management",
        "Incident response and security awareness training",
        "Advanced security controls and compliance",
        "24/7 monitoring and threat detection",
      ],
      gradient: "from-red-500 to-red-700",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Server,
      title: "IT Services",
      description:
        "Complete IT services managing your technology infrastructure with lifecycle design and development.",
      features: [
        "Network management and cloud computing",
        "Data centers and help desk support",
        "IT consulting and system integration",
        "Digital transformation solutions",
      ],
      gradient: "from-blue-500 to-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description:
        "Optimize your logistics, ensuring efficient procurement, warehousing, and distribution of critical resources.",
      features: [
        "Supply chain optimization",
        "Inventory management systems",
        "Transportation and distribution",
        "Procurement process improvement",
      ],
      gradient: "from-green-500 to-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: "Strategic Consulting",
      description:
        "Strategic consulting guides you through all aspects of government contracting and business development.",
      features: [
        "Business development strategies",
        "Proposal writing and management",
        "Contract administration support",
        "Compliance and regulatory guidance",
      ],
      gradient: "from-purple-500 to-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick response and implementation",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Nationwide service coverage",
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Military-grade security protocols",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of success",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div ref={sectionRef} className="container-custom">
        {/* Section Header */}
        <div className="services-header text-center mb-20">
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">
            Expertise & Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6">
            Strategic Government
            <span className="gradient-text block">Contracting Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your government contracting journey with Elite Veteran
            Solutions, where we combine proven military precision and innovative
            thinking to deliver unparalleled results in the federal marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon
                        className={`w-8 h-8 ${service.iconColor}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-950 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient Footer */}
                <div
                  className={`h-2 bg-gradient-to-r ${service.gradient} group-hover:h-3 transition-all duration-300`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Elite Veteran Solutions?
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Navigate complex federal procurement processes with our expert
                guidance. We&apos;ll help you identify, pursue, and win
                lucrative government contracts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-orange-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-orange-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
