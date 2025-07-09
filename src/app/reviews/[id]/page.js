"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  ChevronLeft,
  ThumbsUp,
  ThumbsDown,
  Award,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

// Mock review data
const reviewData = {
  1: {
    productName: "iPhone 15 Pro Max",
    reviewTitle: "The Best iPhone Yet, But Is It Worth the Upgrade?",
    rating: 4.5,
    category: "Smartphones",
    price: "$1,199",
    image: "/placeholder.svg?height=400&width=600",
    author: "Emily Watson",
    publishedAt: "2 days ago",
    readTime: "12 min read",
    verdict: "Excellent",
    overallScore: 4.5,
    scores: {
      design: 4.8,
      performance: 4.7,
      camera: 4.6,
      battery: 4.0,
      value: 3.8,
    },
    pros: [
      "Exceptional camera system with improved low-light performance",
      "Premium titanium build quality feels incredibly solid",
      "A17 Pro chip delivers outstanding performance",
      "Action Button adds useful customization options",
      "USB-C finally arrives on iPhone",
    ],
    cons: [
      "Very expensive, especially higher storage models",
      "Battery life improvement is marginal",
      "Still no always-on display improvements",
      "Charging speeds lag behind Android competitors",
    ],
    specs: {
      Display: "6.7-inch Super Retina XDR OLED",
      Processor: "A17 Pro chip",
      Storage: "256GB, 512GB, 1TB",
      Camera: "48MP main, 12MP ultra-wide, 12MP telephoto",
      Battery: "Up to 29 hours video playback",
      OS: "iOS 17",
    },
    content: [
      {
        heading: "Design and Build Quality",
        text: "The iPhone 15 Pro Max represents Apple's most premium smartphone design to date. The switch to titanium not only reduces weight but also provides a more premium feel compared to the stainless steel of previous generations. The new Action Button replaces the traditional mute switch and offers customizable functionality that power users will appreciate.",
      },
      {
        heading: "Performance",
        text: "The A17 Pro chip is a powerhouse that handles everything from intensive gaming to professional video editing with ease. Built on a 3nm process, it's not just faster but also more efficient than its predecessor. In our benchmarks, it consistently outperformed every Android flagship we've tested.",
      },
      {
        heading: "Camera System",
        text: "The camera improvements are substantial, particularly in low-light scenarios. The new 48MP main sensor captures incredible detail, while the improved Night mode produces cleaner, more natural-looking photos. The telephoto lens now offers 5x optical zoom, making it genuinely useful for distant subjects.",
      },
    ],
  },
};

const renderStars = (rating) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-lg font-medium text-gray-700">{rating}</span>
    </div>
  );
};

const getVerdictColor = (verdict) => {
  switch (verdict) {
    case "Outstanding":
      return "bg-green-100 text-green-800 border-green-300";
    case "Excellent":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "Very Good":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "Good":
      return "bg-orange-100 text-orange-800 border-orange-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

export default function ReviewDetailPage() {
  const params = useParams();
  const reviewId = params.id;
  const review = reviewData[reviewId] || reviewData[1];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href="/reviews"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Reviews
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Review Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  {review.category}
                </Badge>
                <Badge className={getVerdictColor(review.verdict)}>
                  <Award className="h-3 w-3 mr-1" />
                  {review.verdict}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                {review.productName}
              </h1>
              <h2 className="text-2xl text-gray-700 mb-6">
                {review.reviewTitle}
              </h2>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                  {renderStars(review.rating)}
                </div>
                <div className="flex items-center text-2xl font-bold text-black">
                  <DollarSign className="h-6 w-6 mr-1" />
                  {review.price.replace("$", "")}
                </div>
                <div className="text-gray-600">
                  By {review.author} • {review.publishedAt} • {review.readTime}
                </div>
              </div>

              {/* Product Image */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.productName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Review Scores */}
            <Card className="mb-8 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-6">
                  Review Scores
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(review.scores).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-black capitalize">
                          {category}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {score}/5
                        </span>
                      </div>
                      <Progress value={score * 20} className="h-2" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-black">
                      Overall Score
                    </span>
                    <div className="flex items-center">
                      {renderStars(review.overallScore)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ThumbsUp className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-black">Pros</h3>
                  </div>
                  <ul className="space-y-2">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ThumbsDown className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-black">Cons</h3>
                  </div>
                  <ul className="space-y-2">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Specifications */}
            <Card className="mb-8 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-6">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(review.specs).map(([spec, value]) => (
                    <div
                      key={spec}
                      className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-black">{spec}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Review Content */}
            <div className="prose prose-lg max-w-none mb-8">
              {review.content.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {section.heading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Final Verdict */}
            <Card className="mb-8 bg-gray-50 border border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Final Verdict
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    {renderStars(review.overallScore)}
                  </div>
                  <Badge
                    className={`${getVerdictColor(
                      review.verdict
                    )} text-lg px-4 py-2`}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    {review.verdict}
                  </Badge>
                  <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
                    The {review.productName} represents the pinnacle of
                    smartphone technology, offering exceptional performance and
                    build quality. While the price point is high, the overall
                    experience justifies the cost for users who demand the best.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
