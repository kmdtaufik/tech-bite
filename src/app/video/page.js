"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Eye, Filter } from "lucide-react";
import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "iPhone 15 Pro Max: Complete Review and Camera Test",
    description:
      "In-depth review covering design, performance, camera quality, and real-world usage scenarios.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "15:32",
    views: "2.1M",
    publishedAt: "2 days ago",
    category: "Reviews",
    author: "TechSphere Reviews",
  },
  {
    id: 2,
    title: "AI Revolution: ChatGPT vs Claude vs Gemini Comparison",
    description:
      "Comprehensive comparison of the top AI language models and their capabilities.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "22:45",
    views: "1.8M",
    publishedAt: "1 week ago",
    category: "AI",
    author: "TechSphere AI",
  },
  {
    id: 3,
    title: "Tesla Cybertruck: First Drive and Honest Review",
    description:
      "Taking Tesla's controversial pickup truck for a comprehensive test drive.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "18:20",
    views: "3.2M",
    publishedAt: "2 weeks ago",
    category: "Automotive",
    author: "TechSphere Auto",
  },
  {
    id: 4,
    title: "MacBook Pro M4: Performance Benchmarks and Real-World Tests",
    description:
      "Testing Apple's latest MacBook Pro with the new M4 chip across various professional workflows.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "12:15",
    views: "1.5M",
    publishedAt: "3 weeks ago",
    category: "Reviews",
    author: "TechSphere Reviews",
  },
  {
    id: 5,
    title: "The Future of VR: Meta Quest 4 vs Apple Vision Pro",
    description:
      "Comparing the latest VR headsets and exploring the future of virtual reality technology.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "25:10",
    views: "2.7M",
    publishedAt: "1 month ago",
    category: "VR/AR",
    author: "TechSphere VR",
  },
  {
    id: 6,
    title: "Cybersecurity in 2025: New Threats and How to Protect Yourself",
    description:
      "Essential cybersecurity tips and analysis of emerging threats in the digital landscape.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "16:45",
    views: "890K",
    publishedAt: "1 month ago",
    category: "Security",
    author: "TechSphere Security",
  },
];

const categories = [
  "All Categories",
  "Reviews",
  "AI",
  "Automotive",
  "VR/AR",
  "Security",
  "Tutorials",
];
const durations = ["All Durations", "Under 10 min", "10-20 min", "20+ min"];
const sortOptions = ["Newest", "Most Popular", "Oldest"];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Play className="h-8 w-8 text-red-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  TechSphere Videos
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Watch our latest video reviews, tutorials, and tech analysis.
                Get visual insights into the products and trends shaping
                technology.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-black">Filter videos:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48 border-gray-300">
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

                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Featured Video */}
            <Card className="mb-12 border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-3/5 relative group">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={videos[0].thumbnail || "/placeholder.svg"}
                      alt={videos[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm">
                    {videos[0].duration}
                  </div>
                </div>
                <CardContent className="lg:w-2/5 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-red-100 text-red-800 border-red-300">
                      Featured Video
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {videos[0].category}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold text-black mb-4 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/videos/${videos[0].id}`}>
                      {videos[0].title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {videos[0].description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>By {videos[0].author}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{videos[0].views} views</span>
                      </div>
                      <span>{videos[0].publishedAt}</span>
                    </div>
                  </div>

                  <Link
                    href={`/videos/${videos[0].id}`}
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Watch Video
                  </Link>
                </CardContent>
              </div>
            </Card>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(1).map((video) => (
                <Card
                  key={video.id}
                  className="border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {video.category}
                      </Badge>
                    </div>

                    <h3 className="font-bold text-black mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link href={`/videos/${video.id}`}>{video.title}</Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>By {video.author}</span>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{video.views}</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      {video.publishedAt}
                    </div>

                    <Link
                      href={`/videos/${video.id}`}
                      className="block w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      Watch Video
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Subscribe CTA */}
            <Card className="mt-12 bg-red-50 border border-red-200">
              <CardContent className="p-8 text-center">
                <Play className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-4">
                  Never Miss a Video
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Subscribe to our YouTube channel for the latest tech reviews,
                  tutorials, and analysis delivered straight to your feed.
                </p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Subscribe to TechSphere
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
