import CategoryPage from "@/components/category-page";

// Mock data for Gadgets category
const gadgetArticles = [
  {
    id: 1,
    title: "iPhone 16 Pro Max Review: Apple's Best Yet?",
    summary:
      "Comprehensive review of Apple's latest flagship smartphone, examining camera improvements, performance, and battery life.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Smartphones",
    readTime: "8 min read",
    author: "Tech Reviewer",
    publishedAt: "1 hour ago",
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch 7: Health Tracking Revolution",
    summary:
      "The latest smartwatch from Samsung brings advanced health monitoring features and improved battery life to your wrist.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Wearables",
    readTime: "5 min read",
    author: "Gadget Expert",
    publishedAt: "3 hours ago",
  },
  {
    id: 3,
    title: "MacBook Pro M4: Performance Benchmarks",
    summary:
      "Apple's new M4 chip delivers unprecedented performance for creative professionals and power users.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Laptops",
    readTime: "6 min read",
    author: "Hardware Analyst",
    publishedAt: "5 hours ago",
  },
];

const popularGadgetPosts = [
  {
    id: 1,
    title: "Best Budget Smartphones of 2025",
    views: "32.1K",
    publishedAt: "1 week ago",
  },
  {
    id: 2,
    title: "Wireless Earbuds Comparison: AirPods vs Competition",
    views: "28.5K",
    publishedAt: "2 weeks ago",
  },
  {
    id: 3,
    title: "Gaming Laptops Under $1000: Top Picks",
    views: "21.3K",
    publishedAt: "3 weeks ago",
  },
];

const gadgetTags = [
  "Smartphones",
  "Laptops",
  "Wearables",
  "Audio",
  "Gaming",
  "Cameras",
  "Smart Home",
  "Reviews",
];

export default function GadgetsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <CategoryPage
          category="Gadgets / Hardware Reviews"
          description="Discover the latest gadgets and hardware reviews. From smartphones to laptops, we test and review the newest tech products to help you make informed decisions."
          articles={gadgetArticles}
          popularPosts={popularGadgetPosts}
          tags={gadgetTags}
        />
      </main>
    </div>
  );
}
