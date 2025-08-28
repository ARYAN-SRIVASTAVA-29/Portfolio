"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Cloud, Award, Trophy, Target } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Frameworks & Libraries",
    icon: Database,
    skills: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "VS Code", "Figma"],
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Database & DevOps",
    icon: Cloud,
    skills: ["MySQL", "MongoDB", "Redis", "Git", "GitHub", "AWS", "Docker", "Kubernetes"],
    color: "from-green-400 to-teal-400",
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "Leadership Recognition",
    description: "Provisional CTO role and 10% equity offer at Herbino Innovative",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: Award,
    title: "Competition Success",
    description: "Finalist at Graph-e-Thon 2.0 (national-level hackathon)",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "350+ DSA problems solved with HackerRank certification",
    color: "from-cyan-400 to-blue-400",
  },
  {
    icon: Code,
    title: "Project Portfolio",
    description: "15+ full-stack applications built and deployed",
    color: "from-green-400 to-teal-400",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sora">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technical proficiency across modern web technologies, with proven results in building scalable applications
            and leading development teams.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-[1.02] h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} p-0.5`}>
                      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle
                      className={`text-xl font-sora bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="w-full justify-center px-3 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-gray-300 border border-purple-400/30 hover:from-purple-500/30 hover:to-cyan-500/30 hover:scale-105 transition-all duration-300 cursor-default text-sm"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 font-sora">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:scale-[1.02] h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} p-0.5 flex-shrink-0`}
                        >
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4
                            className={`text-lg font-semibold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-sora`}
                          >
                            {achievement.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
