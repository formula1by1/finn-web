"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "150+", label: "Проектов" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "7", label: "Лет опыта" },
  { value: "40+", label: "Наград" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Дизайн.", "Разработка.", "Маркетинг."];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-900/5 blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Маркетинговое агентство нового поколения
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.95] tracking-tight text-white mb-4"
        >
          Создаём бренды,
          <br />
          <span className="gradient-text">которые продают</span>
        </motion.h1>

        {/* Animated service words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center flex-wrap gap-3 my-8"
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className={`text-2xl md:text-3xl font-semibold ${
                i === 1
                  ? "text-violet-400"
                  : i === 2
                  ? "text-white/50"
                  : "text-white/80"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed mb-12"
        >
          Мы создаём стратегии, которые приводят к росту. От концепции до запуска —
          ваш бизнес в надёжных руках.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
          >
            <span className="relative z-10">Обсудить проект</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
              Обсудить проект →
            </span>
          </a>
          <a
            href="#work"
            className="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            Смотреть работы
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] px-6 py-6 flex flex-col items-center gap-1 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/40">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Скролл</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
