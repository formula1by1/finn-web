"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Дизайн",
    subtitle: "UI/UX & Branding",
    description:
      "Создаём визуальные идентичности и интерфейсы, которые захватывают внимание и конвертируют посетителей в клиентов.",
    features: ["Брендинг & Логотип", "UI/UX Дизайн", "Дизайн-система", "Прототипирование"],
    gradient: "from-violet-600/20 to-purple-800/10",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Веб-разработка",
    subtitle: "Frontend & Backend",
    description:
      "Разрабатываем быстрые, масштабируемые веб-сайты и платформы с современными технологиями и превосходным UX.",
    features: ["Next.js & React", "Backend API", "E-commerce", "CMS Интеграция"],
    gradient: "from-indigo-600/20 to-blue-800/10",
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Мобильные приложения",
    subtitle: "iOS & Android",
    description:
      "Создаём нативные и кросс-платформенные мобильные приложения, которые пользователи обожают использовать каждый день.",
    features: ["React Native", "iOS & Android", "App Store", "Push-уведомления"],
    gradient: "from-emerald-600/20 to-teal-800/10",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Маркетинг",
    subtitle: "Performance & Growth",
    description:
      "Полный комплекс диджитал-маркетинга: от стратегии и контента до таргетированной рекламы и аналитики роста.",
    features: ["SEO & SEM", "Таргетированная реклама", "SMM & Контент", "Email-маркетинг"],
    gradient: "from-orange-600/20 to-red-800/10",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Что мы делаем
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3 leading-tight">
            Услуги
            <br />
            <span className="text-white/30">мирового уровня</span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl p-8 bg-gradient-to-br ${service.gradient} border ${service.border} hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.02]" />

              <div className="relative z-10">
                {/* Number & icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 ${service.accent}`}>
                    {service.icon}
                  </div>
                  <span className="text-4xl font-bold text-white/5 select-none">
                    {service.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                <p className={`text-sm font-medium ${service.accent} mb-4`}>{service.subtitle}</p>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/5"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">Подробнее</span>
                  <svg
                    className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
