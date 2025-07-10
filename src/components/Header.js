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
import { Menu, Search, Moon, Sun, ChevronDown, User } from "lucide-react";

const categoryItems = [
  { name: "AI", href: "/ai" },
  { name: "Gadgets", href: "/gadgets" },
  { name: "Startups", href: "/startups" },
  { name: "Programming", href: "/programming" },
  { name: "Cybersecurity", href: "/cybersecurity" },
];

const contentItems = [
  { name: "Featured", href: "/featured" },
  { name: "Breaking News", href: "/breaking" },
  { name: "Opinions", href: "/opinions" },
  { name: "Reviews", href: "/reviews" },
  { name: "All News", href: "/news" },
];

const mediaItems = [
  { name: "Videos", href: "/videos" },
  { name: "Podcasts", href: "/podcasts" },
];

const communityItems = [
  { name: "Events", href: "/events" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Tags", href: "/tags" },
];

const aboutItems = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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
          <Link
            href="/"
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            Home
          </Link>

          {/* Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Categories
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              {categoryItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Content Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Content
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              {contentItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Media Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Media
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              {mediaItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Community Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Community
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              {communityItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              About
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              {aboutItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
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

          {/* User Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-black hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              <DropdownMenuItem asChild>
                <Link
                  href="/signin"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                >
                  Sign In
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                >
                  Sign Up
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/admin"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                >
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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

                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 px-4">
                    Categories
                  </div>
                  {categoryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 px-4">
                    Content
                  </div>
                  {contentItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 px-4">
                    Media
                  </div>
                  {mediaItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 px-4">
                    Community
                  </div>
                  {communityItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 px-4">
                    About
                  </div>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="text-sm font-semibold text-gray-900 px-4">
                    Account
                  </div>
                  <Link
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-black transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-gray-100 block"
                  >
                    Admin Dashboard
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
