"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Filter,
} from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    productName: "iPhone 15 Pro Max",
    reviewTitle: "The Best iPhone Yet, But Is It Worth the Upgrade?",
    rating: 4.5,
    category: "Smartphones",
    price: "$1,199",
    image: "/placeholder.svg?height=200&width=300",
    author: "Emily Watson",
    publishedAt: "2 days ago",
    pros: [
      "Excellent camera system",
      "Titanium build quality",
      "Great performance",
    ],
    cons: ["Expensive", "Battery life could be better"],
    verdict: "Excellent",
  },
  {
    id: 2,
    productName: "MacBook Pro M4",
    reviewTitle: "Apple's M4 Chip Delivers Unprecedented Performance",
    rating: 4.8,
    category: "Laptops",
    price: "$2,499",
    image: "/placeholder.svg?height=200&width=300",
    author: "Michael Rodriguez",
    publishedAt: "1 week ago",
    pros: ["Incredible performance", "Excellent display", "Long battery life"],
    cons: ["Very expensive", "Limited ports"],
    verdict: "Outstanding",
  },
  {
    id: 3,
    productName: "Sony WH-1000XM5",
    reviewTitle: "The Gold Standard for Noise-Canceling Headphones",
    rating: 4.7,
    category: "Audio",
    price: "$399",
    image: "/placeholder.svg?height=200&width=300",
    author: "David Kim",
    publishedAt: "2 weeks ago",
    pros: [
      "Best-in-class noise cancellation",
      "Excellent sound quality",
      "Comfortable fit",
    ],
    cons: ["Expensive", "Not foldable"],
    verdict: "Excellent",
  },
  {
    id: 4,
    productName: "Apple Watch Series 10",
    reviewTitle: "Health Tracking Reaches New Heights",
    rating: 4.3,
    category: "Wearables",
    price: "$429",
    image: "/placeholder.svg?height=200&width=300",
    author: "Lisa Zhang",
    publishedAt: "3 weeks ago",
    pros: ["Advanced health features", "Great display", "Solid battery life"],
    cons: ["Expensive", "Limited third-party apps"],
    verdict: "Very Good",
  },
  {
    id: 5,
    productName: "Samsung Galaxy S25 Ultra",
    reviewTitle: "Android's Answer to the iPhone Pro Max",
    rating: 4.4,
    category: "Smartphones",
    price: "$1,299",
    image: "/placeholder.svg?height=200&width=300",
    author: "James Park",
    publishedAt: "1 month ago",
    pros: ["Excellent camera zoom", "S Pen functionality", "Great display"],
    cons: ["Expensive", "Bulky design"],
    verdict: "Very Good",
  },
  {
    id: 6,
    productName: "Dell XPS 13 Plus",
    reviewTitle: "Ultrabook Excellence with Some Trade-offs",
    rating: 4.1,
    category: "Laptops",
    price: "$1,299",
    image: "/placeholder.svg?height=200&width=300",
    author: "Dr. Sarah Chen",
    publishedAt: "1 month ago",
    pros: ["Beautiful design", "Great performance", "Excellent display"],
    cons: ["Poor port selection", "Keyboard layout issues"],
    verdict: "Good",
  },
];

const categories = [
  "All Categories",
  "Smartphones",
  "Laptops",
  "Audio",
  "Wearables",
  "Gaming",
  "Accessories",
];
const ratings = ["All Ratings", "5 Stars", "4+ Stars", "3+ Stars", "2+ Stars"];
const priceRanges = [
  "All Prices",
  "Under $500",
  "$500-$1000",
  "$1000-$2000",
  "Over $2000",
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Smartphones":
      return <Smartphone className="h-4 w-4" />;
    case "Laptops":
      return <Laptop className="h-4 w-4" />;
    case "Audio":
      return <Headphones className="h-4 w-4" />;
    case "Wearables":
      return <Watch className="h-4 w-4" />;
    default:
      return null;
  }
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

const renderStars = (rating) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">{rating}</span>
    </div>
  );
};

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Tech Reviews
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                In-depth reviews and analysis of the latest tech products, from
                smartphones to laptops and everything in between.
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
                <span className="font-medium text-black">Filter reviews:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
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

                <Select
                  value={selectedRating}
                  onValueChange={setSelectedRating}
                >
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map((rating) => (
                      <SelectItem key={rating} value={rating}>
                        {rating}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((price) => (
                      <SelectItem key={price} value={price}>
                        {price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Featured Review */}
            <Card className="mb-12 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <div className="aspect-square lg:aspect-auto lg:h-full bg-gray-200 overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
                    <img
                      src={reviews[0].image || "/placeholder.svg"}
                      alt={reviews[0].productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardContent className="lg:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                      Featured Review
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {getCategoryIcon(reviews[0].category)}
                      <span className="ml-1">{reviews[0].category}</span>
                    </Badge>
                    <Badge className={getVerdictColor(reviews[0].verdict)}>
                      {reviews[0].verdict}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold text-black mb-2">
                    {reviews[0].productName}
                  </h2>
                  <h3 className="text-xl text-gray-700 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/reviews/${reviews[0].id}`}>
                      {reviews[0].reviewTitle}
                    </Link>
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    {renderStars(reviews[0].rating)}
                    <span className="text-2xl font-bold text-black">
                      {reviews[0].price}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">
                        Pros:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {reviews[0].pros.map((pro, index) => (
                          <li key={index}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {reviews[0].cons.map((con, index) => (
                          <li key={index}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {reviews[0].author} • {reviews[0].publishedAt}
                    </span>
                    <Link
                      href={`/reviews/${reviews[0].id}`}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      Read Full Review
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice(1).map((review) => (
                <Card
                  key={review.id}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {getCategoryIcon(review.category)}
                        <span className="ml-1">{review.category}</span>
                      </Badge>
                      <Badge className={getVerdictColor(review.verdict)}>
                        {review.verdict}
                      </Badge>
                    </div>

                    <h3 className="font-bold text-black mb-1">
                      {review.productName}
                    </h3>
                    <h4 className="text-sm text-gray-700 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link href={`/reviews/${review.id}`}>
                        {review.reviewTitle}
                      </Link>
                    </h4>

                    <div className="flex items-center justify-between mb-3">
                      {renderStars(review.rating)}
                      <span className="font-bold text-black">
                        {review.price}
                      </span>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      By {review.author} • {review.publishedAt}
                    </div>

                    <Link
                      href={`/reviews/${review.id}`}
                      className="block w-full text-center bg-gray-100 text-black py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      Read Review
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
