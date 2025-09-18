import { Calendar, MapPin, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
          
          {/* Experience Item */}
          <div className="relative mb-12 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-neon"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <Card className="glass border-glass-border/30 hover-glow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary mb-2">
                      Summer Intern - Full Stack Web Developer
                    </CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-2" />
                        Assam Power Distribution Company Limited
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        July 1, 2025 - July 31, 2025
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Assam, India
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Developed a comprehensive Full Stack File Management and Tracking System 
                        to digitize and modernize traditional file handling processes.
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Key Achievements:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">
                              Built complete full-stack application using Node.js, Express.js, React.js, and MySQL
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">
                              Designed responsive UI/UX with React.js and Tailwind CSS
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">
                              Transformed manual processes to efficient digital solutions
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {["Node.js", "Express.js", "React.js", "MySQL", "Tailwind CSS"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Additional Experience/Activities */}
          <div className="relative animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-purple"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <Card className="glass border-glass-border/30 hover-glow">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary mb-2">
                      Student & Community Involvement
                    </CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-2" />
                        Various Organizations
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Ongoing
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Active participation in various technical and community initiatives 
                        to enhance skills and contribute to the developer community.
                      </p>
                      
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            Google Developer Group (GDG) events participant
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            ZOHO India Android development workshop participant
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            Young India (Yi) volunteer in Guwahati, Assam
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            University decoration team member
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}