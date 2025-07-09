"use client";

import { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  User,
  Calendar,
  Filter,
  Grid,
  List,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// Mock news data
const mockNews = [
  {
    id: 1,
    title: "OpenAI Releases GPT-5 with Revolutionary Capabilities",
    excerpt:
      "The latest AI model shows unprecedented reasoning abilities and multimodal understanding, setting new benchmarks across various tasks.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
    date: "2025-01-09",
    readTime: "5 min read",
    tags: ["AI", "Machine Learning", "OpenAI", "GPT"],
  },
  {
    id: 2,
    title: "Apple's New MacBook Pro Features M4 Chip Performance Analysis",
    excerpt:
      "Comprehensive benchmarks reveal 40% performance improvement over previous generation processors in creative workflows.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gadgets",
    author: "Michael Rodriguez",
    publishedAt: "4 hours ago",
    date: "2025-01-09",
    readTime: "8 min read",
    tags: ["Apple", "MacBook", "Hardware", "Performance"],
  },
  {
    id: 3,
    title: "Tesla's Robotaxi Service Launches in Major Cities",
    excerpt:
      "Autonomous vehicle service now available in New York, Los Angeles, and San Francisco, marking a significant milestone.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Startups",
    author: "Emily Watson",
    publishedAt: "6 hours ago",
    date: "2025-01-09",
    readTime: "6 min read",
    tags: ["Tesla", "Autonomous Vehicles", "Transportation", "Innovation"],
  },
  {
    id: 4,
    title: "New Cybersecurity Threat Targets Cloud Infrastructure",
    excerpt:
      "Security researchers discover sophisticated attack vector affecting major cloud providers worldwide.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Cybersecurity",
    author: "David Kim",
    publishedAt: "8 hours ago",
    date: "2025-01-08",
    readTime: "7 min read",
    tags: ["Cybersecurity", "Cloud", "Security", "Enterprise"],
  },
  {
    id: 5,
    title: "GitHub Copilot Gets Major Update with Voice Commands",
    excerpt:
      "Developers can now code using natural language voice instructions, making programming more accessible.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    author: "Lisa Zhang",
    publishedAt: "10 hours ago",
    date: "2025-01-08",
    readTime: "4 min read",
    tags: ["GitHub", "Programming", "AI Tools", "Development"],
  },
  {
    id: 6,
    title: "Meta Announces New VR Headset with 8K Display",
    excerpt:
      "Next-generation virtual reality device promises unprecedented visual clarity and immersive experiences.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gadgets",
    author: "James Park",
    publishedAt: "12 hours ago",
    date: "2025-01-08",
    readTime: "5 min read",
    tags: ["Meta", "VR", "Virtual Reality", "Display Technology"],
  },
  {
    id: 7,
    title: "Quantum Computing Breakthrough: IBM's Latest Achievement",
    excerpt:
      "IBM researchers demonstrate quantum advantage in practical applications, bringing quantum computing closer to reality.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "Dr. Sarah Chen",
    publishedAt: "1 day ago",
    date: "2025-01-07",
    readTime: "9 min read",
    tags: ["Quantum Computing", "IBM", "Research", "Innovation"],
  },
  {
    id: 8,
    title: "5G Network Security: New Challenges and Solutions",
    excerpt:
      "As 5G networks expand globally, security experts identify new vulnerabilities and propose comprehensive solutions.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Cybersecurity",
    author: "Michael Rodriguez",
    publishedAt: "1 day ago",
    date: "2025-01-07",
    readTime: "6 min read",
    tags: ["5G", "Network Security", "Telecommunications", "Infrastructure"],
  },
  {
    id: 9,
    title: "Startup Funding Reaches Record High in Q4 2024",
    excerpt:
      "Venture capital investments in tech startups hit unprecedented levels, with AI companies leading the charge.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Startups",
    author: "Emily Watson",
    publishedAt: "2 days ago",
    date: "2025-01-06",
    readTime: "7 min read",
    tags: ["Startups", "Venture Capital", "Funding", "Investment"],
  },
  {
    id: 10,
    title: "React 19 Beta: New Features and Performance Improvements",
    excerpt:
      "The latest React beta introduces concurrent features and significant performance optimizations for modern web development.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    author: "Lisa Zhang",
    publishedAt: "2 days ago",
    date: "2025-01-06",
    readTime: "8 min read",
    tags: ["React", "Web Development", "JavaScript", "Frontend"],
  },
];

const categories = [
  "All",
  "AI",
  "Gadgets",
  "Startups",
  "Programming",
  "Cybersecurity",
];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
];

const allTags = [
  "AI",
  "Machine Learning",
  "Apple",
  "Tesla",
  "Cybersecurity",
  "Programming",
  "React",
  "5G",
  "VR",
];

export default function NewsPage() {
  const [articles, setArticles] = useState(mockNews);
  const [filteredArticles, setFilteredArticles] = useState(mockNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [filters, setFilters] = useState({
    category: "All",
    sortBy: "newest",
    tag: "All",
  });
  const [showFilters, setShowFilters] = useState(false);

  const articlesPerPage = 9;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...articles];

    // Filter by category
    if (filters.category !== "All") {
      filtered = filtered.filter(
        (article) => article.category === filters.category
      );
    }

    // Filter by tag
    if (filters.tag !== "All") {
      filtered = filtered.filter((article) =>
        article.tags.includes(filters.tag)
      );
    }

    // Sort articles
    switch (filters.sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "popular":
        // For demo, we'll randomize since we don't have view counts
        filtered.sort(() => Math.random() - 0.5);
        break;
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [filters, articles]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const clearFilters = () => {
    setFilters({
      category: "All",
      sortBy: "newest",
      tag: "All",
    });
  };

  const hasActiveFilters =
    filters.category !== "All" ||
    filters.tag !== "All" ||
    filters.sortBy !== "newest";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                All News
              </h1>
              <p className="text-xl text-gray-600">
                Stay up to date with the latest technology news, insights, and
                analysis from TechSphere.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Filters and Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              {/* Filter Toggle and Results Count */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center hover:bg-blue-50 hover:border-blue-300"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  <ChevronDown
                    className={`h-4 w-4 ml-2 transition-transform ${
                      showFilters ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                <p className="text-gray-600">
                  {filteredArticles.length} article
                  {filteredArticles.length !== 1 ? "s" : ""}
                </p>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-black text-white" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-black text-white" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <Card className="mb-8 border border-gray-200">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Category
                      </label>
                      <Select
                        value={filters.category}
                        onValueChange={(value) =>
                          setFilters({ ...filters, category: value })
                        }
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort Filter */}
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Sort By
                      </label>
                      <Select
                        value={filters.sortBy}
                        onValueChange={(value) =>
                          setFilters({ ...filters, sortBy: value })
                        }
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sortOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Tag Filter */}
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Tag
                      </label>
                      <Select
                        value={filters.tag}
                        onValueChange={(value) =>
                          setFilters({ ...filters, tag: value })
                        }
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All Tags</SelectItem>
                          {allTags.map((tag) => (
                            <SelectItem key={tag} value={tag}>
                              {tag}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Articles Grid/List */}
            {currentArticles.length > 0 ? (
              <>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                      : "space-y-6 mb-8"
                  }
                >
                  {currentArticles.map((article) => (
                    <Card
                      key={article.id}
                      className={`border border-gray-200 hover:shadow-lg transition-shadow ${
                        viewMode === "list" ? "flex flex-col md:flex-row" : ""
                      }`}
                    >
                      {viewMode === "grid" ? (
                        <>
                          <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                            <img
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {article.category}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.readTime}
                              </span>
                            </div>

                            <h3 className="font-semibold text-black mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                              <Link href={`/article/${article.id}`}>
                                {article.title}
                              </Link>
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{article.publishedAt}</span>
                              </div>
                            </div>
                          </CardContent>
                        </>
                      ) : (
                        <CardContent className="p-6 flex flex-col md:flex-row gap-4">
                          <div className="md:w-48 flex-shrink-0">
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                              <img
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {article.category}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.readTime}
                              </span>
                            </div>

                            <h3 className="text-xl font-semibold text-black mb-2 hover:text-blue-600 transition-colors">
                              <Link href={`/article/${article.id}`}>
                                {article.title}
                              </Link>
                            </h3>

                            <p className="text-gray-600 mb-3 line-clamp-2">
                              {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{article.publishedAt}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-4">
                    {currentPage < totalPages && (
                      <Button
                        onClick={handleLoadMore}
                        className="bg-black hover:bg-gray-800 text-white px-6"
                      >
                        Load More Articles
                      </Button>
                    )}

                    <div className="flex items-center space-x-2">
                      {Array.from(
                        { length: Math.min(totalPages, 5) },
                        (_, i) => i + 1
                      ).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage >= page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className={
                            currentPage >= page ? "bg-black text-white" : ""
                          }
                        >
                          {page}
                        </Button>
                      ))}
                      {totalPages > 5 && (
                        <span className="text-gray-500">...</span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500">
                      Showing {startIndex + 1}-
                      {Math.min(
                        startIndex + articlesPerPage,
                        filteredArticles.length
                      )}{" "}
                      of {filteredArticles.length}
                    </p>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters to see more results.
                </p>
                <Button
                  onClick={clearFilters}
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
