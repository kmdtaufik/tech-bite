"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Twitter,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/techsphere",
      icon: Twitter,
      handle: "@techsphere",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/techsphere",
      icon: Linkedin,
      handle: "TechSphere",
    },
    {
      name: "GitHub",
      href: "https://github.com/techsphere",
      icon: Github,
      handle: "techsphere",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have a question, story tip, or feedback? We'd love to hear from
                you. Get in touch using the form below or reach out directly via
                email.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-black">
                      Send us a Message
                    </h2>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-black mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-black mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-black mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Direct Email */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-black">
                      Prefer to email us directly?
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    For general inquiries and feedback
                  </p>
                  <Link
                    href="mailto:contact@techsphere.com"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    contact@techsphere.com
                  </Link>
                </CardContent>
              </Card>

              {/* Press / Media Inquiries */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-black">
                      Press / Media Inquiries
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    For press releases, media kits, and interview requests
                  </p>
                  <Link
                    href="mailto:media@techsphere.com"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    media@techsphere.com
                  </Link>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Follow Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Stay connected on social media for the latest updates
                  </p>
                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                        >
                          <IconComponent className="h-5 w-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                          <div>
                            <div className="font-medium text-black group-hover:text-blue-600">
                              {social.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {social.handle}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border border-gray-200 shadow-sm bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We typically respond to all inquiries within 24-48 hours
                    during business days. For urgent matters, please email us
                    directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black text-center mb-8">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Story Tips</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Have a breaking news tip or exclusive story?
                  </p>
                  <Link
                    href="mailto:tips@techsphere.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    tips@techsphere.com
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">
                    Partnerships
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Interested in collaborating or partnering with us?
                  </p>
                  <Link
                    href="mailto:partnerships@techsphere.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    partnerships@techsphere.com
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Feedback</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Help us improve by sharing your thoughts
                  </p>
                  <Link
                    href="mailto:feedback@techsphere.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    feedback@techsphere.com
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
