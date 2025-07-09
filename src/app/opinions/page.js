import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, Calendar, Filter } from "lucide-react";
import Link from "next/link";

const opinionArticles = [
  {
    id: 1,
    title: "Why AI Regulation is Both Necessary and Impossible",
    excerpt:
      "The rapid advancement of AI technology presents a regulatory paradox that governments worldwide are struggling to solve.",
    author: "Dr. Sarah Chen",
    authorImage: "/placeholder.svg?height=60&width=60",
    authorBio: "AI Ethics Researcher at Stanford",
    publishedAt: "2 days ago",
    readTime: "8 min read",
    category: "AI Ethics",
    type: "Opinion",
  },
  {
    id: 2,
    title: "The Death of Privacy: How Big Tech Killed Our Digital Rights",
    excerpt:
      "A scathing critique of how major technology companies have systematically eroded user privacy over the past decade.",
    author: "Michael Rodriguez",
    authorImage: "/placeholder.svg?height=60&width=60",
    authorBio: "Cybersecurity Expert & Privacy Advocate",
    publishedAt: "3 days ago",
    readTime: "12 min read",
    category: "Privacy",
    type: "Editorial",
  },
  {
    id: 3,
    title:
      "Electric Vehicles: The Overhyped Revolution That's Actually Working",
    excerpt:
      "Despite the skepticism and challenges, the EV revolution is quietly transforming transportation as we know it.",
    author: "Emily Watson",
    authorImage: "/placeholder.svg?height=60&width=60",
    authorBio: "Automotive Technology Journalist",
    publishedAt: "1 week ago",
    readTime: "10 min read",
    category: "Transportation",
    type: "Analysis",
  },
  {
    id: 4,
    title: "The Metaverse is Dead, Long Live Spatial Computing",
    excerpt:
      "Why the metaverse hype was misguided and how spatial computing represents the real future of immersive technology.",
    author: "David Kim",
    authorImage: "/placeholder.svg?height=60&width=60",
    authorBio: "VR/AR Technology Analyst",
    publishedAt: "1 week ago",
    readTime: "7 min read",
    category: "Virtual Reality",
    type: "Opinion",
  },
  {
    id: 5,
    title: "Open Source AI: The Last Hope for Democratic Technology",
    excerpt:
      "As AI becomes increasingly centralized, open source models represent our best chance for equitable access to AI technology.",
    author: "Lisa Zhang",
    authorImage: "/placeholder.svg?height=60&width=60",
    authorBio: "Open Source Advocate & Developer",
    publishedAt: "2 weeks ago",
    readTime: "9 min read",
    category: "Open Source",
    type: "Editorial",
  },
  {
    id: 6,
    title: "Why Quantum Computing Won't Replace Classical Computers",
    excerpt:
      "Debunking the myth that quantum computers will make traditional computers obsolete and explaining their true potential.",
    author: "Dr. James Park",
    authorImage: "/placeholder.svg?height=60&width=60",
    authorBio: "Quantum Computing Researcher",
    publishedAt: "3 weeks ago",
    readTime: "11 min read",
    category: "Quantum Computing",
    type: "Analysis",
  },
];

const authors = [
  "All Authors",
  "Dr. Sarah Chen",
  "Michael Rodriguez",
  "Emily Watson",
  "David Kim",
  "Lisa Zhang",
];
const categories = [
  "All Categories",
  "AI Ethics",
  "Privacy",
  "Transportation",
  "Virtual Reality",
  "Open Source",
];
const types = ["All Types", "Opinion", "Editorial", "Analysis"];

export default function OpinionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  Opinions & Editorials
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Thought-provoking perspectives on technology, society, and the
                future from our expert contributors and guest writers.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-black">Filter by:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Select defaultValue="All Authors">
                  <SelectTrigger className="w-48 border-gray-300">
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

                <Select defaultValue="All Categories">
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

                <Select defaultValue="All Types">
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Featured Opinion */}
            <Card className="mb-12 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="lg:flex">
                <CardContent className="lg:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                      Featured
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {opinionArticles[0].type}
                    </Badge>
                    <Badge variant="outline">
                      {opinionArticles[0].category}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold text-black mb-4 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/article/${opinionArticles[0].id}`}>
                      {opinionArticles[0].title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {opinionArticles[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 overflow-hidden">
                        <img
                          src={
                            opinionArticles[0].authorImage || "/placeholder.svg"
                          }
                          alt={opinionArticles[0].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-black">
                          {opinionArticles[0].author}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {opinionArticles[0].authorBio}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{opinionArticles[0].publishedAt}</span>
                      </div>
                      <span>{opinionArticles[0].readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <div className="lg:w-1/3 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-8">
                  <MessageSquare className="h-24 w-24 text-purple-600" />
                </div>
              </div>
            </Card>

            {/* Opinion Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {opinionArticles.slice(1).map((article) => (
                <Card
                  key={article.id}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant="secondary"
                        className={
                          article.type === "Opinion"
                            ? "bg-green-100 text-green-800"
                            : article.type === "Editorial"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-orange-100 text-orange-800"
                        }
                      >
                        {article.type}
                      </Badge>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link href={`/article/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                          <img
                            src={article.authorImage || "/placeholder.svg"}
                            alt={article.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-black text-sm">
                            {article.author}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {article.authorBio}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-right">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{article.publishedAt}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-12 bg-gray-50 border border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Have an Opinion to Share?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We welcome guest contributions from industry experts,
                  researchers, and thought leaders. Share your perspective on
                  the latest technology trends and developments.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Submit Your Article
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
