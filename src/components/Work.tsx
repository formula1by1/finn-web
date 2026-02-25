"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "LUXE COSMETICS",
    category: "Брендинг & Веб-сайт",
    year: "2024",
    tags: ["UI/UX", "Разработка", "Брендинг"],
    color: "from-rose-900/40 to-pink-900/20",
    size: "lg", // spans 2 columns on desktop
    stat: "+340% ROI",
    statLabel: "за 6 месяцев",
  },
  {
    id: 2,
    title: "FINTECH PRO",
    category: "Мобильное приложение",
    year: "2024",
    tags: ["React Native", "iOS & Android"],
    color: "from-blue-900/40 to-indigo-900/20",
    size: "sm",
    stat: "250k+",
    statLabel: "загрузок",
  },
  {
    id: 3,
    title: "ECO STARTUP",
    category: "Маркетинг & SEO",
    year: "2023",
    tags: ["SEO", "Контент", "PPC"],
    color: "from-emerald-900/40 to-green-900/20",
    size: "sm",
    stat: "+520%",
    statLabel: "трафик",
  },
  {
    id: 4,
    title: "METRO REALTY",
    category: "Веб-разработка",
    year: "2024",
    tags: ["Next.js", "CMS", "SEO"],
    color: "from-amber-900/40 to-orange-900/20",
    size: "sm",
    stat: "1.2M",
    statLabel: "посетителей",
  },
  {
    id: 5,
    title: "NOVA FASHION",
    category: "E-commerce & Бренд",
    year: "2023",
    tags: ["E-commerce", "Дизайн", "Marketing"],
    color: "from-violet-900/40 to-purple-900/20",
    size: "lg",
    stat: "+890%",
    statLabel: "продажи",
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${project.color} border border-white/5 hover:border-white/15 transition-all duration-500 ${
        project.size === "lg" ? "md:col-span-2" : ""
      }`}
      style={{ minHeight: project.size === "lg" ? "320px" : "260px" }}
    >
      {/* Subtle noise bg */}
      <div className="absolute inset-0 bg-[#0f0f0f]/60" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          {/* Category & Year */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-xs text-white/30">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <div className="flex items-end justify-between mt-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-white/5 text-white/50 text-xs border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stat */}
          <div className="text-right ml-4 shrink-0">
            <div className="text-2xl font-bold text-white">{project.stat}</div>
            <div className="text-xs text-white/40">{project.statLabel}</div>
          </div>
        </div>
      </div>

      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[150px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
              Портфолио
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-3 leading-tight">
              Наши
              <br />
              <span className="text-white/30">лучшие работы</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-end flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Все проекты</span>
            <svg
              className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First row: large card + small card */}
          <div className="lg:col-span-2">
            <ProjectCard project={projects[0]} delay={0} />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectCard project={projects[1]} delay={0.1} />
            <ProjectCard project={projects[2]} delay={0.15} />
          </div>

          {/* Second row: small + large */}
          <div>
            <ProjectCard project={projects[3]} delay={0.2} />
          </div>
          <div className="lg:col-span-2">
            <ProjectCard project={projects[4]} delay={0.25} />
          </div>
        </div>
      </div>
    </section>
  );
}
