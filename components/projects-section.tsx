"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "LinkShort",
    subtitle: "URL Shortener with Click Analytics",
    description:
      "A scalable, full-stack shortener with analytics and enterprise-grade security. Architected Next.js App Router with SSR, Supabase Auth (JWT), and PostgreSQL RLS for multi-tenant isolation. Modeled users, urls, clicks with UNIQUE shortcode, BTREE indexes, and 6-char collision-resistant generator with retries.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "Recharts", "JWT", "RLS"],
    githubUrl: "https://github.com/aryan-srivastava/linkshort",
    liveUrl: null,
    status: "Jun 2025 – Present",
    hasLive: false, // Explicitly set to false to remove live demo button
    images: [
      "/url-short.png",
      "/url-short.png",
    ],
  },
  {
    title: "OSAlgoLab",
    subtitle: "Operating System Algorithm Simulator",
    description:
      "Interactive lab for CPU, memory, paging, disk, deadlock algorithms. Built Next.js + TypeScript application with modular compute engine fully decoupled from UI. Implemented parameterized simulations with deterministic outputs, robust input validation, and reproducible metrics with interactive Gantt timelines.",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Algorithm Visualization", "Data Structures"],
    githubUrl: "https://github.com/aryan-srivastava/osalgolab",
    liveUrl: null,
    status: "Jan 2025 – Apr 2025",
    hasLive: false,
    images: [
      "/os-1.png",
      "/os-2.png",
    ],
  },
  {
    title: "DigiDraw",
    subtitle: "Collaborative Whiteboard",
    description:
      "Real-time canvas drawing over WebSockets with undo/redo functionality. Implemented WebSocket-based collaboration using Socket.io to broadcast stroke events and synchronize peers in live sessions. Built Canvas API drawing pipeline with brush color/size, eraser, clear functions, and maintained undo/redo history with action stacks.",
    technologies: ["React", "Socket.io", "Canvas API", "WebSocket", "Node.js", "Real-time"],
    githubUrl: "https://github.com/aryan-srivastava/digidraw",
    liveUrl: null,
    status: "Mar 2024 – Apr 2024",
    hasLive: false,
    images: [
      "/digi-draw.png",
      "/digi-draw.png",
    ],
  },
  {
    title: "VideoConnect",
    subtitle: "Peer-to-Peer Video Conferencing",
    description:
      "Multi-party WebRTC rooms with custom signaling server. Architected P2P WebRTC topology using Node.js/Socket.io server for room-based signaling. Built media pipeline with MediaDevices API and synchronized mute/video states across peers via PeerJS. Designed stateful React UI with dynamic video grid that updates on peer join/leave.",
    technologies: ["React", "WebRTC", "PeerJS", "Socket.io", "MediaDevices API", "P2P"],
    githubUrl: "https://github.com/aryan-srivastava/videoconnect",
    liveUrl: null,
    status: "Apr 2024",
    hasLive: false,
    images: [
      "/video-1.png",
      "/video-1.png",
    ],
  },
{
  title: "AnonFeedback",
  subtitle: "Anonymous Feedback Platform",
  description:
    "Full-stack Next.js application that lets users send and receive messages without revealing identities. Includes secure email authentication with one-time verification codes, unique username creation, and a privacy-first dashboard where users can toggle message acceptance on/off.",
  technologies: ["Next.js", "React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/ARYAN-SRIVASTAVA-29/anon-feedback",
  liveUrl: null,
  status: "Aug 2025",
  hasLive: false,
  images: [
    "/anon-feedback.png",
    "/anon-feedback.png",
  ],
},

]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 font-sora">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Full-stack applications showcasing modern web technologies, real-time systems, and scalable architecture
            patterns.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.slice(0, 5).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px", amount: 0.35 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative w-full h-64 overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10">
                  <Image
                    src={
                      (project.images && project.images[0]) ||
                      "/placeholder.svg?height=256&width=512&query=project-screenshot"
                    }
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={700}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Card className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-[1.02]">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-sora">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-xs border-purple-500/30 text-gray-400 bg-purple-500/10 whitespace-nowrap"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-base text-pink-400 font-medium mb-4">{project.subtitle}</p>
                    <CardDescription className="text-gray-300 leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-sm px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-gray-300 border border-purple-400/30 hover:from-purple-500/30 hover:to-cyan-500/30 hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 justify-start">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg text-purple-400 hover:text-purple-300 hover:border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                        title="Open repository for more details"
                      >
                        <Github className="h-5 w-5" />
                        <span className="font-medium">More details</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/aryan-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="font-medium">View more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

