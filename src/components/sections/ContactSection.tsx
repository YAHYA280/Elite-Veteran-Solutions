"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Star,
  Award,
  Globe,
  MessageSquare,
  Calendar,
  Users,
  Shield,
} from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["4950 Woodstone DR APT 321", "San Antonio, Texas 78230-1199"],
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: Phone,
      title: "Call Us Directly",
      details: ["888-747-9909", "Available 24/7 for emergencies"],
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
      link: "tel:888-747-9909",
    },
    {
      icon: Mail,
      title: "Send Us an Email",
      details: ["info@elitevetsolutions.com", "Response within 2-4 hours"],
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
      link: "mailto:info@elitevetsolutions.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  const projectTypes = [
    "Cybersecurity Assessment",
    "IT Infrastructure",
    "Logistics Management",
    "Strategic Consulting",
    "Government Contracting",
    "Other",
  ];

  const quickStats = [
    { icon: MessageSquare, value: "< 2 hrs", label: "Response Time" },
    { icon: Calendar, value: "24-48 hrs", label: "Project Start" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="animate-on-scroll text-center mb-20">
          <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Mail className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your
            <span className="block gradient-text mt-2">
              Government Contracting?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Let&apos;s discuss how Elite Veteran Solutions can help you navigate
            the complex world of government contracting and achieve mission
            success. Contact us today for a consultation.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl"
              >
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Globe className="w-6 h-6 text-orange-400 mr-3" />
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gray-900/50 backdrop-blur-sm border ${info.border} rounded-2xl hover:bg-gray-900/70 transition-all group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-14 h-14 ${info.bg} backdrop-blur-sm border border-gray-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-300 text-sm mb-1"
                          >
                            {info.link && detailIndex === 0 ? (
                              <a
                                href={info.link}
                                className="hover:text-orange-400 transition-colors font-medium"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-on-scroll bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h4 className="font-bold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-3" />
                Our Certifications
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-600/30">
                  <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <p className="text-xs text-gray-300 font-medium mb-1">
                    Veteran-Owned
                  </p>
                  <p className="text-xs text-gray-400">Small Business</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-600/30">
                  <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <p className="text-xs text-gray-300 font-medium mb-1">
                    Service-Disabled
                  </p>
                  <p className="text-xs text-gray-400">Veteran-Owned</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Badge className="bg-green-600/20 text-green-400 border border-green-600/30">
                  ISO 27001 Certified
                </Badge>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="animate-on-scroll bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/30 transition-all">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-600/20 backdrop-blur-sm border border-green-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for contacting Elite Veteran Solutions.
                      We&apos;ll get back to you within 2-4 hours.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Expected response time: 2-4 hours</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-white">
                        Send Us a Message
                      </h3>
                      <Badge className="bg-orange-600/20 text-orange-400 border border-orange-600/30">
                        Free Consultation
                      </Badge>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name *
                          </label>
                          <Input
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`form-input ${
                              errors.firstName
                                ? "border-red-500 focus:border-red-500"
                                : ""
                            }`}
                            placeholder="Enter your first name"
                          />
                          {errors.firstName && (
                            <p className="text-red-400 text-xs mt-1">
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Last Name *
                          </label>
                          <Input
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`form-input ${
                              errors.lastName
                                ? "border-red-500 focus:border-red-500"
                                : ""
                            }`}
                            placeholder="Enter your last name"
                          />
                          {errors.lastName && (
                            <p className="text-red-400 text-xs mt-1">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`form-input ${
                              errors.email
                                ? "border-red-500 focus:border-red-500"
                                : ""
                            }`}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company/Organization
                          </label>
                          <Input
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="form-input"
                          >
                            <option value="">Select a service</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`form-textarea ${
                            errors.message
                              ? "border-red-500 focus:border-red-500"
                              : ""
                          }`}
                          placeholder="Tell us about your project, timeline, and specific requirements..."
                        />
                        {errors.message && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="loading-spinner mr-2"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onClick={() => window.open("tel:888-747-9909")}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>

                      <div className="text-center pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">
                          By submitting this form, you agree to our privacy
                          policy and terms of service.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="animate-on-scroll mt-20">
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-orange-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Our Location
                  </h4>
                  <p className="text-gray-300 font-medium">
                    San Antonio, Texas
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    Serving clients nationwide
                  </p>
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=4950+Woodstone+DR+APT+321+San+Antonio+Texas+78230",
                        "_blank"
                      )
                    }
                  >
                    View on Google Maps
                  </Button>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border border-orange-400 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 border border-blue-400 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
