import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Star } from "lucide-react";
import Link from "next/link";

const featuredArticles = [
  {
    id: 1,
    title:
      "The Rise of Artificial General Intelligence: What It Means for Humanity",
    excerpt:
      "An in-depth exploration of AGI development and its potential impact on society, economy, and human existence. We examine the latest breakthroughs and what experts predict for the next decade.",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI",
    author: "Dr. Sarah Chen",
    publishedAt: "2 days ago",
    readTime: "15 min read",
    featured: true,
    priority: 1,
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough: IBM's 1000-Qubit Processor",
    excerpt:
      "IBM's latest quantum processor represents a major leap forward in quantum computing capabilities, bringing us closer to practical quantum advantage in real-world applications.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Research",
    author: "Dr. Michael Rodriguez",
    publishedAt: "3 days ago",
    readTime: "12 min read",
    featured: true,
    priority: 2,
  },
  {
    id: 3,
    title: "The Future of Work: How AI Will Transform Every Industry by 2030",
    excerpt:
      "A comprehensive analysis of how artificial intelligence will reshape the job market, create new opportunities, and challenge traditional employment models.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Future Tech",
    author: "Emily Watson",
    publishedAt: "1 week ago",
    readTime: "18 min read",
    featured: true,
    priority: 3,
  },
  {
    id: 4,
    title: "Sustainable Tech: The Green Revolution in Silicon Valley",
    excerpt:
      "How tech companies are leading the charge in environmental sustainability, from renewable energy to carbon-neutral data centers.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Sustainability",
    author: "David Kim",
    publishedAt: "1 week ago",
    readTime: "10 min read",
    featured: true,
    priority: 4,
  },
  {
    id: 5,
    title: "Cybersecurity in the Age of AI: New Threats and Solutions",
    excerpt:
      "As AI becomes more prevalent, cybersecurity faces new challenges. We explore emerging threats and innovative defense strategies.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Cybersecurity",
    author: "Lisa Zhang",
    publishedAt: "2 weeks ago",
    readTime: "14 min read",
    featured: true,
    priority: 5,
  },
  {
    id: 6,
    title: "The Metaverse Economy: Virtual Real Estate and Digital Assets",
    excerpt:
      "Understanding the economic implications of virtual worlds and the growing market for digital properties and NFTs.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Virtual Reality",
    author: "James Park",
    publishedAt: "3 weeks ago",
    readTime: "11 min read",
    featured: true,
    priority: 6,
  },
];

export default function FeaturedPage() {
  const heroArticle = featuredArticles[0];
  const secondaryArticles = featuredArticles.slice(1, 3);
  const remainingArticles = featuredArticles.slice(3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-500 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  Editor's Picks
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our most insightful and impactful articles, carefully selected
                by our editorial team for their depth, relevance, and
                exceptional quality.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Hero Featured Article */}
            <Card className="mb-12 border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="lg:flex">
                <div className="lg:w-3/5">
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-200 overflow-hidden">
                    <img
                      src={heroArticle.image || "/placeholder.svg"}
                      alt={heroArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardContent className="lg:w-2/5 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                      Featured
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {heroArticle.category}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold text-black mb-4 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/article/${heroArticle.id}`}>
                      {heroArticle.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {heroArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span className="font-medium">{heroArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{heroArticle.publishedAt}</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{heroArticle.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/article/${heroArticle.id}`}
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Read Full Article
                  </Link>
                </CardContent>
              </div>
            </Card>

            {/* Secondary Featured Articles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {secondaryArticles.map((article) => (
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
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
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

                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link href={`/article/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
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

            {/* More Featured Articles */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                More Editor's Picks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingArticles.map((article) => (
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

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
