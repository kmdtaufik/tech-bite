"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, Moon, Sun, ChevronDown } from "lucide-react";

const navigationStructure = {
  main: [{ name: "Home", href: "/" }],
  categories: [
    { name: "AI", href: "/ai" },
    { name: "Gadgets", href: "/gadgets" },
    { name: "Startups", href: "/startups" },
    { name: "Programming", href: "/programming" },
    { name: "Cybersecurity", href: "/cybersecurity" },
  ],
  content: [
    { name: "Featured", href: "/featured" },
    { name: "Breaking News", href: "/breaking" },
    { name: "Opinions", href: "/opinions" },
    { name: "Reviews", href: "/reviews" },
    { name: "All News", href: "/news" },
  ],
  media: [
    { name: "Videos", href: "/videos" },
    { name: "Podcasts", href: "/podcasts" },
  ],
  community: [
    { name: "Events", href: "/events" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Tags", href: "/tags" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

// Flatten for mobile menu
const allNavigationItems = [
  ...navigationStructure.main,
  ...navigationStructure.categories,
  ...navigationStructure.content,
  ...navigationStructure.media,
  ...navigationStructure.community,
  ...navigationStructure.company,
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-black">TechSphere</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Home */}
          <Link
            href="/"
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            Home
          </Link>

          {/* Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
            >
              {navigationStructure.categories.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="w-full px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Content Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                Content
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
            >
              {navigationStructure.content.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="w-full px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Media Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                Media
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
            >
              {navigationStructure.media.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="w-full px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Community Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                Community
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
            >
              {navigationStructure.community.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="w-full px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
            >
              {navigationStructure.company.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="w-full px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-black hover:bg-gray-100"
            onClick={() => (window.location.href = "/search")}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="text-gray-700 hover:text-black hover:bg-gray-100"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-700 hover:text-black hover:bg-gray-100"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white border-gray-200"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <div className="text-xl font-bold text-black mb-4">
                  TechSphere
                </div>

                {/* Mobile Navigation - Organized by sections */}
                <div className="space-y-6">
                  {/* Main */}
                  <div>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 block"
                    >
                      Home
                    </Link>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 px-4">
                      Categories
                    </h3>
                    {navigationStructure.categories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 px-4">
                      Content
                    </h3>
                    {navigationStructure.content.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Media */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 px-4">
                      Media
                    </h3>
                    {navigationStructure.media.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Community */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 px-4">
                      Community
                    </h3>
                    {navigationStructure.community.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Company */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 px-4">
                      About
                    </h3>
                    {navigationStructure.company.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
