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
  Award,
  Globe,
  MessageSquare,
  Calendar,
  Users,
  Shield,
  ExternalLink,
} from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // const formRef = useRef<HTMLFormElement>(null);

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
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "888-747-9909",
      subtitle: "24/7 Emergency Support",
      link: "tel:888-747-9909",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@elitevetsolutions.com",
      subtitle: "Response within 2-4 hours",
      link: "mailto:info@elitevetsolutions.com",
      color: "from-red-600 to-red-700",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "San Antonio, Texas",
      subtitle: "Serving clients nationwide",
      link: "https://maps.google.com/?q=4950+Woodstone+DR+APT+321+San+Antonio+Texas+78230",
      color: "from-red-700 to-red-800",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 8AM-8PM",
      subtitle: "Sat: 10AM-4PM",
      color: "from-red-400 to-red-500",
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
      className="section-padding bg-gradient-to-br from-red-950 via-black to-red-800 relative overflow-hidden"
    >
      {/* Background overlay patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950 via-black/20 to-red-950"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-black/15 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-l from-red-600/10 to-red-700/10 backdrop-blur-xl border border-red-500/20 rounded-full px-8 py-4 mb-8">
            <MessageSquare className="w-5 h-5 text-red-400 mr-3" />
            <span className="text-red-300 font-medium text-lg">
              Let&apos;s Start Your Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to <span className="gradient-text">Transform</span>
            <br />
            Your Success?
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Partner with Elite Veteran Solutions to navigate complex government
            contracting and achieve exceptional results. Let&apos;s discuss your
            vision.
          </p>

          {/* Improved Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-bl from-red-950/20 to-black/60 backdrop-blur-xl border border-red-900/30 rounded-2xl hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-bl from-red-700/20 to-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="animate-on-scroll mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-bl from-red-950/20 to-black/80 backdrop-blur-xl border border-red-900/30 rounded-3xl hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-bl ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/20`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="block text-red-400 font-semibold mb-2 hover:text-red-300 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-red-400 font-semibold mb-2">
                      {info.value}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm">{info.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="animate-on-scroll bg-gradient-to-bl from-red-950/20 to-black/80 backdrop-blur-xl border border-red-900/30 hover:border-red-500/30 transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                {isSubmitted ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gradient-to-bl from-red-600/20 to-red-500/20 backdrop-blur-xl border border-red-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-red-400" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xl text-gray-300 mb-8">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 2-4 hours.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-gray-400">
                      <Clock className="w-5 h-5" />
                      <span>Expected response: 2-4 hours</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Send Us a Message
                      </h3>
                      <p className="text-gray-400">
                        Ready to get started? Fill out the form below and
                        we&apos;ll be in touch.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            First Name *
                          </label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`h-14 bg-black/50 border-2 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-black/70 ${
                              errors.firstName
                                ? "border-red-500"
                                : "border-red-900/50 focus:border-red-500"
                            }`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="text-red-400 text-sm">
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Last Name *
                          </label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`h-14 bg-black/50 border-2 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-black/70 ${
                              errors.lastName
                                ? "border-red-500"
                                : "border-red-900/50 focus:border-red-500"
                            }`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="text-red-400 text-sm">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`h-14 bg-black/50 border-2 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-black/70 ${
                              errors.email
                                ? "border-red-500"
                                : "border-red-900/50 focus:border-red-500"
                            }`}
                            placeholder="john@company.com"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="h-14 bg-black/50 border-2 border-red-900/50 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-black/70 focus:border-red-500"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Company/Organization
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="h-14 bg-black/50 border-2 border-red-900/50 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-black/70 focus:border-red-500"
                            placeholder="Your Company Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="h-14 bg-black/50 border-2 border-red-900/50 rounded-xl text-white transition-all duration-300 focus:bg-black/70 focus:border-red-500 px-4"
                          >
                            <option value="">Select a service</option>
                            {projectTypes.map((type, index) => (
                              <option
                                key={index}
                                value={type}
                                className="bg-black"
                              >
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className={`bg-black/50 border-2 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:bg-black/70 resize-none ${
                            errors.message
                              ? "border-red-500"
                              : "border-red-900/50 focus:border-red-500"
                          }`}
                          placeholder="Tell us about your project, timeline, and specific requirements..."
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 h-14 bg-gradient-to-l from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 group shadow-lg shadow-red-500/25"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-14 px-8 border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300"
                          onClick={() => window.open("tel:888-747-9909")}
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-8">
            {/* Certifications Card */}
            <Card className="animate-on-scroll bg-gradient-to-bl from-red-950/20 to-black/80 backdrop-blur-xl border border-red-900/30 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-bl from-red-700/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Our Certifications
                  </h3>
                  <p className="text-gray-400">Trusted by federal agencies</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-red-800/20 to-red-900/20 rounded-2xl border border-red-800/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          SBA
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">VOSB</p>
                        <p className="text-gray-400 text-xs">Veteran-Owned</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                      Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-red-800/20 to-red-900/20 rounded-2xl border border-red-800/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          SBA
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          SDVOSB
                        </p>
                        <p className="text-gray-400 text-xs">
                          Service-Disabled
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us Card */}
            <Card className="animate-on-scroll bg-gradient-to-bl from-red-950/20 to-black/80 backdrop-blur-xl border border-red-900/30 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Why Choose <span className="gradient-text">Us</span>?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Military-grade security" },
                    { icon: Award, text: "15+ years experience" },
                    { icon: Users, text: "98% client satisfaction" },
                    { icon: Globe, text: "Nationwide coverage" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-900/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-bl from-red-700/20 to-red-600/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="animate-on-scroll">
          <Card className="bg-gradient-to-bl from-red-950/20 to-black/80 backdrop-blur-xl border border-red-900/30 rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96">
                {/* Embedded Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.8967423453887!2d-98.53650892397!3d29.60184457550547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8b0b0b0b0b0b%3A0x0!2s4950%20Woodstone%20Dr%2C%20San%20Antonio%2C%20TX%2078230!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>

                {/* Overlay Info Card */}
                <div className="absolute top-8 left-8 bg-gradient-to-bl from-red-950/30 to-black/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 max-w-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-bl from-red-700 to-red-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Our Location
                      </h4>
                      <p className="text-red-400 text-sm">San Antonio, Texas</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    4950 Woodstone DR APT 321
                    <br />
                    San Antonio, TX 78230-1199
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=4950+Woodstone+DR+APT+321+San+Antonio+Texas+78230",
                        "_blank"
                      )
                    }
                  >
                    View Directions
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
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
