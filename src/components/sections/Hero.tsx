import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { Button } from "@/components/ui/button";

const TYPE_TEXTS = [
  "Web Designer",
  "Developer",
  "Brand Identity Creator"
];

export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPE_TEXTS[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typeText === currentFullText) {
      typingSpeed = 2000; // Pause at end of word
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && typeText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPE_TEXTS.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypeText(currentFullText.substring(0, typeText.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typeText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 border border-primary/20 backdrop-blur-sm">
                Hello, I'm
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                  Reegan Christian
                </span>
              </h1>
              <div className="h-12 mt-2">
                <p className="text-2xl md:text-3xl text-muted-foreground font-semibold flex items-center">
                  <span>{typeText}</span>
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1 inline-block w-[3px] h-8 bg-primary"
                  />
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              B.Tech CCE Student | Turning raw data into meaningful insights.
              Skilled in Python, SQL, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" download="Reegan_Resume.pdf">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/25 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </Button>
              </a>
              <a href="mailto:reegan.christian27@gmail.com">
                <Button size="lg" variant="outline" className="rounded-full border-primary/50 hover:bg-primary/5">
                  <Mail className="mr-2 h-5 w-5" /> Get In Touch
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a href="https://github.com/reeganchristian27-cmd" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/reegan-c-8bb72637b" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary">
                <Linkedin size={24} />
              </a>
              <a href="mailto:reegan.christian27@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating rings */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/40"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-indigo-500/40"
              />
              
              {/* Avatar Center */}
              <div className="absolute inset-8 rounded-full border-2 border-primary/40 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src="/profile.jpg"
                  alt="Reegan Christian"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}