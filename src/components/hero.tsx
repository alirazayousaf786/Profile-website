import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const GITHUB = "https://github.com/alirazayousaf786";
const LINKEDIN = "https://www.linkedin.com/in/ali-raza-6008aa289/";

const roles = [
  "MERN Stack Developer",
  "React.js & Next.js Dev",
  "UI/UX Designer",
  "Problem Solver"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          role.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/abstract-bg.png`} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-medium text-primary tracking-wide uppercase">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-foreground">
              Ali Raza
            </h1>
            <div className="h-12 flex items-center">
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                A <span className="text-foreground">{currentText}</span>
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I craft beautifully engineered, highly performant web applications that deliver exceptional user experiences. Bridging the gap between design and robust functionality.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              Hire Me
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold border-2 border-border bg-background/50 backdrop-blur-sm hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-8">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-80 xl:w-96 xl:h-96">
            {/* Animated Glow Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-violet-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            
            {/* Avatar Container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full border-2 border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm p-4 shadow-2xl"
            >
              <img 
                src={`${import.meta.env.BASE_URL}ali-raza.jpeg`} 
                alt="Ali Raza" 
                className="w-full h-full object-cover rounded-full shadow-inner object-top"
              />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 left-0 glass-card px-4 py-3 rounded-2xl flex items-center space-x-3 shadow-xl"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <span className="font-semibold text-sm">Available for work</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-10"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</span>
        <motion.a 
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
        >
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
