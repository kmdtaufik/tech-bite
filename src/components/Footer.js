"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Github, Linkedin } from "lucide-react";

const sectionLinks = [
  { name: "AI", href: "/ai" },
  { name: "Gadgets", href: "/gadgets" },
  { name: "Startups", href: "/startups" },
  { name: "Programming", href: "/programming" },
  { name: "Cybersecurity", href: "/cybersecurity" },
];

const supportLinks = [
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
];

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/techsphere", icon: Twitter },
  { name: "GitHub", href: "https://github.com/techsphere", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/techsphere",
    icon: Linkedin,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              TechSphere is your premier destination for the latest technology
              news, insights, and analysis. We cover everything from AI
              breakthroughs to startup innovations.
            </p>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-block transition-colors"
            >
              Learn more about us →
            </Link>
          </div>

          {/* Sections Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Sections</h3>
            <ul className="space-y-2">
              {sectionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Stay updated with our latest tech news and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <IconComponent className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-600 text-sm">
            © 2025 TechSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
