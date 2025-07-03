import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Clock, TrendingUp } from "lucide-react";

// Mock data for demonstration
const latestNews = [
  {
    id: 1,
    title: "OpenAI Releases GPT-5 with Revolutionary Capabilities",
    description:
      "The latest AI model shows unprecedented reasoning abilities and multimodal understanding.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    readTime: "5 min read",
    publishedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Apple's New MacBook Pro Features M4 Chip",
    description:
      "Performance benchmarks show 40% improvement over previous generation processors.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gadgets",
    readTime: "3 min read",
    publishedAt: "4 hours ago",
  },
  {
    id: 3,
    title: "Tesla's Robotaxi Service Launches in Major Cities",
    description:
      "Autonomous vehicle service now available in New York, Los Angeles, and San Francisco.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Startups",
    readTime: "4 min read",
    publishedAt: "6 hours ago",
  },
  {
    id: 4,
    title: "New Cybersecurity Threat Targets Cloud Infrastructure",
    description:
      "Security researchers discover sophisticated attack vector affecting major cloud providers.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Cybersecurity",
    readTime: "6 min read",
    publishedAt: "8 hours ago",
  },
  {
    id: 5,
    title: "GitHub Copilot Gets Major Update with Voice Commands",
    description:
      "Developers can now code using natural language voice instructions.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    readTime: "4 min read",
    publishedAt: "10 hours ago",
  },
  {
    id: 6,
    title: "Meta Announces New VR Headset with 8K Display",
    description:
      "Next-generation virtual reality device promises unprecedented visual clarity.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gadgets",
    readTime: "5 min read",
    publishedAt: "12 hours ago",
  },
];

const trendingStories = [
  {
    id: 1,
    title: "AI Revolution: How Machine Learning is Transforming Healthcare",
    image: "/placeholder.svg?height=150&width=250",
    category: "AI",
    views: "15.2K",
  },
  {
    id: 2,
    title: "The Future of Electric Vehicles: Tesla vs Traditional Automakers",
    image: "/placeholder.svg?height=150&width=250",
    category: "Startups",
    views: "12.8K",
  },
  {
    id: 3,
    title: "Quantum Computing Breakthrough: IBM's Latest Achievement",
    image: "/placeholder.svg?height=150&width=250",
    category: "Programming",
    views: "9.5K",
  },
  {
    id: 4,
    title: "5G Network Security: New Challenges and Solutions",
    image: "/placeholder.svg?height=150&width=250",
    category: "Cybersecurity",
    views: "8.1K",
  },
];

const featuredArticles = [
  {
    id: 1,
    title:
      "The Rise of Artificial General Intelligence: What It Means for Humanity",
    description:
      "Exploring the implications of AGI development and its potential impact on society, economy, and human existence.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI",
    readTime: "12 min read",
    author: "Dr. Sarah Chen",
  },
  {
    id: 2,
    title: "Sustainable Tech: How Green Innovation is Reshaping the Industry",
    description:
      "From renewable energy solutions to eco-friendly manufacturing, discover how technology is becoming more sustainable.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Startups",
    readTime: "8 min read",
    author: "Michael Rodriguez",
  },
  {
    id: 3,
    title: "The Metaverse Economy: Virtual Real Estate and Digital Assets",
    description:
      "Understanding the economic implications of virtual worlds and the growing market for digital properties.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Gadgets",
    readTime: "10 min read",
    author: "Emma Thompson",
  },
];

const categorizedNews = {
  AI: [
    {
      title: "Google's Gemini AI Shows Human-Level Performance",
      readTime: "4 min",
      publishedAt: "1 day ago",
    },
    {
      title: "Microsoft Integrates AI into Office Suite",
      readTime: "3 min",
      publishedAt: "2 days ago",
    },
    {
      title: "OpenAI Announces GPT Store Marketplace",
      readTime: "5 min",
      publishedAt: "3 days ago",
    },
  ],
  Gadgets: [
    {
      title: "Samsung Galaxy S25 Ultra Review: Camera Excellence",
      readTime: "7 min",
      publishedAt: "1 day ago",
    },
    {
      title: "Apple Watch Series 10 Health Features",
      readTime: "4 min",
      publishedAt: "2 days ago",
    },
    {
      title: "Sony's New Wireless Earbuds Challenge AirPods",
      readTime: "5 min",
      publishedAt: "2 days ago",
    },
  ],
  Startups: [
    {
      title: "Y Combinator's Latest Batch: AI Dominates",
      readTime: "6 min",
      publishedAt: "1 day ago",
    },
    {
      title: "Fintech Startup Raises $100M Series B",
      readTime: "3 min",
      publishedAt: "2 days ago",
    },
    {
      title: "Climate Tech Investments Reach Record High",
      readTime: "5 min",
      publishedAt: "3 days ago",
    },
  ],
  Programming: [
    {
      title: "Rust Programming Language Gains Enterprise Adoption",
      readTime: "5 min",
      publishedAt: "1 day ago",
    },
    {
      title: "React 19 Beta: New Features and Improvements",
      readTime: "4 min",
      publishedAt: "2 days ago",
    },
    {
      title: "WebAssembly Performance Benchmarks 2025",
      readTime: "6 min",
      publishedAt: "2 days ago",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Welcome to TechSphere
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your premier destination for the latest technology news,
                insights, and analysis
              </p>
            </div>
          </div>
        </section>

        {/* Latest Tech News */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-black">
                Latest Tech News
              </h2>
              <Link
                href="/news"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((article) => (
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
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-black mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      {article.publishedAt}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Stories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-3xl font-bold text-black">
                Trending Stories
              </h2>
            </div>

            <div className="flex space-x-6 overflow-x-auto pb-4">
              {trendingStories.map((story) => (
                <Card
                  key={story.id}
                  className="flex-shrink-0 w-64 hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {story.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {story.views} views
                      </span>
                    </div>
                    <h3 className="font-semibold text-black text-sm line-clamp-2">
                      {story.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black mb-8">
              Editor's Picks
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured Article */}
              <Card className="lg:col-span-2 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="md:flex">
                  <div className="md:w-1/2 aspect-video md:aspect-auto bg-gray-200 overflow-hidden">
                    <img
                      src={featuredArticles[0].image || "/placeholder.svg"}
                      alt={featuredArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-1/2 p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                        {featuredArticles[0].category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {featuredArticles[0].readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {featuredArticles[0].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {featuredArticles[0].description}
                    </p>
                    <div className="text-sm text-gray-500">
                      By {featuredArticles[0].author}
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Secondary Featured Articles */}
              {featuredArticles.slice(1).map((article) => (
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
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      By {article.author}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized News Snippets */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black mb-8">
              Browse by Category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(categorizedNews).map(([category, articles]) => (
                <div key={category} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-black">
                      {category}
                    </h3>
                    <Link
                      href={`/${category.toLowerCase()}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {articles.map((article, index) => (
                      <Card
                        key={index}
                        className="p-4 hover:shadow-md transition-shadow border border-gray-200"
                      >
                        <h4 className="font-medium text-black text-sm mb-2 line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.readTime}</span>
                          <span>{article.publishedAt}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
