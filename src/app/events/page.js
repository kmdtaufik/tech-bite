"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Filter,
  ExternalLink,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "TechSphere AI Summit 2025",
    description:
      "Join industry leaders for a comprehensive exploration of AI's impact on business and society.",
    date: "March 15-17, 2025",
    time: "9:00 AM - 6:00 PM PST",
    location: "San Francisco, CA",
    venue: "Moscone Center",
    type: "Conference",
    category: "AI",
    price: "$599",
    attendees: "2,500+",
    image: "/placeholder.svg?height=200&width=350",
    status: "upcoming",
    featured: true,
  },
  {
    id: 2,
    title: "Cybersecurity Workshop: Zero Trust Architecture",
    description:
      "Hands-on workshop covering implementation of zero trust security models in enterprise environments.",
    date: "February 28, 2025",
    time: "10:00 AM - 4:00 PM EST",
    location: "New York, NY",
    venue: "TechSphere HQ",
    type: "Workshop",
    category: "Security",
    price: "$299",
    attendees: "50",
    image: "/placeholder.svg?height=200&width=350",
    status: "upcoming",
    featured: false,
  },
  {
    id: 3,
    title: "Mobile Development Bootcamp",
    description:
      "Intensive 3-day bootcamp covering React Native and Flutter development for mobile applications.",
    date: "March 5-7, 2025",
    time: "9:00 AM - 5:00 PM PST",
    location: "Seattle, WA",
    venue: "Amazon Web Services Center",
    type: "Bootcamp",
    category: "Development",
    price: "$899",
    attendees: "100",
    image: "/placeholder.svg?height=200&width=350",
    status: "upcoming",
    featured: false,
  },
  {
    id: 4,
    title: "Quantum Computing Symposium",
    description:
      "Explore the latest breakthroughs in quantum computing and their practical applications.",
    date: "April 12, 2025",
    time: "1:00 PM - 8:00 PM EST",
    location: "Boston, MA",
    venue: "MIT Campus",
    type: "Symposium",
    category: "Research",
    price: "Free",
    attendees: "300",
    image: "/placeholder.svg?height=200&width=350",
    status: "upcoming",
    featured: false,
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    description:
      "Watch emerging startups pitch their innovative solutions to a panel of expert judges and investors.",
    date: "January 20, 2025",
    time: "6:00 PM - 9:00 PM PST",
    location: "Virtual Event",
    venue: "Online",
    type: "Competition",
    category: "Startups",
    price: "Free",
    attendees: "1,000+",
    image: "/placeholder.svg?height=200&width=350",
    status: "past",
    featured: false,
  },
  {
    id: 6,
    title: "Web3 and Blockchain Developer Conference",
    description:
      "Deep dive into blockchain development, DeFi protocols, and Web3 application architecture.",
    date: "December 10, 2024",
    time: "9:00 AM - 6:00 PM EST",
    location: "Miami, FL",
    venue: "Miami Convention Center",
    type: "Conference",
    category: "Blockchain",
    price: "$449",
    attendees: "800",
    image: "/placeholder.svg?height=200&width=350",
    status: "past",
    featured: false,
  },
];

const eventTypes = [
  "All Types",
  "Conference",
  "Workshop",
  "Bootcamp",
  "Symposium",
  "Competition",
];
const categories = [
  "All Categories",
  "AI",
  "Security",
  "Development",
  "Research",
  "Startups",
  "Blockchain",
];
const locations = [
  "All Locations",
  "San Francisco, CA",
  "New York, NY",
  "Seattle, WA",
  "Boston, MA",
  "Virtual Event",
];

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showPastEvents, setShowPastEvents] = useState(false);

  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");
  const displayEvents = showPastEvents ? pastEvents : upcomingEvents;

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800 border-green-300";
      case "past":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-blue-100 text-blue-800 border-blue-300";
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
                <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  Tech Events
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join us at conferences, workshops, and networking events.
                Connect with industry leaders and expand your knowledge in the
                latest technology trends.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Event Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1">
                <Button
                  variant={!showPastEvents ? "default" : "ghost"}
                  onClick={() => setShowPastEvents(false)}
                  className={!showPastEvents ? "bg-black text-white" : ""}
                >
                  Upcoming Events ({upcomingEvents.length})
                </Button>
                <Button
                  variant={showPastEvents ? "default" : "ghost"}
                  onClick={() => setShowPastEvents(true)}
                  className={showPastEvents ? "bg-black text-white" : ""}
                >
                  Past Events ({pastEvents.length})
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-black">Filter events:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Featured Event */}
            {!showPastEvents &&
              upcomingEvents.find((event) => event.featured) && (
                <Card className="mb-12 border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="lg:flex">
                    <div className="lg:w-2/5">
                      <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-200 overflow-hidden">
                        <img
                          src={
                            upcomingEvents.find((event) => event.featured)
                              .image || "/placeholder.svg"
                          }
                          alt={
                            upcomingEvents.find((event) => event.featured).title
                          }
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <CardContent className="lg:w-3/5 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                          Featured Event
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {upcomingEvents.find((event) => event.featured).type}
                        </Badge>
                        <Badge variant="outline">
                          {
                            upcomingEvents.find((event) => event.featured)
                              .category
                          }
                        </Badge>
                      </div>

                      <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
                        {upcomingEvents.find((event) => event.featured).title}
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {
                          upcomingEvents.find((event) => event.featured)
                            .description
                        }
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>
                            {
                              upcomingEvents.find((event) => event.featured)
                                .date
                            }
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>
                            {
                              upcomingEvents.find((event) => event.featured)
                                .time
                            }
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>
                            {
                              upcomingEvents.find((event) => event.featured)
                                .location
                            }
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="h-4 w-4 mr-2" />
                          <span>
                            {
                              upcomingEvents.find((event) => event.featured)
                                .attendees
                            }{" "}
                            attendees
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-black">
                          {upcomingEvents.find((event) => event.featured).price}
                        </span>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Register Now
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayEvents
                .filter((event) => !event.featured || showPastEvents)
                .map((event) => (
                  <Card
                    key={event.id}
                    className="border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status === "upcoming"
                            ? "Upcoming"
                            : "Past Event"}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {event.type}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-700">
                          <Calendar className="h-3 w-3 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <MapPin className="h-3 w-3 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <Users className="h-3 w-3 mr-2" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-bold text-black">
                          {event.price}
                        </span>
                        <Button
                          variant={
                            event.status === "upcoming" ? "default" : "outline"
                          }
                          size="sm"
                          className={
                            event.status === "upcoming"
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : ""
                          }
                          disabled={event.status === "past"}
                        >
                          {event.status === "upcoming"
                            ? "Register"
                            : "View Details"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-12 bg-blue-50 border border-blue-200">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-4">
                  Never Miss an Event
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Subscribe to our events newsletter and be the first to know
                  about upcoming conferences, workshops, and networking
                  opportunities.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Subscribe to Event Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
