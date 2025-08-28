"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "FullStack Development Intern",
    company: "Herbino Innovative Agro Private Limited",
    location: "Jamshedpur, India",
    period: "June 2024 – Sept 2024",
    offerLetterLink: "#", // You can replace this with actual link
    description:
      "Architected core B2B hemp flows and built configurable pricing engine. Developed responsive Next.js dashboards with Redux state management and delivered prototypes that earned internship extension with leadership role.",
    achievements: [
      "Architected core <strong class='text-cyan-400'>B2B hemp flows</strong> (listings→RFQs→bids→contracts→shipments), defined <strong class='text-purple-400'>REST API contracts</strong> and <strong class='text-pink-400'>ERD</strong>",
      "Built configurable <strong class='text-cyan-400'>pricing and commission engine</strong> (grade, moisture%, location, logistics) with <strong class='text-purple-400'>JSON rules</strong> and <strong class='text-pink-400'>Jest unit tests</strong>",
      "Developed responsive <strong class='text-cyan-400'>Next.js dashboards</strong> for farmer, buyer, and admin roles with <strong class='text-purple-400'>Redux state</strong> and <strong class='text-pink-400'>Zod input validation</strong>",
      "Implemented platform guards: <strong class='text-cyan-400'>JWT auth</strong>, basic <strong class='text-purple-400'>RBAC</strong>, <strong class='text-pink-400'>Express rate limiting</strong>, idempotent webhooks, and structured logging",
      "Collaborated with UI designer to convert <strong class='text-cyan-400'>Figma flows</strong> into <strong class='text-purple-400'>Next.js components</strong>, <strong class='text-pink-400'>Redux slices</strong>, and Zod-validated forms",
      "Authored <strong class='text-cyan-400'>architecture decision records (ADRs)</strong> and review checklists to align contributors and document key trade-offs",
      "Delivered prototypes and design docs, earned internship extension with <strong class='text-purple-400'>leadership role</strong> and <strong class='text-pink-400'>10% equity offer</strong>",
    ],
  },
  {
    title: "FullStack Development Intern",
    company: "TBI GEU",
    location: "Dehradun, India",
    period: "Nov 2024 – Jan 2025",
    offerLetterLink: "#", // You can replace this with actual link
    description:
      "Contributed across 5+ React/Node.js projects building dashboards, submissions, and internal tools. Designed REST APIs and MongoDB schemas with validation, pagination, and RBAC.",
    achievements: [
      "Contributed across <strong class='text-cyan-400'>5+ React/Node.js projects</strong> - dashboards, submissions, internal tools, built <strong class='text-purple-400'>15+ reusable components</strong>",
      "Designed <strong class='text-cyan-400'>REST APIs</strong> and <strong class='text-purple-400'>MongoDB schemas</strong> for <strong class='text-pink-400'>20+ endpoints</strong> with validation, pagination, and RBAC",
      "Explored <strong class='text-cyan-400'>Docker Compose</strong> for consistent local stacks, documented <strong class='text-purple-400'>10+ environment variables</strong> and scripts",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-sora">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional internship experience building full-stack applications, architecting scalable systems, and
            delivering high-impact results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-[1.01]">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div>
                        <CardTitle className="text-xl font-sora bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-pink-400">
                          {experience.company}
                        </CardDescription>
                      </div>
                      <motion.a
                        href={experience.offerLetterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <Calendar className="h-4 w-4 text-cyan-400" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <MapPin className="h-4 w-4 text-purple-400" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-300 flex items-start gap-3">
                          <span className="text-cyan-400 mt-1 font-bold">•</span>
                          <span dangerouslySetInnerHTML={{ __html: achievement }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
