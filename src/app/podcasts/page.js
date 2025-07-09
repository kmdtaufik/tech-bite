import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Calendar, Mic, Headphones } from "lucide-react";
import Link from "next/link";

const podcasts = [
  {
    id: 1,
    title: "The Future of AI with Sam Altman",
    description:
      "OpenAI's CEO discusses the future of artificial intelligence, AGI development, and the societal implications of advanced AI systems.",
    duration: "58:32",
    publishedAt: "3 days ago",
    category: "AI",
    guest: "Sam Altman",
    guestTitle: "CEO, OpenAI",
    image: "/placeholder.svg?height=200&width=200",
    episode: 142,
  },
  {
    id: 2,
    title: "Cybersecurity in the Age of Quantum Computing",
    description:
      "Exploring how quantum computing will revolutionize cybersecurity and what organizations need to prepare for.",
    duration: "45:18",
    publishedAt: "1 week ago",
    category: "Security",
    guest: "Dr. Michelle Chen",
    guestTitle: "Quantum Security Researcher",
    image: "/placeholder.svg?height=200&width=200",
    episode: 141,
  },
  {
    id: 3,
    title: "The Electric Vehicle Revolution with Elon Musk",
    description:
      "Tesla's CEO shares insights on the future of transportation, autonomous driving, and sustainable energy.",
    duration: "72:45",
    publishedAt: "2 weeks ago",
    category: "Automotive",
    guest: "Elon Musk",
    guestTitle: "CEO, Tesla",
    image: "/placeholder.svg?height=200&width=200",
    episode: 140,
  },
  {
    id: 4,
    title: "Building the Metaverse: Reality or Hype?",
    description:
      "Industry experts debate whether the metaverse represents the future of digital interaction or just another tech bubble.",
    duration: "51:22",
    publishedAt: "3 weeks ago",
    category: "VR/AR",
    guest: "Mark Zuckerberg",
    guestTitle: "CEO, Meta",
    image: "/placeholder.svg?height=200&width=200",
    episode: 139,
  },
  {
    id: 5,
    title: "The Rise of No-Code Development",
    description:
      "How no-code platforms are democratizing software development and changing the way we build applications.",
    duration: "42:15",
    publishedAt: "1 month ago",
    category: "Development",
    guest: "Vlad Magdalin",
    guestTitle: "CEO, Webflow",
    image: "/placeholder.svg?height=200&width=200",
    episode: 138,
  },
  {
    id: 6,
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "Exploring real-world applications of blockchain technology beyond digital currencies and NFTs.",
    duration: "39:48",
    publishedAt: "1 month ago",
    category: "Blockchain",
    guest: "Vitalik Buterin",
    guestTitle: "Founder, Ethereum",
    image: "/placeholder.svg?height=200&width=200",
    episode: 137,
  },
];

const recentEpisodes = [
  {
    episode: 142,
    title: "The Future of AI with Sam Altman",
    duration: "58:32",
  },
  {
    episode: 141,
    title: "Cybersecurity in the Age of Quantum Computing",
    duration: "45:18",
  },
  {
    episode: 140,
    title: "The Electric Vehicle Revolution with Elon Musk",
    duration: "72:45",
  },
  {
    episode: 139,
    title: "Building the Metaverse: Reality or Hype?",
    duration: "51:22",
  },
  { episode: 138, title: "The Rise of No-Code Development", duration: "42:15" },
];

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Mic className="h-8 w-8 text-purple-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  TechSphere Podcast
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Deep conversations with tech leaders, innovators, and experts
                about the trends and technologies shaping our future.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Latest Episode */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-6">
                    Latest Episode
                  </h2>
                  <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-square bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden relative group">
                          <img
                            src={podcasts[0].image || "/placeholder.svg"}
                            alt={podcasts[0].title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                              <Play className="h-8 w-8 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="md:w-2/3 p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                            Episode {podcasts[0].episode}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800"
                          >
                            {podcasts[0].category}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-black mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/podcasts/${podcasts[0].id}`}>
                            {podcasts[0].title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {podcasts[0].description}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h4 className="font-medium text-black">
                              {podcasts[0].guest}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {podcasts[0].guestTitle}
                            </p>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <div className="flex items-center mb-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{podcasts[0].duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{podcasts[0].publishedAt}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/podcasts/${podcasts[0].id}`}
                          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                        >
                          Listen Now
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </div>

                {/* All Episodes */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">
                    All Episodes
                  </h2>
                  <div className="space-y-6">
                    {podcasts.slice(1).map((podcast) => (
                      <Card
                        key={podcast.id}
                        className="border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="md:flex">
                          <div className="md:w-32 flex-shrink-0">
                            <div className="aspect-square md:aspect-auto md:h-full bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden relative group">
                              <img
                                src={podcast.image || "/placeholder.svg"}
                                alt={podcast.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                  <Play className="h-6 w-6 text-white ml-1" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardContent className="flex-1 p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline">
                                Episode {podcast.episode}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {podcast.category}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">
                              <Link href={`/podcasts/${podcast.id}`}>
                                {podcast.title}
                              </Link>
                            </h3>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {podcast.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-black text-sm">
                                  {podcast.guest}
                                </h4>
                                <p className="text-xs text-gray-600">
                                  {podcast.guestTitle}
                                </p>
                              </div>
                              <div className="text-right text-xs text-gray-500">
                                <div className="flex items-center mb-1">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>{podcast.duration}</span>
                                </div>
                                <span>{podcast.publishedAt}</span>
                              </div>
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
                <div className="sticky top-8 space-y-6">
                  {/* Subscribe */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-6 text-center">
                      <Headphones className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-black mb-3">
                        Subscribe to TechSphere Podcast
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Get notified when new episodes are released
                      </p>
                      <div className="space-y-2">
                        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                          Apple Podcasts
                        </button>
                        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                          Spotify
                        </button>
                        <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                          Google Podcasts
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Episodes */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-black mb-4">
                        Recent Episodes
                      </h3>
                      <div className="space-y-3">
                        {recentEpisodes.map((episode) => (
                          <div
                            key={episode.episode}
                            className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
                          >
                            <h4 className="font-medium text-black text-sm mb-1 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                              #{episode.episode}: {episode.title}
                            </h4>{" "}
                            <Footer />
                            <p className="text-xs text-gray-500">
                              {episode.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Podcast Stats */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-black mb-4">
                        Podcast Stats
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Total Episodes
                          </span>
                          <span className="font-medium text-black">142</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Total Downloads
                          </span>
                          <span className="font-medium text-black">2.1M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Average Duration
                          </span>
                          <span className="font-medium text-black">52 min</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Started</span>
                          <span className="font-medium text-black">2020</span>
                        </div>
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
