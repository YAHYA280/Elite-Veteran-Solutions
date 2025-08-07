"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Award,
  Target,
  Users,
  Lightbulb,
  Shield,
  Star,
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

  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "Unwavering commitment to ethical practices and transparency in all operations.",
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering exceptional results that exceed expectations through military precision.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
    },
    {
      icon: Target,
      title: "Mission Success",
      description:
        "Dedicated to achieving objectives with strategic planning and flawless execution.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Collaborative approach leveraging diverse expertise for optimal outcomes.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  const certifications = [
    {
      title: "Veteran-Owned Small Business (VOSB)",
      description: "Certified by the SBA as a veteran-owned enterprise",
      icon: Star,
      status: "Active",
    },
    {
      title: "Service-Disabled Veteran-Owned Small Business (SDVOSB)",
      description: "Recognized for service-disabled veteran leadership",
      icon: Shield,
      status: "Active",
    },
    {
      title: "SBA 8(a) Program Certified",
      description: "Qualified for federal contracting opportunities",
      icon: Award,
      status: "Active",
    },
    {
      title: "ISO 27001 Security Certified",
      description: "International standard for information security",
      icon: Lock,
      status: "Certified",
    },
  ];

  const achievements = [
    { metric: "15+", label: "Years of Experience", icon: TrendingUp },
    { metric: "200+", label: "Successful Projects", icon: Target },
    { metric: "98%", label: "Client Satisfaction", icon: Star },
    { metric: "24/7", label: "Support Available", icon: Globe },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="animate-on-scroll text-center mb-20">
          <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium">
              About Elite Veteran Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Military Precision Meets
            <span className="block gradient-text mt-2">
              Government Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Elite Veteran Solutions, we bring a unique blend of military
            discipline, government contracting expertise, and unwavering
            dedication to your projects. As a certified VOSB and SDVOSB, we
            understand the intricacies of government regulations and procurement
            processes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission & Story */}
          <div className="animate-on-scroll space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Elite Veteran Solutions is committed to leveraging our extensive
                military and civilian expertise to deliver exceptional solutions
                that meet the evolving needs of our government clients. Our
                dedication to quality, efficiency, and innovation ensures
                mission success.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600/30"
                  >
                    <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-gray-400">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                Certifications & Credentials
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-600/20 hover:border-orange-500/30 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 ${
                        cert.icon === Lock
                          ? "bg-blue-600/20"
                          : "bg-green-600/20"
                      } rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <cert.icon
                        className={`w-5 h-5 ${
                          cert.icon === Lock
                            ? "text-blue-400"
                            : "text-green-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {cert.title}
                        </h5>
                        <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded border border-green-600/30">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-on-scroll">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-7 h-7 text-orange-400 mr-3" />
                Our Core Values
              </h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                We are guided by the core values of integrity, accountability,
                teamwork, and excellence. Our team members embody these values
                in every project, building trust and delivering exceptional
                results for our clients.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gray-800/30 ${value.border} border rounded-xl hover:bg-gray-800/50 transition-all duration-300 group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <value.icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {value.title}
                        </h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <Card className="hover-lift bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                Veteran-Owned Business
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Elite Veteran Solutions is a leading Veteran-Owned Small
                Business (VOSB) and Service-Disabled Veteran-Owned Small
                Business (SDVOSB) committed to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                Government Contracting Expertise
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We provide strategic, dependable, and results-oriented solutions
                for all aspects of government contracting. Our expertise spans a
                wide range of processes.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                Ensuring Mission Success
              </h3>
              <p className="text-gray-400 leading-relaxed">
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
