import CategoryPage from "@/components/category-page";

// Mock data for AI category
const aiArticles = [
  {
    id: 1,
    title: "OpenAI Releases GPT-5 with Revolutionary Capabilities",
    summary:
      "The latest AI model shows unprecedented reasoning abilities and multimodal understanding, setting new benchmarks across various tasks.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Machine Learning",
    readTime: "5 min read",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Google's Gemini AI Achieves Human-Level Performance",
    summary:
      "New benchmarks show Google's latest AI model matching human performance in complex reasoning tasks and creative problem-solving.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Deep Learning",
    readTime: "4 min read",
    author: "Michael Rodriguez",
    publishedAt: "4 hours ago",
  },
  {
    id: 3,
    title: "AI in Healthcare: Breakthrough in Cancer Detection",
    summary:
      "Machine learning algorithms now detect early-stage cancer with 95% accuracy, potentially saving millions of lives worldwide.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Healthcare AI",
    readTime: "6 min read",
    author: "Dr. Emily Watson",
    publishedAt: "6 hours ago",
  },
  {
    id: 4,
    title: "Autonomous Vehicles: Tesla's FSD Beta 12 Analysis",
    summary:
      "Comprehensive review of Tesla's latest Full Self-Driving beta, examining real-world performance and safety improvements.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "Autonomous Systems",
    readTime: "8 min read",
    author: "James Park",
    publishedAt: "8 hours ago",
  },
  {
    id: 5,
    title: "Natural Language Processing: The Future of Communication",
    summary:
      "Exploring how advanced NLP models are revolutionizing human-computer interaction and breaking down language barriers.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "NLP",
    readTime: "5 min read",
    author: "Lisa Zhang",
    publishedAt: "10 hours ago",
  },
  {
    id: 6,
    title: "AI Ethics: Addressing Bias in Machine Learning Models",
    summary:
      "Industry leaders discuss strategies for creating more fair and unbiased AI systems as technology becomes more prevalent.",
    image: "/placeholder.svg?height=200&width=300",
    subcategory: "AI Ethics",
    readTime: "7 min read",
    author: "Dr. Robert Kim",
    publishedAt: "12 hours ago",
  },
];

const popularAIPosts = [
  {
    id: 1,
    title: "ChatGPT vs Claude: Which AI Assistant is Better?",
    views: "25.3K",
    publishedAt: "1 week ago",
  },
  {
    id: 2,
    title: "Building Your First Neural Network: A Beginner's Guide",
    views: "18.7K",
    publishedAt: "2 weeks ago",
  },
  {
    id: 3,
    title: "The Impact of AI on Software Development",
    views: "15.2K",
    publishedAt: "3 weeks ago",
  },
  {
    id: 4,
    title: "Machine Learning Algorithms Explained Simply",
    views: "12.8K",
    publishedAt: "1 month ago",
  },
];

const aiTags = [
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "Computer Vision",
  "Natural Language Processing",
  "Robotics",
  "AI Ethics",
  "Automation",
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <CategoryPage
          category="AI / Machine Learning"
          description="Explore the latest developments in artificial intelligence and machine learning. From breakthrough research to practical applications, stay informed about the technologies shaping our future."
          articles={aiArticles}
          popularPosts={popularAIPosts}
          tags={aiTags}
        />
      </main>
    </div>
  );
}
