import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock tags data with article counts
const tags = [
  {
    name: "AI",
    count: 45,
    description: "Artificial Intelligence and Machine Learning",
  },
  {
    name: "Machine Learning",
    count: 38,
    description: "ML algorithms and applications",
  },
  { name: "iPhone 15", count: 23, description: "Apple's latest smartphone" },
  {
    name: "Quantum Computing",
    count: 18,
    description: "Quantum technology and research",
  },
  {
    name: "Cybersecurity",
    count: 34,
    description: "Security threats and solutions",
  },
  {
    name: "Tesla",
    count: 29,
    description: "Electric vehicles and autonomous driving",
  },
  { name: "React", count: 31, description: "React framework and development" },
  { name: "5G", count: 22, description: "5G networks and technology" },
  {
    name: "Blockchain",
    count: 27,
    description: "Blockchain and cryptocurrency",
  },
  {
    name: "Cloud Computing",
    count: 33,
    description: "Cloud services and infrastructure",
  },
  { name: "VR", count: 19, description: "Virtual Reality technology" },
  { name: "AR", count: 16, description: "Augmented Reality applications" },
  { name: "IoT", count: 25, description: "Internet of Things devices" },
  { name: "Robotics", count: 21, description: "Robotics and automation" },
  { name: "Startups", count: 42, description: "Tech startup news and funding" },
  { name: "Apple", count: 56, description: "Apple products and news" },
  { name: "Google", count: 48, description: "Google services and products" },
  {
    name: "Microsoft",
    count: 39,
    description: "Microsoft technology and services",
  },
  {
    name: "Programming",
    count: 44,
    description: "Software development and coding",
  },
  {
    name: "Web Development",
    count: 35,
    description: "Frontend and backend development",
  },
  {
    name: "Mobile Apps",
    count: 28,
    description: "Mobile application development",
  },
  { name: "Gaming", count: 32, description: "Gaming industry and technology" },
  { name: "Fintech", count: 24, description: "Financial technology solutions" },
  {
    name: "Healthcare Tech",
    count: 20,
    description: "Medical technology innovations",
  },
];

export default function TagsPage() {
  // Sort tags by count (most popular first)
  const sortedTags = [...tags].sort((a, b) => b.count - a.count);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Browse by Tag
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore articles by topic. Click on any tag to discover related
                content and stay updated on your favorite tech subjects.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Popular Tags Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6">
                Popular Tags
              </h2>
              <div className="flex flex-wrap gap-3">
                {sortedTags.slice(0, 10).map((tag) => (
                  <Link
                    key={tag.name}
                    href={`/tags/${tag.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <Badge
                      variant="outline"
                      className="text-lg px-4 py-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all cursor-pointer"
                    >
                      {tag.name} ({tag.count})
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Tags Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-6">All Tags</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedTags.map((tag) => (
                  <Link
                    key={tag.name}
                    href={`/tags/${tag.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <Card className="border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors">
                            {tag.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-700"
                          >
                            {tag.count}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {tag.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tag Cloud Alternative */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6 text-center">
                Tag Cloud
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {sortedTags.map((tag) => {
                  // Calculate font size based on article count
                  const fontSize = Math.min(
                    Math.max(tag.count / 5 + 12, 12),
                    24
                  );
                  return (
                    <Link
                      key={tag.name}
                      href={`/tags/${tag.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <span
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium"
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {tag.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
