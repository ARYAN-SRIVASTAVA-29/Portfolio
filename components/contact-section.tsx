"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-sora">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work
            together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-electric-blue/30 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white font-sora">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-white/5">
                <Mail className="h-6 w-6 text-electric-blue" />
                <div className="text-center">
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:mainaryansrivastav@gmail.com"
                    className="text-gray-300 hover:text-electric-blue transition-colors"
                  >
                    mainaryansrivastav@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-white/5">
                <Phone className="h-6 w-6 text-electric-blue" />
                <div className="text-center">
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+918302943695" className="text-gray-300 hover:text-electric-blue transition-colors">
                    +91 8302943695
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-white/5">
                <MapPin className="h-6 w-6 text-electric-blue" />
                <div className="text-center">
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">Dehradun, India</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white text-center mb-4 font-sora">Connect With Me</h3>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-white/20 text-gray-300 hover:bg-white/10 hover:border-electric-blue/50 bg-transparent"
                    asChild
                  >
                    <a href="https://linkedin.com/in/aryan-srivastava" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-white/20 text-gray-300 hover:bg-white/10 hover:border-electric-blue/50 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/ARYAN-SRIVASTAVA-29" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-white/20 text-gray-300 hover:bg-white/10 hover:border-electric-blue/50 bg-transparent"
                    asChild
                  >
                    <a href="https://leetcode.com/u/aryan-srivastava" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      LeetCode
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing BCA in AI/DS at Graphic Era University. Open to full-time opportunities,
                  internships, and exciting projects in full-stack development.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
