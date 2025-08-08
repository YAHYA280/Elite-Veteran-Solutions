"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowUp,
  LineChart,
  Save,
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectTypes = [
    "Cybersecurity Assessment",
    "IT Infrastructure",
    "Logistics Management",
    "Strategic Consulting",
    "Government Contracting",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="lg:py-20 py-10 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>

      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Contact Cards Section */}
        <div className="animate-on-scroll flex flex-wrap items-center justify-around gap-6 mb-20">
          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white/5 dark:bg-gray-800/50 mx-auto flex items-center justify-center hover:scale-110 transition-transform">
              <Phone className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mt-5">
              Call Me
            </h4>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300 mt-1">
              <a
                href="tel:888-747-9909"
                className="hover:text-orange-600 transition-colors"
              >
                +0088 66956 66
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white/5 dark:bg-gray-800/50 mx-auto flex items-center justify-center hover:scale-110 transition-transform">
              <Mail className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mt-5">
              Email me
            </h4>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300 mt-1">
              <a
                href="mailto:info@elitevetsolutions.com"
                className="hover:text-orange-600 transition-colors"
              >
                info@elitevetsolutions.com
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white/5 dark:bg-gray-800/50 mx-auto flex items-center justify-center hover:scale-110 transition-transform">
              <LineChart className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mt-5">
              Follow Me
            </h4>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300 mt-1">
              LinkedIn.com/elite-veteran
            </p>
          </div>

          <div className="text-center">
            <div className="h-20 w-20 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white/5 dark:bg-gray-800/50 mx-auto flex items-center justify-center hover:scale-110 transition-transform">
              <Save className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mt-5">
              My Work
            </h4>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300 mt-1">
              elitevetsolutions.com
            </p>
          </div>
        </div>

        {/* Main Contact Form Section */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Globe className="w-6 h-6 text-orange-400 mr-3" />
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="p-6 bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/30 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/70 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-blue-400/10 backdrop-blur-sm border border-blue-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-400 transition-colors">
                        Visit Our Office
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        4950 Woodstone DR APT 321
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        San Antonio, Texas 78230-1199
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/70 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-green-400/10 backdrop-blur-sm border border-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-400 transition-colors">
                        Call Us Directly
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <a
                          href="tel:888-747-9909"
                          className="hover:text-orange-400 transition-colors font-medium"
                        >
                          888-747-9909
                        </a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-orange-400/20 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/70 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-orange-400/10 backdrop-blur-sm border border-orange-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-400 transition-colors">
                        Send Us an Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <a
                          href="mailto:info@elitevetsolutions.com"
                          className="hover:text-orange-400 transition-colors font-medium"
                        >
                          info@elitevetsolutions.com
                        </a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Response within 2-4 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/70 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-400 transition-colors">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        Mon-Fri: 8:00 AM - 8:00 PM
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Sat: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-on-scroll bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-3" />
                Our Certifications
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-600/30">
                  <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Veteran-Owned
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Small Business
                  </p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-600/30">
                  <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xs font-bold">SBA</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Service-Disabled
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Veteran-Owned
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-600 border border-green-600/30">
                  ISO 27001 Certified
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="animate-on-scroll bg-white dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 hover:border-orange-500/30 transition-all">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-600/20 backdrop-blur-sm border border-green-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Thank you for contacting Elite Veteran Solutions. We'll
                      get back to you within 2-4 hours.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Expected response time: 2-4 hours</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Send Us a Message
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-600/20 text-orange-600 border border-orange-600/30">
                        Free Consultation
                      </span>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            First Name *
                          </label>
                          <Input
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all ${
                              errors.firstName
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 dark:border-gray-600"
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
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Last Name *
                          </label>
                          <Input
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all ${
                              errors.lastName
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 dark:border-gray-600"
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
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all ${
                              errors.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 dark:border-gray-600"
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
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company/Organization
                          </label>
                          <Input
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none ${
                            errors.message
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-300 dark:border-gray-600"
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
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
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
                          className="px-8 py-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                          onClick={() => window.open("tel:888-747-9909")}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>

                      <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
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

        {/* Back to Top integrated in this section */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
