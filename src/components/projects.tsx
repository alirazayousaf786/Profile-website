import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const categories = ["All", "Full Stack", "Frontend", "Next.js"];

const projects = [
  {
    id: 1,
    title: "Paradise Flower Shop",
    description: "Full Stack MERN e-commerce platform with product management, cart system, checkout, and inventory tracking. Fully responsive with optimized performance.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://flowershope-six.vercel.app/",
    githubLink: "https://github.com/alirazayousaf786",
    accent: "from-rose-500 to-pink-500",
  },
  {
    id: 2,
    title: "Web Workspace",
    description: "Task Management System with drag-and-drop Kanban boards, real-time updates, multi-board support, and Laravel REST API backend.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    category: "Full Stack",
    tags: ["React", "Laravel", "REST API", "Netlify"],
    demoLink: "https://trelloappali.netlify.app",
    githubLink: "https://github.com/alirazayousaf786",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "AY Construction Company",
    description: "Modern company portfolio website built with Next.js. Features server-side rendering, SEO optimization, optimized images, and fast navigation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    category: "Next.js",
    tags: ["Next.js", "Tailwind CSS", "SSR", "Vercel"],
    demoLink: "https://ayconstruction.vercel.app",
    githubLink: "https://github.com/alirazayousaf786",
    accent: "from-amber-500 to-orange-500",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real projects built and deployed — from e-commerce to task management.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border/40 rounded-3xl overflow-hidden flex flex-col shadow-lg shadow-black/5 hover:border-primary/30 hover:shadow-xl transition-all duration-400"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${project.accent} opacity-30 z-10`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/85 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${project.accent} text-white text-sm font-semibold shadow-lg`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-semibold border border-border"
                    >
                      <FaGithub size={15} />
                      Code
                    </motion.a>
                  </div>

                  <span className={`absolute top-3 left-3 z-30 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-md`}>
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center text-white shrink-0 mt-0.5`}>
                      <Folder size={14} />
                    </div>
                    <h3 className="text-lg font-bold font-display leading-tight">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-secondary/70 rounded-full text-muted-foreground border border-border/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
