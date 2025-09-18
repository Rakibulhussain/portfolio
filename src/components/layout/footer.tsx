import { Heart, Github, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-foreground">Rakibul</span>{" "}
              <span className="gradient-text">Hussain</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Rakibulhussain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rakibul-hussain-62420a25b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:rakibulhussain1100@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-glass-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Rakibul Hussain. Made with 
            <Heart className="h-4 w-4 text-accent animate-pulse" />
            and lots of code.
          </p>
        </div>
      </div>
    </footer>
  )
}