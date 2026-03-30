import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "MERN Stack Intern",
    company: "Sysfoc & AI3D Scanning Solution",
    date: "Aug 2025 – Present",
    description:
      "Developed and maintained full-stack web applications using the MERN stack. Built RESTful APIs with Node.js and Express integrated with MongoDB. Contributed to dashboards, analytics features, and production-ready deployments.",
    icon: Briefcase,
    type: "work",
    gradient: "from-violet-500 to-purple-600",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Bachelor of Science — Computer Science",
    company: "Government College University Faisalabad",
    date: "2021 – 2025",
    description:
      "Studied core CS fundamentals including data structures, algorithms, software engineering, and database design. Graduated with a strong foundation in full-stack web development.",
    icon: GraduationCap,
    type: "education",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["CS Fundamentals", "Algorithms", "Databases", "Software Engineering"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 bg-secondary/20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Where I've worked, what I built, and how I grew as a developer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} items-center justify-center text-white z-10 shadow-xl`}>
                    <Icon size={22} />
                  </div>

                  <div className={`w-full md:w-[calc(50%-3rem)] ${isEven ? "md:pr-6 md:text-right" : "md:pl-6 md:text-left"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-card border border-border/40 rounded-3xl p-6 relative overflow-hidden shadow-lg shadow-black/5 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient}`} />

                      <div className={`md:hidden w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 shadow-md`}>
                        <Icon size={18} />
                      </div>

                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-3 shadow-sm`}>
                        {item.date}
                      </span>

                      <h3 className="text-lg font-bold font-display text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm font-semibold text-primary mb-3">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-medium px-2.5 py-1 bg-secondary/70 rounded-full text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
