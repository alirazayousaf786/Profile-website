import { motion } from "framer-motion";
import { Download, Award, Briefcase, Users, Coffee } from "lucide-react";

export function About() {
  const stats = [
    { icon: <Briefcase className="text-primary" size={24} />, value: "1+", label: "Years Experience" },
    { icon: <Award className="text-primary" size={24} />, value: "5+", label: "Projects Completed" },
    { icon: <Users className="text-primary" size={24} />, value: "10+", label: "Happy Clients" },
    { icon: <Coffee className="text-primary" size={24} />, value: "∞", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover who I am, what I do, and why I am so passionate about building digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-display">
              Transforming Ideas Into <span className="text-gradient">Digital Reality</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm Ali Raza, a MERN Stack and Next.js Developer based in Lahore, Pakistan  available for 
                both onsite and remote work. I have hands-on experience building scalable, 
                production-ready web applications using React, Next.js, Node.js, Express, and MongoDB.
              </p>
              <p>
                I'm passionate about clean code, performance optimization, and modern UI/UX. Currently 
                working as a MERN Stack Intern at Sysfoc, I've shipped real-world projects including 
                e-commerce platforms, task management systems, and company portfolios.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="/Alex_Johnson_CV.pdf.html" target="_blank" rel="noopener noreferrer"
                download="Alex_Johnson_CV.html"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 shadow-sm cursor-pointer select-none"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-foreground font-display">{stat.value}</h4>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
