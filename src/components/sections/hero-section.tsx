import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"
import heroBg from "@/assets/hero-bg.jpg"

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full Stack Developer"
  
  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Rakibul</span>{" "}
            <span className="gradient-text">Hussain</span>
          </h1>
          
          <div className="text-xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Aspiring software engineer passionate about creating innovative solutions 
            with modern web technologies. Currently pursuing B.Tech in Computer Science.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="animate-pulse-glow"
            >
              View My Work
            </NeonButton>
            
            <NeonButton 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </NeonButton>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/rakibulhussain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover-glow transition-all hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rakibul-hussain-62420a25b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover-glow transition-all hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:rakibulhussain1100@gmail.com"
              className="glass p-3 rounded-full hover-glow transition-all hover:text-primary"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-8 w-8 text-primary cursor-pointer" 
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  )
}