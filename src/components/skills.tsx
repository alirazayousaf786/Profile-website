import { motion } from "framer-motion";

const frontendSkills = [
  { name: "React.js", level: 90, color: "from-sky-400 to-blue-500" },
  { name: "Next.js", level: 85, color: "from-blue-400 to-indigo-500" },
  { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-sky-500" },
  { name: "JavaScript", level: 88, color: "from-yellow-400 to-amber-500" },
  { name: "Bootstrap", level: 80, color: "from-violet-400 to-purple-500" },
];

const backendSkills = [
  { name: "Node.js", level: 70, color: "from-emerald-400 to-green-500" },
  { name: "Express.js", level: 83, color: "from-green-400 to-emerald-500" },
  { name: "MongoDB / Mongoose", level: 80, color: "from-lime-400 to-green-500" },
  { name: "REST APIs", level: 75, color: "from-pink-400 to-rose-500" },
  { name: "Laravel", level: 10, color: "from-red-400 to-rose-500" },
];

const techBadges = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB",
  "Tailwind CSS", "Bootstrap", "JavaScript", "HTML5", "CSS3",
  "REST APIs", "Mongoose", "Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify",
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm text-foreground">{name}</span>
        <span className="text-xs font-bold text-muted-foreground tabular-nums">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.08 * index, ease: [0.4, 0, 0.2, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 bg-secondary/20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The MERN stack tools and technologies I use to build real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border/40 rounded-3xl p-8 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                F
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Frontend</h3>
                <p className="text-xs text-muted-foreground">React · Next.js · Tailwind</p>
              </div>
            </div>
            <div className="space-y-5">
              {frontendSkills.map((skill, idx) => (
                <SkillBar key={skill.name} {...skill} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border/40 rounded-3xl p-8 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/20">
                B
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Backend</h3>
                <p className="text-xs text-muted-foreground">Node.js · Express · MongoDB</p>
              </div>
            </div>
            <div className="space-y-5">
              {backendSkills.map((skill, idx) => (
                <SkillBar key={skill.name} {...skill} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Badge Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border/40 rounded-3xl p-8 shadow-xl shadow-black/5"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center mb-6">
            Full Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
