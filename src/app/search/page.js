"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Clock, User, X, FileText } from "lucide-react";

// Mock search results data
const mockResults = [
  {
    id: 1,
    title: "OpenAI Releases GPT-5 with Revolutionary Capabilities",
    snippet:
      "The latest AI model shows unprecedented reasoning abilities and multimodal understanding, setting new benchmarks across various tasks and applications.",
    image: "/placeholder.svg?height=150&width=200",
    category: "AI",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    tags: ["AI", "Machine Learning", "OpenAI"],
  },
  {
    id: 2,
    title: "Apple's New MacBook Pro Features M4 Chip Performance Analysis",
    snippet:
      "Comprehensive benchmarks reveal 40% performance improvement over previous generation processors in both single and multi-core tasks.",
    image: "/placeholder.svg?height=150&width=200",
    category: "Gadgets",
    author: "Michael Rodriguez",
    publishedAt: "4 hours ago",
    readTime: "8 min read",
    tags: ["Apple", "MacBook", "Hardware"],
  },
  {
    id: 3,
    title: "Tesla's Robotaxi Service Launches in Major Cities",
    snippet:
      "Autonomous vehicle service now available in New York, Los Angeles, and San Francisco, marking a significant milestone in self-driving technology.",
    image: "/placeholder.svg?height=150&width=200",
    category: "Startups",
    author: "Emily Watson",
    publishedAt: "6 hours ago",
    readTime: "6 min read",
    tags: ["Tesla", "Autonomous Vehicles", "Transportation"],
  },
  {
    id: 4,
    title: "New Cybersecurity Threat Targets Cloud Infrastructure",
    snippet:
      "Security researchers discover sophisticated attack vector affecting major cloud providers, highlighting the need for enhanced protection measures.",
    image: "/placeholder.svg?height=150&width=200",
    category: "Cybersecurity",
    author: "David Kim",
    publishedAt: "8 hours ago",
    readTime: "7 min read",
    tags: ["Cybersecurity", "Cloud", "Security"],
  },
  {
    id: 5,
    title: "GitHub Copilot Gets Major Update with Voice Commands",
    snippet:
      "Developers can now code using natural language voice instructions, making programming more accessible and efficient than ever before.",
    image: "/placeholder.svg?height=150&width=200",
    category: "Programming",
    author: "Lisa Zhang",
    publishedAt: "10 hours ago",
    readTime: "4 min read",
    tags: ["GitHub", "Programming", "AI Tools"],
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
const dateFilters = [
  "Any time",
  "Last 24 hours",
  "Last 7 days",
  "Last month",
  "Last year",
];
const authors = [
  "All",
  "Dr. Sarah Chen",
  "Michael Rodriguez",
  "Emily Watson",
  "David Kim",
  "Lisa Zhang",
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "All",
    date: "Any time",
    author: "All",
  });

  const resultsPerPage = 5;
  const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentResults = filteredResults.slice(
    startIndex,
    startIndex + resultsPerPage
  );

  // Simulate search
  const performSearch = async (query) => {
    if (!query.trim()) {
      setResults([]);
      setFilteredResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Filter results based on search query
    const searchResults = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.snippet.toLowerCase().includes(query.toLowerCase()) ||
        result.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        )
    );

    setResults(searchResults);
    setFilteredResults(searchResults);
    setIsLoading(false);
    setCurrentPage(1);
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...results];

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (result) => result.category === filters.category
      );
    }

    if (filters.author !== "All") {
      filtered = filtered.filter((result) => result.author === filters.author);
    }

    // Date filtering would be implemented with actual dates
    // For demo purposes, we'll keep all results

    setFilteredResults(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    applyFilters();
  }, [filters, results]);

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const clearFilters = () => {
    setFilters({
      category: "All",
      date: "Any time",
      author: "All",
    });
  };

  const hasActiveFilters =
    filters.category !== "All" ||
    filters.date !== "Any time" ||
    filters.author !== "All";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
                Search TechSphere
              </h1>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, topics, or authors..."
                    className="pl-12 pr-4 py-4 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  />
                </div>
              </form>

              {/* Filter Toggle */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center hover:bg-blue-50 hover:border-blue-300"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-blue-100 text-blue-800"
                    >
                      Active
                    </Badge>
                  )}
                </Button>

                {searchQuery && (
                  <p className="text-gray-600">
                    {isLoading
                      ? "Searching..."
                      : `${filteredResults.length} results for "${searchQuery}"`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Filters Panel */}
            {showFilters && (
              <Card className="mb-8 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">
                      Filter Results
                    </h3>
                    {hasActiveFilters && (
                      <Button
                        variant="ghost"
                        onClick={clearFilters}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>

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

                    {/* Date Filter */}
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Date
                      </label>
                      <Select
                        value={filters.date}
                        onValueChange={(value) =>
                          setFilters({ ...filters, date: value })
                        }
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {dateFilters.map((date) => (
                            <SelectItem key={date} value={date}>
                              {date}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Author Filter */}
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Author
                      </label>
                      <Select
                        value={filters.author}
                        onValueChange={(value) =>
                          setFilters({ ...filters, author: value })
                        }
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {authors.map((author) => (
                            <SelectItem key={author} value={author}>
                              {author}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Search Results */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Searching...</p>
              </div>
            ) : searchQuery && filteredResults.length === 0 ? (
              /* Empty State */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any articles matching "{searchQuery}". Try
                  different keywords or check your spelling.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>Suggestions:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Try broader search terms</li>
                    <li>Check for typos in your search</li>
                    <li>Use different keywords</li>
                    <li>Clear active filters</li>
                  </ul>
                </div>
              </div>
            ) : currentResults.length > 0 ? (
              <>
                {/* Results List */}
                <div className="space-y-6 mb-8">
                  {currentResults.map((result) => (
                    <Card
                      key={result.id}
                      className="border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          {/* Thumbnail */}
                          <div className="md:w-48 flex-shrink-0">
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                              <img
                                src={result.image || "/placeholder.svg"}
                                alt={result.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {result.category}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {result.readTime}
                              </span>
                            </div>

                            <h3 className="text-xl font-semibold text-black mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                              {result.title}
                            </h3>

                            <p className="text-gray-600 mb-3 line-clamp-2">
                              {result.snippet}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                <span>{result.author}</span>
                              </div>
                              <span>{result.publishedAt}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mt-3">
                              {result.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs hover:bg-blue-50 hover:border-blue-300 cursor-pointer"
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={
                              currentPage === page ? "bg-black text-white" : ""
                            }
                          >
                            {page}
                          </Button>
                        )
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Page {currentPage} of {totalPages}
                    </p>
                  </div>
                )}
              </>
            ) : !searchQuery ? (
              /* Initial State */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Start your search
                </h3>
                <p className="text-gray-600">
                  Enter keywords above to find articles, topics, or authors
                  across TechSphere.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
