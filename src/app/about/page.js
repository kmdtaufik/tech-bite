import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Editor-in-Chief",
    bio: "Former tech journalist at Wired and TechCrunch with 10+ years covering AI and emerging technologies.",
    image: "/placeholder.svg?height=200&width=200",
    email: "sarah@techsphere.com",
    twitter: "@sarahchen_tech",
    linkedin: "sarahchen",
    specialties: ["AI", "Machine Learning", "Tech Policy"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Senior Tech Reporter",
    bio: "Cybersecurity expert and investigative journalist specializing in data privacy and digital security.",
    image: "/placeholder.svg?height=200&width=200",
    email: "michael@techsphere.com",
    twitter: "@mrodriguez_sec",
    linkedin: "michaelrodriguez",
    specialties: ["Cybersecurity", "Privacy", "Enterprise Tech"],
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Hardware Review Editor",
    bio: "Consumer electronics enthusiast with expertise in mobile devices, laptops, and emerging gadgets.",
    image: "/placeholder.svg?height=200&width=200",
    email: "emily@techsphere.com",
    twitter: "@emilywatson_hw",
    linkedin: "emilywatson",
    specialties: ["Gadgets", "Mobile", "Consumer Electronics"],
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup & Business Reporter",
    bio: "Former venture capital analyst covering startup ecosystem, funding rounds, and tech business trends.",
    image: "/placeholder.svg?height=200&width=200",
    email: "david@techsphere.com",
    twitter: "@davidkim_vc",
    linkedin: "davidkim",
    specialties: ["Startups", "Venture Capital", "Tech Business"],
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Developer Tools Editor",
    bio: "Full-stack developer turned tech writer, focusing on programming languages, frameworks, and dev tools.",
    image: "/placeholder.svg?height=200&width=200",
    email: "lisa@techsphere.com",
    twitter: "@lisazhang_dev",
    linkedin: "lisazhang",
    specialties: ["Programming", "Web Development", "Developer Tools"],
  },
  {
    id: 6,
    name: "James Park",
    role: "Science & Research Correspondent",
    bio: "PhD in Computer Science covering breakthrough research, academic publications, and scientific innovations.",
    image: "/placeholder.svg?height=200&width=200",
    email: "james@techsphere.com",
    twitter: "@jamespark_sci",
    linkedin: "jamespark",
    specialties: ["Research", "Academia", "Scientific Computing"],
  },
];

const stats = [
  { label: "Articles Published", value: "2,500+" },
  { label: "Monthly Readers", value: "1.2M+" },
  { label: "Years of Experience", value: "5+" },
  { label: "Expert Contributors", value: "25+" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                About TechSphere
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your premier destination for the latest technology news,
                in-depth analysis, and expert insights. We deliver comprehensive
                coverage of AI breakthroughs, gadget reviews, startup
                innovations, and the tools that shape our digital future.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
                Our Editorial Vision
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At TechSphere, we believe technology should be accessible,
                  understandable, and beneficial for everyone. Our mission is to
                  bridge the gap between complex technological innovations and
                  everyday understanding, providing our readers with the
                  knowledge they need to navigate our rapidly evolving digital
                  world.
                </p>
                <p>
                  We are committed to delivering accurate, unbiased, and
                  thoroughly researched content. Our editorial team combines
                  deep technical expertise with clear, engaging storytelling to
                  make even the most complex topics accessible to our diverse
                  readership.
                </p>
                <p>
                  From breaking news about AI breakthroughs to comprehensive
                  gadget reviews, from startup success stories to cybersecurity
                  alerts, we cover the full spectrum of technology with the
                  depth and nuance it deserves. We don't just report on
                  technology – we help you understand its implications for your
                  life, work, and future.
                </p>
              </div>

              {/* Values */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">A</span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">Accuracy</h3>
                    <p className="text-gray-600 text-sm">
                      Every article is fact-checked and verified by our expert
                      editorial team.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">C</span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">Clarity</h3>
                    <p className="text-gray-600 text-sm">
                      We make complex technology understandable for readers at
                      every level.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">I</span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">
                      Independence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our editorial content is free from commercial influence
                      and bias.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our diverse team of journalists, analysts, and tech experts
                brings decades of combined experience to deliver the insights
                you trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    {/* Profile Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-black mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 text-xs hover:bg-blue-200"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <Link
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                      <Link
                        href={`https://twitter.com/${member.twitter.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a story tip, feedback, or want to collaborate? We'd love to
                hear from you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-black mb-2">Editorial</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      For story tips and editorial inquiries
                    </p>
                    <Link
                      href="mailto:editorial@techsphere.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      editorial@techsphere.com
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-black mb-2">General</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      For general inquiries and feedback
                    </p>
                    <Link
                      href="mailto:hello@techsphere.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      hello@techsphere.com
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
