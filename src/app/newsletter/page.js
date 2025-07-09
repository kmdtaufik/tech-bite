"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Check, Star, Users, Calendar, TrendingUp } from "lucide-react";

const newsletters = [
  {
    id: "daily-digest",
    name: "Daily Tech Digest",
    description:
      "Get the most important tech news delivered to your inbox every morning.",
    frequency: "Daily",
    subscribers: "125K+",
    topics: ["Breaking News", "AI", "Startups", "Gadgets"],
    featured: true,
  },
  {
    id: "ai-weekly",
    name: "AI Weekly",
    description:
      "Deep dive into artificial intelligence developments, research, and applications.",
    frequency: "Weekly",
    subscribers: "89K+",
    topics: ["Machine Learning", "AI Research", "Industry Applications"],
    featured: false,
  },
  {
    id: "startup-spotlight",
    name: "Startup Spotlight",
    description:
      "Discover emerging startups, funding rounds, and entrepreneurship insights.",
    frequency: "Bi-weekly",
    subscribers: "67K+",
    topics: ["Funding", "New Companies", "Entrepreneurship"],
    featured: false,
  },
  {
    id: "security-alerts",
    name: "Security Alerts",
    description:
      "Stay informed about cybersecurity threats, vulnerabilities, and best practices.",
    frequency: "As needed",
    subscribers: "45K+",
    topics: ["Threats", "Vulnerabilities", "Best Practices"],
    featured: false,
  },
  {
    id: "developer-tools",
    name: "Developer Tools Weekly",
    description:
      "Latest tools, frameworks, and resources for software developers.",
    frequency: "Weekly",
    subscribers: "78K+",
    topics: ["Programming", "Tools", "Frameworks"],
    featured: false,
  },
];

const recentIssues = [
  {
    title: "OpenAI's GPT-5 Announcement Shakes the AI World",
    date: "January 8, 2025",
    newsletter: "AI Weekly",
  },
  {
    title: "Tesla's Robotaxi Service Goes Live in 3 Major Cities",
    date: "January 7, 2025",
    newsletter: "Daily Tech Digest",
  },
  {
    title: "Quantum Computing Startup Raises $100M Series B",
    date: "January 6, 2025",
    newsletter: "Startup Spotlight",
  },
  {
    title: "Critical Security Flaw Found in Popular Cloud Platform",
    date: "January 5, 2025",
    newsletter: "Security Alerts",
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [selectedNewsletters, setSelectedNewsletters] = useState([
    "daily-digest",
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterToggle = (newsletterId) => {
    setSelectedNewsletters((prev) =>
      prev.includes(newsletterId)
        ? prev.filter((id) => id !== newsletterId)
        : [...prev, newsletterId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && selectedNewsletters.length > 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setSelectedNewsletters(["daily-digest"]);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  TechSphere Newsletters
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay ahead of the curve with our curated newsletters. Get the
                latest tech news, insights, and analysis delivered directly to
                your inbox.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Newsletter Selection */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Choose Your Newsletters
                </h2>

                <div className="space-y-6">
                  {newsletters.map((newsletter) => (
                    <Card
                      key={newsletter.id}
                      className={`border transition-all cursor-pointer ${
                        selectedNewsletters.includes(newsletter.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleNewsletterToggle(newsletter.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center ${
                                selectedNewsletters.includes(newsletter.id)
                                  ? "bg-blue-600 border-blue-600"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedNewsletters.includes(newsletter.id) && (
                                <Check className="h-3 w-3 text-white" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-xl font-bold text-black">
                                  {newsletter.name}
                                </h3>
                                {newsletter.featured && (
                                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                                    <Star className="h-3 w-3 mr-1" />
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600">
                                {newsletter.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{newsletter.frequency}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{newsletter.subscribers} subscribers</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {newsletter.topics.map((topic) => (
                            <Badge
                              key={topic}
                              variant="outline"
                              className="text-xs"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Subscription Form */}
                <Card className="mt-8 border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">
                      Subscribe Now
                    </h3>

                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-black mb-2">
                          Successfully Subscribed!
                        </h4>
                        <p className="text-gray-600">
                          You'll receive your first newsletter soon. Check your
                          email for confirmation.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-black mb-2"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="border-gray-300 focus:border-blue-500"
                          />
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-black mb-2">
                            Selected Newsletters:
                          </h4>
                          {selectedNewsletters.length > 0 ? (
                            <ul className="text-sm text-gray-600 space-y-1">
                              {selectedNewsletters.map((id) => {
                                const newsletter = newsletters.find(
                                  (n) => n.id === id
                                );
                                return (
                                  <li key={id}>
                                    • {newsletter.name} ({newsletter.frequency})
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">
                              No newsletters selected
                            </p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          disabled={!email || selectedNewsletters.length === 0}
                        >
                          Subscribe to {selectedNewsletters.length} Newsletter
                          {selectedNewsletters.length !== 1 ? "s" : ""}
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          By subscribing, you agree to our privacy policy. You
                          can unsubscribe at any time.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Newsletter Stats */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-black mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Newsletter Stats
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Total Subscribers
                          </span>
                          <span className="font-medium text-black">404K+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Open Rate
                          </span>
                          <span className="font-medium text-black">68%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Issues Sent
                          </span>
                          <span className="font-medium text-black">1,247</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Started</span>
                          <span className="font-medium text-black">2020</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Issues */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-black mb-4">
                        Recent Issues
                      </h3>
                      <div className="space-y-3">
                        {recentIssues.map((issue, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
                          >
                            <h4 className="font-medium text-black text-sm mb-1 line-clamp-2">
                              {issue.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{issue.newsletter}</span>
                              <span>{issue.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial */}
                  <Card className="border border-gray-200 bg-blue-50">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        "TechSphere's newsletters keep me informed about the
                        latest tech trends without overwhelming my inbox. The AI
                        Weekly is particularly insightful."
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Sarah Johnson</strong>
                        <br />
                        Software Engineer at Google
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
