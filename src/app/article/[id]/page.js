"use client";

import { useState } from "react";
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
  Twitter,
  Facebook,
  Linkedin,
  LinkIcon,
  MessageCircle,
  Calendar,
  Star,
} from "lucide-react";
import Link from "next/link";

// Mock article data
const article = {
  id: 1,
  title:
    "The Future of Artificial Intelligence: How AI Will Transform Every Industry by 2030",
  author: "Dr. Sarah Chen",
  publishedAt: "March 15, 2025",
  readTime: "12 min read",
  category: "AI",
  featuredImage: "/placeholder.svg?height=400&width=800",
  tags: [
    "AI",
    "Machine Learning",
    "Future Tech",
    "Industry Transformation",
    "Automation",
  ],
  content: [
    {
      type: "paragraph",
      text: "Artificial Intelligence is no longer a concept confined to science fiction. As we approach 2030, AI technologies are rapidly evolving and beginning to reshape every aspect of our daily lives and business operations. From healthcare diagnostics to autonomous vehicles, the applications seem limitless.",
    },
    {
      type: "heading",
      text: "The Current State of AI Technology",
    },
    {
      type: "paragraph",
      text: "Today's AI systems have achieved remarkable milestones. Large Language Models like GPT-4 and Claude can engage in sophisticated conversations, write code, and solve complex problems. Computer vision systems can identify objects with superhuman accuracy, and machine learning algorithms are making predictions that were impossible just a few years ago.",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=300&width=600",
      alt: "AI technology visualization",
      caption: "Modern AI systems processing data across multiple domains",
    },
    {
      type: "code",
      language: "python",
      code: `# Example: Simple neural network implementation
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])`,
    },
    {
      type: "heading",
      text: "Industry Transformation Predictions",
    },
    {
      type: "paragraph",
      text: "Healthcare will see AI-powered diagnostic tools that can detect diseases earlier and more accurately than human doctors. The financial sector will leverage AI for fraud detection, risk assessment, and personalized financial advice. Manufacturing will become increasingly automated with AI-driven robotics and predictive maintenance systems.",
    },
    {
      type: "quote",
      text: "AI is not just a technology trend; it's a fundamental shift in how we approach problem-solving and decision-making across all industries.",
    },
  ],
};

const relatedPosts = [
  {
    id: 2,
    title: "Machine Learning Algorithms Explained: A Beginner's Guide",
    excerpt:
      "Understanding the fundamental concepts behind machine learning and how different algorithms work.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    publishedAt: "2 days ago",
  },
  {
    id: 3,
    title: "The Ethics of AI: Balancing Innovation with Responsibility",
    excerpt:
      "Exploring the ethical implications of AI development and deployment in modern society.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    publishedAt: "1 week ago",
  },
  {
    id: 4,
    title: "Quantum Computing and AI: The Next Frontier",
    excerpt:
      "How quantum computing could revolutionize artificial intelligence and machine learning.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    publishedAt: "2 weeks ago",
  },
];

export default function ArticleDetailPage() {
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
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
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
                      case "code":
                        return (
                          <div key={index} className="my-8">
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-sm">
                                  {block.language}
                                </span>
                              </div>
                              <pre className="text-green-400 text-sm">
                                <code>{block.code}</code>
                              </pre>
                            </div>
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
                      <Link
                        href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        #{tag}
                      </Link>
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

                {/* Article Rating */}
                <Card className="border border-gray-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-black mb-3">
                      Rate this Article
                    </h3>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 text-gray-300 hover:text-yellow-400 cursor-pointer"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Help us improve our content
                    </p>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>

          {/* Related Articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-black mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-gray-500">{post.publishedAt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
