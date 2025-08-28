import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 relative">
            About Me
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl rounded-lg" />
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            BCA student at Graphic Era University with hands-on experience in full-stack development, specializing in
            modern web technologies and scalable system architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently pursuing BCA with AI/DS specialization at Graphic Era University. Gained valuable industry
                experience through internships at Herbino Innovative and TBI GEU, working on B2B platforms and
                enterprise-grade applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about building scalable systems with modern technologies like Next.js, TypeScript, and cloud
                infrastructure. Earned a provisional CTO role and 10% equity offer during my internship.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg blur opacity-30" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">What I Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Full-stack developer specializing in React, Next.js, Node.js, and TypeScript. Built 15+ applications
                from concept to deployment, with expertise in REST APIs, database design, and cloud architecture.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Solved 350+ DSA problems, finalist at Graph-e-Thon 2.0, and HackerRank certified. Always exploring new
                technologies and contributing to innovative projects.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative group overflow-hidden bg-gray-900/50 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-6 text-center relative z-10">
              <Code className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-white">System Architecture</h4>
              <p className="text-sm text-gray-400">
                Designing scalable B2B platforms with REST APIs, microservices, and cloud infrastructure
              </p>
            </CardContent>
          </Card>

          <Card className="relative group overflow-hidden bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-6 text-center relative z-10">
              <Lightbulb className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-white">Algorithm Mastery</h4>
              <p className="text-sm text-gray-400">
                Solved 350+ DSA problems with expertise in optimization and complex problem-solving
              </p>
            </CardContent>
          </Card>

          <Card className="relative group overflow-hidden bg-gray-900/50 border-pink-500/30 hover:border-pink-400/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-6 text-center relative z-10">
              <Users className="h-8 w-8 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-white">Leadership</h4>
              <p className="text-sm text-gray-400">
                Led development teams, earned provisional CTO role, and mentored junior developers
              </p>
            </CardContent>
          </Card>

          <Card className="relative group overflow-hidden bg-gray-900/50 border-green-500/30 hover:border-green-400/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-6 text-center relative z-10">
              <Zap className="h-8 w-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-white">Innovation</h4>
              <p className="text-sm text-gray-400">
                Built real-time collaboration tools, WebRTC systems, and AI-powered applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
