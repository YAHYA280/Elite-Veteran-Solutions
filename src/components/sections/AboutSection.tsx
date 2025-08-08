"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ArrowUpRight,
  Component,
  Layers,
} from "lucide-react";

const AboutSection = () => {
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    { metric: "15+", label: "Years of Experience", icon: TrendingUp },
    { metric: "200+", label: "Successful Projects", icon: Target },
    { metric: "98%", label: "Client Satisfaction", icon: Award },
    { metric: "24/7", label: "Support Available", icon: Globe },
  ];

  const certifications = [
    {
      title: "Veteran-Owned Small Business (VOSB)",
      description: "Certified by the SBA as a veteran-owned enterprise",
      icon: Award,
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

  // Placeholder image component
  const PlaceholderImage = ({
    className,
    title,
  }: {
    className: string;
    title: string;
  }) => (
    <div
      className={`${className} bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center`}
    >
      <div className="text-center text-white/60">
        <div className="w-12 h-12 bg-orange-600/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
          <Users className="w-6 h-6 text-orange-400" />
        </div>
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="lg:py-20 py-10 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-500 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>

      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="animate-on-scroll flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white">
              About
            </span>
            <h2 className="text-4xl font-medium capitalize text-gray-900 dark:text-white my-4">
              Our Team of Dedicated Digital Professionals.
            </h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mb-20">
          {/* Images Section - Now with placeholders */}
          <div className="animate-on-scroll grid sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-6">
              <PlaceholderImage className="w-full h-48" title="Team Member 1" />
              <PlaceholderImage className="w-full h-48" title="Team Member 2" />
            </div>
            <div>
              <PlaceholderImage
                className="w-full h-full min-h-[400px]"
                title="Team Collaboration"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-medium text-gray-900 dark:text-white mb-8">
              The Best of Product Your Business
            </h2>

            <div className="flex items-center justify-center gap-6 mt-10">
              <div>
                <Component className="h-14 w-14 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                  High Standard
                </h2>
                <p className="text-base font-medium text-gray-700 dark:text-slate-300 mt-4">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 my-10">
              <div>
                <Layers className="h-14 w-14 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                  Ease of Communication
                </h2>
                <p className="text-base font-medium text-gray-700 dark:text-slate-300 mt-4">
                  Suspendisse enim turpis, dictum sed, iaculis a, condimentum
                  nec, nisi. Praesent nec nisl a purus blandit viverra.
                </p>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("#services")}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white py-2 px-6 rounded-md hover:bg-orange-600 hover:text-white transition-all duration-500"
            >
              View All Our Services
              <ArrowUpRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mission & Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-on-scroll space-y-8">
            <div className="bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
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
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600/30"
                  >
                    <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                Certifications & Credentials
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-gray-200 dark:border-gray-600/20 hover:border-orange-500/30 transition-all group"
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
                        <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">
                          {cert.title}
                        </h5>
                        <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded border border-green-600/30">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="animate-on-scroll">
            <div className="bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-7 h-7 text-orange-600 mr-3" />
                Our Core Values
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                We are guided by the core values of integrity, accountability,
                teamwork, and excellence. Our team members embody these values
                in every project, building trust and delivering exceptional
                results for our clients.
              </p>

              <div className="space-y-6">
                {[
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
                ].map((value, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gray-50 dark:bg-gray-800/30 ${value.border} border rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <value.icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
                          {value.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-lift bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors">
                Veteran-Owned Business
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Elite Veteran Solutions is a leading Veteran-Owned Small
                Business (VOSB) and Service-Disabled Veteran-Owned Small
                Business (SDVOSB) committed to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors">
                Government Contracting Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We provide strategic, dependable, and results-oriented solutions
                for all aspects of government contracting. Our expertise spans a
                wide range of processes.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors">
                Ensuring Mission Success
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
