import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { NeonButton } from "@/components/ui/neon-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rakibulhussain1100@gmail.com",
      href: "mailto:rakibulhussain1100@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+91 8822750582",
      href: "tel:+918822750582",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guwahati, Assam, India",
      href: null,
      color: "text-neon-purple"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rakibulhussain",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/rakibul-hussain-62420a25b",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rakibulhussain1100@gmail.com",
      color: "text-foreground hover:text-primary"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center p-4 glass rounded-lg border border-glass-border/30 hover-glow group">
                    <Icon className={`h-6 w-6 ${item.color} mr-4 group-hover:animate-pulse`} />
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
                
                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="glass p-6 rounded-xl border border-glass-border/30">
              <h4 className="font-semibold mb-4 text-primary">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass rounded-lg border border-glass-border/20 hover-glow transition-all ${social.color}`}
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="glass border-glass-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Send a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Name
                      </label>
                      <Input 
                        className="glass border-glass-border/50 focus:border-primary focus:shadow-neon"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Email
                      </label>
                      <Input 
                        type="email"
                        className="glass border-glass-border/50 focus:border-primary focus:shadow-neon"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Subject
                    </label>
                    <Input 
                      className="glass border-glass-border/50 focus:border-primary focus:shadow-neon"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Message
                    </label>
                    <Textarea 
                      className="glass border-glass-border/50 focus:border-primary focus:shadow-neon min-h-[120px]"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <NeonButton variant="primary" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </NeonButton>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-slide-up">
          <Card className="glass border-glass-border/30 inline-block">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2 text-primary">Currently Available</h4>
              <p className="text-muted-foreground text-sm">
                Open to internship opportunities and exciting projects
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}