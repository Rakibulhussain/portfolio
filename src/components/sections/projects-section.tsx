import { ExternalLink, Github, Monitor, Smartphone, Globe, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NeonButton } from "@/components/ui/neon-button"

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Cinemate",
      description: "A revolutionary web application for synchronized video streaming with real-time chat functionality, connecting friends globally for shared viewing experiences. (Under development)",
      technologies: ["React.js", "Node.js", "Socket.io", "WebRTC"],
      icon: Monitor,
      color: "text-primary",
      highlights: ["Real-time synchronization", "Global chat system", "Smart India Hackathon 2024"],
      category: "Web Application"
    },
    {
      title: "File Management System",
      description: "Full-stack digital transformation solution for Assam Power Distribution Company, modernizing traditional file tracking processes.",
      technologies: ["Node.js", "Express.js", "React.js", "MySQL", "Tailwind CSS"],
      icon: Globe,
      color: "text-accent",
      highlights: ["Digital transformation", "Enterprise solution", "Real-world impact"],
      category: "Enterprise Software"
    },
    {
      title: "Automated Toll Gate System",
      description: "IoT-based smart toll collection system using Arduino UNO and servo motors for seamless vehicle processing and automated payments.",
      technologies: ["Arduino UNO", "C++", "Servo Motors", "IoT"],
      icon: Zap,
      color: "text-neon-purple",
      highlights: ["Hardware integration", "Automated processing", "IoT implementation"],
      category: "IoT Project"
    },
    {
      title: "Real-Time Chat Application",
      description: "Dynamic messaging platform with instant communication capabilities, featuring modern UI and seamless user experience.",
      technologies: ["JavaScript", "Socket.io", "Node.js", "HTML/CSS"],
      icon: Smartphone,
      color: "text-neon-pink",
      highlights: ["Real-time messaging", "Modern UI", "Scalable architecture"],
      category: "Web Application"
    },
      {
  title: "Campus Bazaar",
  description: "A student-centric marketplace enabling campus communities to buy, sell, and exchange items with ease and trust.",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  icon: ShoppingCart,
  color: "text-emerald-green",
  highlights: ["User-to-user trading", "Secure authentication", "Product listing and search", "Chat and notifications"],
  category: "working,Web Application"
},{
  title: "FoodReels",
  description: "A social food discovery platform where users can explore, share, and review short food videos from around the world.",
  technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
  icon: Utensils,
  color: "text-orange-500",
  highlights: ["Short food videos", "User-generated content", "Real-time likes and comments", "Recipe sharing"],
  category: "Web Application"
},


    {
      title: "News Web App",
      description: "Dynamic news aggregation platform that fetches and displays real-time articles through API integration with clean, responsive design.",
      technologies: ["JavaScript", "REST APIs", "HTML/CSS", "Responsive Design"],
      icon: Globe,
      color: "text-secondary",
      highlights: ["API integration", "Real-time updates", "Responsive design"],
      category: "Web Application"
    },
    {
      title: "Excel Sheet Handler",
      description: "Python-based automation tool for efficient Excel file processing and data manipulation, streamlining workflow operations.",
      technologies: ["Python", "Pandas", "Openpyxl", "Data Processing"],
      icon: Monitor,
      color: "text-accent",
      highlights: ["Data automation", "Workflow optimization", "Python scripting"],
      category: "Automation Tool"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcase of innovative solutions and creative implementations across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card 
                key={index} 
                className="glass border-glass-border/30 hover-glow group transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-10 w-10 ${project.color} group-hover:animate-pulse`} />
                    <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-60"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-glass-border/20">
                    
                   
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <NeonButton variant="primary" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </NeonButton>
        </div>
      </div>
    </section>
  )
}
