import { Code, Database, Globe, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const AboutSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C/C++", "Python", "JavaScript", "SQL"],
      icon: Code,
      color: "text-primary"
    },
    {
      category: "Web Technologies", 
      items: ["React.js", "Node.js", "Express.js", "HTML/CSS"],
      icon: Globe,
      color: "text-accent"
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
      icon: Database,
      color: "text-neon-purple"
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Google Cloud", "Arduino", "Tailwind CSS"],
      icon: Cpu,
      color: "text-neon-pink"
    }
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Aspiring Software Engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Computer Science student at Assam Downtown University, 
              graduating in 2026. With hands-on experience as a Full Stack Web Developer 
              intern at Assam Power Distribution Company Limited, I've developed expertise 
              in modern web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey includes building innovative projects like "Cinemate" for 
              synchronized video streaming, creating automated systems with Arduino, 
              and contributing to the digital transformation of traditional processes.
            </p>
            <div className="glass p-6 rounded-xl border border-glass-border/30">
              <h4 className="text-lg font-semibold text-primary mb-4">Education</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">B.Tech Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Assam Downtown University, Guwahati (2026)
                  </p>
                </div>
                <div>
                  <p className="font-medium">Higher Secondary (AHSEC)</p>
                  <p className="text-sm text-muted-foreground">
                    SBKR Hajo Secondary School - 62.80%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <Card key={index} className="glass hover-glow border-glass-border/30">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Icon className={`h-8 w-8 ${skill.color} mr-3`} />
                        <h4 className="font-semibold text-sm">{skill.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {skill.items.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-2 opacity-60"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Certifications & Courses
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Introduction to SQL - Coursera",
              "Intermediate PostgreSQL - Coursera", 
              "Python for Everybody - Coursera",
              "Introduction to Cybersecurity - Network Academy",
              "MongoDB Complete Guide - Coursera",
              "JavaScript & MongoDB Development - Coursera",
              "Cloud Computing Fundamentals - Google Cloud",
              "Generative AI Training - GDSC"
            ].map((cert, index) => (
              <div 
                key={index}
                className="glass p-4 rounded-lg border border-glass-border/20 hover-glow text-center"
              >
                <p className="text-sm text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}