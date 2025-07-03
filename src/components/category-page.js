"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Clock, User, TrendingUp, Tag } from "lucide-react";

export default function CategoryPage({
  category,
  description,
  articles = [],
  popularPosts = [],
  tags = [],
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const articlesPerPage = 9;

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing to", category, "newsletter:", email);
    setEmail("");
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">{category}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-black mb-4">{category}</h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                {description}
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {currentArticles.map((article) => (
                <Card
                  key={article.id}
                  className="hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {article.subcategory || category}
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
                      {article.summary}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <span>{article.publishedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4">
              {currentPage < totalPages && (
                <Button
                  onClick={handleLoadMore}
                  className="bg-black hover:bg-gray-800 text-white px-6"
                >
                  Load More Articles
                </Button>
              )}

              {totalPages > 1 && (
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
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
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Popular Posts */}
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-black">
                    Popular in {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
                    >
                      <h4 className="font-medium text-black text-sm mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link href={`/article/${post.id}`}>{post.title}</Link>
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.views} views</span>
                        <span>{post.publishedAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-black">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-black mb-2">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest {category.toLowerCase()} news delivered to your
                  inbox.
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
                    Subscribe to {category}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
