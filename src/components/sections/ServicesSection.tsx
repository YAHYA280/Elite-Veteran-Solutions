"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  Component,
  Layers,
  LayoutGrid,
  MoveRight,
} from "lucide-react";
import Image from "next/image";

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

  const mainServices = [
    {
      icon: Component,
      title: "Developer",
      description:
        "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
      color: "text-blue-400",
    },
    {
      icon: Layers,
      title: "Digital Product Design",
      description:
        "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
      color: "text-green-400",
    },
    {
      icon: LayoutGrid,
      title: "Branding & Design",
      description:
        "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
      color: "text-purple-400",
    },
  ];

  const detailedServices = [
    {
      step: "01",
      title: "Graphic Design",
      description:
        "Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio.",
    },
    {
      step: "02",
      title: "Web Design",
      description:
        "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra.",
    },
    {
      step: "03",
      title: "Digital Marketing",
      description:
        "Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.",
    },
  ];

  const originalServices = [
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
    },
  ];

  return (
    <section
      id="services"
      className="lg:py-20 py-10 bg-background dark:bg-gray-900 relative overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Main Services Section - Template Style */}
        <div className="animate-on-scroll flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 dark:border-slate-600 text-default-950 dark:text-white">
              Services
            </span>
            <h2 className="text-4xl font-medium capitalize text-default-950 dark:text-white my-4">
              Our Services
            </h2>
            <p className="text-base text-default-800 dark:text-gray-300 font-medium">
              Lorem ipsum dummy text are usually use print and website industry.
            </p>
          </div>
        </div>

        {/* Template-style Services Grid */}
        <div className="animate-on-scroll grid lg:grid-cols-3 grid-cols-1 items-center rounded-md overflow-hidden bg-default-100 dark:bg-default-50 divide-y lg:divide-y-0 lg:divide-x divide-default-200 dark:divide-gray-700 mb-20">
          {mainServices.map((service, index) => (
            <div key={index} className="group">
              <div className="sm:p-10 p-8">
                <span>
                  <service.icon className={`h-14 w-14 ${service.color}`} />
                </span>
                <h2 className="text-2xl text-default-950 dark:text-white font-medium mb-4 mt-8">
                  {service.title}
                </h2>
                <p className="text-base text-default-800 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="text-default-950 dark:text-white text-lg font-medium group"
                >
                  Read More
                  <MoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services with Image - Template Style */}
        <div className="animate-on-scroll mb-20">
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-2xl mx-auto text-center">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 dark:border-slate-600 text-default-950 dark:text-white">
                Services
              </span>
              <p className="text-lg text-default-800 dark:text-gray-300 font-medium mt-5">
                We help you to go online and increase your conversion rate
                Better design for your digital products.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div className="relative overflow-hidden -z-10">
              <Image
                src="/assets/images/landing/agency/img-10.jpg"
                alt="Our services"
                width={600}
                height={400}
                className="rounded-md h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-md bg-black/40"></div>
            </div>

            <div className="lg:-ms-20">
              <div className="divide-y divide-default-200 dark:divide-gray-700 bg-default-50 dark:bg-gray-800/50 rounded-md shadow">
                {detailedServices.map((service, index) => (
                  <div
                    key={index}
                    className="p-6 flex flex-wrap sm:flex-nowrap items-center gap-6"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-500 text-xl border border-default-200 dark:border-gray-600 text-default-950 dark:text-white hover:text-primary bg-white/5 hover:bg-white dark:hover:bg-gray-700">
                        {service.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-default-950 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-base font-medium text-default-800 dark:text-gray-300 mt-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Original Elite Services - Enhanced */}
        <div className="animate-on-scroll text-center mb-12">
          <div className="inline-flex items-center bg-primary/20 border border-primary/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Target className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium">
              Elite Veteran Solutions Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-default-950 dark:text-white mb-8 leading-tight">
            Strategic Government
            <span className="block text-primary mt-2">
              Contracting Solutions
            </span>
          </h2>

          <p className="text-lg text-default-800 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your government contracting journey with Elite Veteran
            Solutions, where we combine proven military precision and innovative
            thinking to deliver unparalleled results in the federal marketplace.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {originalServices.map((service, index) => (
            <Card
              key={index}
              className="animate-on-scroll group bg-default-100 dark:bg-gray-800/50 border-default-200 dark:border-gray-700/50 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-default-200 dark:bg-gray-700/50 rounded-xl flex items-center justify-center mr-4">
                        <service.icon
                          className={`w-7 h-7 ${service.iconColor}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-default-950 dark:text-white group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-default-800 dark:text-gray-300 mb-6 leading-relaxed">
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
                        <span className="text-default-800 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-default-200 dark:bg-gray-700/50 hover:bg-primary text-default-800 dark:text-gray-300 hover:text-white border border-default-300 dark:border-gray-600/50 hover:border-primary transition-all duration-300"
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

        {/* Call to Action */}
        <div className="animate-on-scroll bg-default-100 dark:bg-gray-800/50 border border-default-200 dark:border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm text-center">
          <h3 className="text-3xl font-bold text-default-950 dark:text-white mb-4">
            Why Choose Elite Veteran Solutions?
          </h3>
          <p className="text-default-800 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Navigate complex federal procurement processes with our expert
            guidance. We'll help you identify, pursue, and win lucrative
            government contracts with proven methodologies.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Success Rate" },
              { value: "15+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-default-950 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-default-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-700 text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
          >
            Start Your Project Today
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
