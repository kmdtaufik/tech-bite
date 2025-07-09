"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
import { ChevronLeft, Clock, User, Calendar, Tag } from "lucide-react";
import Link from "next/link";

// Mock articles for a specific tag
const mockArticles = [
  {
    id: 1,
    title: "OpenAI Releases GPT-5 with Revolutionary Capabilities",
    excerpt:
      "The latest AI model shows unprecedented reasoning abilities and multimodal understanding, setting new benchmarks.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
    date: "2025-01-09",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Google's Gemini AI Achieves Human-Level Performance",
    excerpt:
      "New benchmarks show Google's latest AI model matching human performance in complex reasoning tasks.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "Michael Rodriguez",
    publishedAt: "1 day ago",
    date: "2025-01-08",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "AI in Healthcare: Breakthrough in Cancer Detection",
    excerpt:
      "Machine learning algorithms now detect early-stage cancer with 95% accuracy, potentially saving lives.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "Dr. Emily Watson",
    publishedAt: "2 days ago",
    date: "2025-01-07",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Ethics of AI: Addressing Bias in Machine Learning",
    excerpt:
      "Industry leaders discuss strategies for creating more fair and unbiased AI systems.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "David Kim",
    publishedAt: "3 days ago",
    date: "2025-01-06",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "AI-Powered Code Generation: The Future of Programming",
    excerpt:
      "How artificial intelligence is transforming software development and coding practices.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    author: "Lisa Zhang",
    publishedAt: "1 week ago",
    date: "2025-01-02",
    readTime: "9 min read",
  },
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
];

export default function TagDetailPage() {
  const params = useParams();
  const tagSlug = params.tag;
  const tagName =
    tagSlug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) ||
    "AI";

  const [articles, setArticles] = useState(mockArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // Sort articles
  useEffect(() => {
    const sorted = [...mockArticles];
    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "popular":
        sorted.sort(() => Math.random() - 0.5); // Random for demo
        break;
    }
    setArticles(sorted);
    setCurrentPage(1);
  }, [sortBy]);

  const tagDescription = {
    ai: "Explore the latest developments in artificial intelligence, machine learning, and neural networks.",
    "machine-learning":
      "Deep dive into machine learning algorithms, applications, and breakthrough research.",
    "quantum-computing":
      "Discover quantum computing advances and their potential impact on technology.",
    cybersecurity:
      "Stay informed about security threats, solutions, and best practices.",
    tesla:
      "Follow Tesla's innovations in electric vehicles and autonomous driving technology.",
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link
                href="/tags"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to All Tags
              </Link>

              <div className="flex items-center mb-4">
                <Tag className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  #{tagName}
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                {tagDescription[tagSlug] ||
                  `Articles and insights related to ${tagName}.`}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  {articles.length} Articles
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <p className="text-gray-600">
                Showing {startIndex + 1}-
                {Math.min(startIndex + articlesPerPage, articles.length)} of{" "}
                {articles.length} articles
              </p>

              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-black">
                  Sort by:
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 border-gray-300">
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
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
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
                        variant={currentPage === page ? "default" : "outline"}
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
          </div>
        </div>
      </main>
    </div>
  );
}
