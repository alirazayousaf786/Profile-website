import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shahid",
    role: "CEO",
    company: "Paradise Site",
    content:
      "I had an excellent experience working with them on my Shopify website. The design is modern, attractive, and tailored perfectly to my business. They clearly understood my requirements and delivered high-quality work beyond my expectations. Their professionalism and attention to detail really stand out.",
    rating: 5,
    avatar: "SJ",
    gradient: "from-violet-500 to-purple-600",
    featured: true,
  },
  {
    id: 2,
    name: "Sehran Yousaf",
    role: "Product Manager",
    company: "A-Y Construction",
    content:
      "They developed my construction company website exceptionally well. The design is modern, clean, and perfectly represents my business. Every section is well-structured, and the website looks highly professional.",
    rating: 5,
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
  },
  {
    id: 3,
    name: "Bellla",
    role: "Ofice Team",
    company: "AI3D Scening Solution",
    content:
      "They developed my workspace website with outstanding quality. The design is modern, clean, and perfectly suited for a professional environment. Every detail reflects creativity and a strong understanding of my requirements",
    rating: 5,
    avatar: "ER",
    gradient: "from-rose-500 to-pink-500",
    featured: false,
  },
  {
    id: 4,
    name: "James Whitfield",
    role: "CTO",
    company: "CloudWave Inc.",
    content:
      "We hired Alex to refactor our legacy codebase and he exceeded all expectations. He modernized our stack, improved performance by 60%, and left comprehensive documentation.",
    rating: 5,
    avatar: "JW",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Founder",
    company: "LaunchPad",
    content:
      "Alex built our MVP in record time. The code quality was exceptional, and his proactive communication kept us informed at every step. We'll definitely work with him again.",
    rating: 5,
    avatar: "AP",
    gradient: "from-orange-500 to-amber-500",
    featured: false,
  },
];

/* Avatar circle */
function Avatar({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shrink-0 ring-2 ring-white/10`}
    >
      {initials}
    </div>
  );
}

/* Star rating row */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

/* Large decorative quote SVG */
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 45"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 45V27.273C0 10.91 9.545 2.727 28.636 0l3.637 5.455C22.727 7.273 17.576 12.121 16.364 20H27.273V45H0zm32.727 0V27.273C32.727 10.91 42.272 2.727 61.364 0L65 5.455C55.454 7.273 50.303 12.121 49.09 20H60V45H32.727z" />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const next = () => {
    const idx = (active + 1) % testimonials.length;
    go(idx);
  };

  const prev = () => {
    const idx = (active - 1 + testimonials.length) % testimonials.length;
    go(idx);
  };

  /* Auto-play */
  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  const t = testimonials[active];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.97 }),
  };

  return (
    <section className="py-28 relative overflow-hidden bg-background">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Clients <span className="text-gradient">Say About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real words from real clients — people who trusted me to bring their vision to life.
          </p>
        </motion.div>

        {/* Main card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="relative bg-card border border-border/40 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/10 overflow-hidden">
                {/* Gradient accent top edge */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} rounded-t-3xl`} />

                {/* Big decorative quote */}
                <QuoteIcon className="absolute top-8 right-8 md:right-12 w-16 h-16 text-primary/8" />

                <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                  {/* Quote text */}
                  <div className="space-y-8">
                    <Stars count={t.rating} />

                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 italic">
                      "{t.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <Avatar initials={t.avatar} gradient={t.gradient} />
                      <div>
                        <p className="font-bold text-foreground text-base">{t.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {t.role} &mdash; <span className="text-primary font-medium">{t.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Counter badge */}
                  <div className="hidden md:flex flex-col items-center justify-start pt-1">
                    <span className="text-5xl font-display font-bold text-primary/20 leading-none select-none">
                      0{active + 1}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">/ 0{testimonials.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10 gap-6">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`rounded-full transition-all duration-400 ${
                  idx === active
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground group"
            >
              <ChevronLeft size={18} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-muted-foreground group"
            >
              <ChevronRight size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mini preview strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
          {testimonials.map((item, idx) => (
            <motion.button
              key={item.id}
              onClick={() => go(idx)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                idx === active
                  ? "border-primary/50 bg-primary/8 shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card/50 hover:border-border hover:bg-card"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-[10px]`}>
                  {item.avatar}
                </div>
                <Stars count={5} />
              </div>
              <p className="text-xs font-semibold text-foreground truncate">{item.name}</p>
              <p className="text-[10px] text-muted-foreground truncate">{item.company}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
