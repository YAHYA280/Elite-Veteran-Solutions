"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Target, Users, Lightbulb } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      gsap.from(".about-content > *", {
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

      // Cards animation
      gsap.from(".about-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "Unwavering commitment to ethical practices and transparency in all our operations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering exceptional results that exceed expectations through military precision.",
    },
    {
      icon: Target,
      title: "Mission Success",
      description:
        "Dedicated to achieving objectives with strategic planning and flawless execution.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Collaborative approach leveraging diverse expertise for optimal outcomes.",
    },
  ];

  const certifications = [
    "Veteran-Owned Small Business (VOSB)",
    "Service-Disabled Veteran-Owned Small Business (SDVOSB)",
    "SBA 8(a) Program Certified",
    "ISO 27001 Security Certified",
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div ref={sectionRef} className="container-custom">
        <div className="about-content max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">
              About Elite Veteran Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6">
              Military Precision Meets
              <span className="gradient-text block">Government Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Elite Veteran Solutions, we bring a unique blend of military
              discipline, government contracting expertise, and unwavering
              dedication to your projects. As a certified Veteran-Owned Small
              Business (VOSB) and Service-Disabled Veteran-Owned Small Business
              (SDVOSB), we understand the intricacies of government regulations
              and procurement processes.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Mission */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4 flex items-center">
                  <Lightbulb className="w-8 h-8 text-orange-600 mr-3" />
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Elite Veteran Solutions is committed to leveraging our
                  extensive military and civilian expertise to deliver
                  exceptional solutions that meet the evolving needs of our
                  government clients. Our dedication to quality, efficiency, and
                  innovation ensures mission success.
                </p>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xl font-semibold text-navy-950 mb-4">
                  Certifications & Credentials
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-navy-950 mb-6 flex items-center">
                <Award className="w-8 h-8 text-orange-600 mr-3" />
                Our Core Values
              </h3>
              <p className="text-gray-600 mb-6">
                We are guided by the core values of integrity, accountability,
                teamwork, and excellence. Our team members embody these values
                in every project, building trust and delivering exceptional
                results for our clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-navy-950 mb-1">
                        {value.title}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
            <Card className="about-card bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-4">
                  Veteran-Owned Business
                </h3>
                <p className="text-gray-600">
                  Elite Veteran Solutions is a leading Veteran-Owned Small
                  Business (VOSB) and Service-Disabled Veteran-Owned Small
                  Business (SDVOSB) committed to excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="about-card bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-4">
                  Government Contracting Expertise
                </h3>
                <p className="text-gray-600">
                  We provide strategic, dependable, and results-oriented
                  solutions for all aspects of government contracting. Our
                  expertise spans a wide range of processes.
                </p>
              </CardContent>
            </Card>

            <Card className="about-card bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-4">
                  Ensuring Mission Success
                </h3>
                <p className="text-gray-600">
                  We consistently deliver exceptional results, exceeding
                  expectations and achieving mission objectives with our
                  commitment to quality and transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
