"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const breakingNews = [
  {
    id: 1,
    title: "BREAKING: Major Data Breach Affects 50 Million Users Worldwide",
    excerpt:
      "A sophisticated cyberattack has compromised user data from multiple tech platforms.",
    timestamp: "2 minutes ago",
    priority: "urgent",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "OpenAI Announces GPT-5 Release Date",
    excerpt:
      "The next generation of AI language models will be available to the public next month.",
    timestamp: "15 minutes ago",
    priority: "high",
    category: "AI",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Tesla Stock Surges 20% After Robotaxi Announcement",
    excerpt:
      "Elon Musk reveals plans for fully autonomous taxi service in major cities.",
    timestamp: "1 hour ago",
    priority: "high",
    category: "Startups",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const recentUpdates = [
  {
    id: 1,
    title: "Apple announces new MacBook Pro with M4 chip",
    time: "3 hours ago",
  },
  {
    id: 2,
    title: "Google's quantum computer achieves new milestone",
    time: "4 hours ago",
  },
  {
    id: 3,
    title: "Microsoft acquires AI startup for $2.1 billion",
    time: "5 hours ago",
  },
  {
    id: 4,
    title: "Meta's VR headset sales exceed expectations",
    time: "6 hours ago",
  },
  {
    id: 5,
    title: "Amazon Web Services launches new AI tools",
    time: "7 hours ago",
  },
];

export default function BreakingNewsPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-300";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-300";
      default:
        return "bg-blue-100 text-blue-800 border-blue-300";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4" />;
      case "high":
        return <Zap className="h-4 w-4" />;
      default:
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Breaking News Banner */}
        <section className="bg-red-600 text-white py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
              <span className="font-bold text-lg">BREAKING NEWS</span>
              <span className="mx-4">•</span>
              <span className="text-sm">
                Live updates • {currentTime.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </section>

        {/* Page Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Breaking News
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay informed with the latest breaking technology news and
                real-time updates from around the world.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Breaking News */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                    <Zap className="h-6 w-6 text-red-600 mr-2" />
                    Latest Breaking News
                  </h2>

                  <div className="space-y-6">
                    {breakingNews.map((news) => (
                      <Card
                        key={news.id}
                        className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <div className="aspect-video md:aspect-auto md:h-full bg-gray-200 overflow-hidden">
                              <img
                                src={news.image || "/placeholder.svg"}
                                alt={news.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <CardContent className="md:w-2/3 p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge
                                className={getPriorityColor(news.priority)}
                              >
                                {getPriorityIcon(news.priority)}
                                <span className="ml-1 capitalize">
                                  {news.priority}
                                </span>
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {news.category}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-black mb-3 hover:text-blue-600 transition-colors">
                              <Link href={`/article/${news.id}`}>
                                {news.title}
                              </Link>
                            </h3>

                            <p className="text-gray-600 mb-4">{news.excerpt}</p>

                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{news.timestamp}</span>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Live Updates Ticker */}
                <Card className="mb-6 border border-gray-200">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-black mb-4 flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      Live Updates
                    </h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {recentUpdates.map((update) => (
                        <div
                          key={update.id}
                          className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
                        >
                          <h4 className="font-medium text-black text-sm mb-1 hover:text-blue-600 transition-colors cursor-pointer">
                            {update.title}
                          </h4>
                          <p className="text-xs text-gray-500">{update.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Breaking News Alert Signup */}
                <Card className="border border-gray-200">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-black mb-3">
                      Breaking News Alerts
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get instant notifications for breaking tech news and major
                      announcements.
                    </p>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
                      Enable Alerts
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
