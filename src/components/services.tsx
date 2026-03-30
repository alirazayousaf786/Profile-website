import { motion } from "framer-motion";
import { Code2, Smartphone, Monitor, Database, TerminalSquare, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites using modern frameworks like React and Next.js.",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    number: "01",
  },
  {
    title: "Mobile Apps",
    description: "Creating cross-platform mobile applications using React Native and Expo for iOS and Android.",
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/20",
    number: "02",
  },
  {
    title: "UI / UX Design",
    description: "Designing intuitive user interfaces and experiences that engage, delight, and convert users.",
    icon: Monitor,
    gradient: "from-rose-500 to-pink-400",
    glow: "shadow-rose-500/20",
    number: "03",
  },
  {
    title: "API Development",
    description: "Architecting robust and secure RESTful and GraphQL APIs using Node.js and Express.",
    icon: TerminalSquare,
    gradient: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-500/20",
    number: "04",
  },
  {
    title: "Database Design",
    description: "Structuring scalable database schemas using PostgreSQL, MongoDB, and modern ORMs.",
    icon: Database,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    number: "05",
  },
  {
    title: "Tech Consulting",
    description: "Advising startups on technology choices, architecture design, and scaling strategies.",
    icon: Lightbulb,
    gradient: "from-yellow-500 to-orange-400",
    glow: "shadow-yellow-500/20",
    number: "06",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive digital solutions tailored to help your business grow and thrive.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-card border border-border/40 rounded-3xl p-7 overflow-hidden shadow-lg shadow-black/5 hover:border-primary/30 hover:shadow-xl transition-all duration-400"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg ${service.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} />
                  </div>
                  <span className="text-4xl font-display font-bold text-border/60 group-hover:text-primary/20 transition-colors duration-300 select-none">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
