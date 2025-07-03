"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  Clock,
  User,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  LinkIcon,
  MessageCircle,
  Calendar,
} from "lucide-react";

export default function ArticlePage({ article, relatedPosts = [] }) {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      message:
        "Great article! Really insightful analysis of the current AI landscape.",
      publishedAt: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      message:
        "Thanks for breaking this down in such an accessible way. Looking forward to more content like this.",
      publishedAt: "5 hours ago",
    },
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      name: comment.name,
      message: comment.message,
      publishedAt: "Just now",
    };
    setComments([newComment, ...comments]);
    setComment({ name: "", email: "", message: "" });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href={`/${article.category.toLowerCase()}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to {article.category}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {article.category}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{article.publishedAt}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              {article.featuredImage && (
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
                  <img
                    src={article.featuredImage || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-gray-800 leading-relaxed space-y-6">
                {article.content.map((block, index) => {
                  switch (block.type) {
                    case "paragraph":
                      return (
                        <p key={index} className="text-lg leading-relaxed">
                          {block.text}
                        </p>
                      );
                    case "heading":
                      return (
                        <h2
                          key={index}
                          className="text-2xl font-bold text-black mt-8 mb-4"
                        >
                          {block.text}
                        </h2>
                      );
                    case "image":
                      return (
                        <div key={index} className="my-8">
                          <img
                            src={block.src || "/placeholder.svg"}
                            alt={block.alt}
                            className="w-full rounded-lg shadow-sm"
                          />
                          {block.caption && (
                            <p className="text-sm text-gray-600 text-center mt-2 italic">
                              {block.caption}
                            </p>
                          )}
                        </div>
                      );
                    case "quote":
                      return (
                        <blockquote
                          key={index}
                          className="border-l-4 border-blue-500 pl-6 my-8 italic text-xl text-gray-700"
                        >
                          {block.text}
                        </blockquote>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="hover:bg-blue-50 hover:border-blue-300 cursor-pointer"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Share Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">
                Share this article
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("twitter")}
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("facebook")}
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("copy")}
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Comments Section */}
            <section className="mb-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-black">
                  Comments ({comments.length})
                </h3>
              </div>

              {/* Comment Form */}
              <Card className="mb-6 border border-gray-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-black mb-4">
                    Leave a Comment
                  </h4>
                  <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={comment.name}
                        onChange={(e) =>
                          setComment({ ...comment, name: e.target.value })
                        }
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={comment.email}
                        onChange={(e) =>
                          setComment({ ...comment, email: e.target.value })
                        }
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <Textarea
                      placeholder="Your Comment"
                      value={comment.message}
                      onChange={(e) =>
                        setComment({ ...comment, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="border-gray-300 focus:border-blue-500"
                    />
                    <Button
                      type="submit"
                      className="bg-black hover:bg-gray-800 text-white"
                    >
                      Post Comment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Card key={comment.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-black">
                          {comment.name}
                        </h5>
                        <span className="text-sm text-gray-500">
                          {comment.publishedAt}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-black mb-3">
                    About the Author
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-medium text-black">
                        {article.author}
                      </h4>
                      <p className="text-sm text-gray-600">Tech Journalist</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Experienced technology writer covering AI, cybersecurity,
                    and emerging tech trends.
                  </p>
                </CardContent>
              </Card>

              {/* Share Widget */}
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Share2 className="h-4 w-4 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-black">Share Article</h3>
                  </div>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start hover:bg-blue-50 bg-transparent"
                      onClick={() => handleShare("twitter")}
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Share on Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start hover:bg-blue-50 bg-transparent"
                      onClick={() => handleShare("linkedin")}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Share on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-black mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 mb-2"
                  >
                    {post.category}
                  </Badge>
                  <h4 className="font-semibold text-black mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link href={`/article/${post.id}`}>{post.title}</Link>
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
