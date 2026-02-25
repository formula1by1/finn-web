"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Алексей Морозов",
    role: "CEO, TechVenture",
    text: "NOVAMEDIA полностью трансформировала наш бренд. Результат превзошёл все ожидания — трафик вырос в 5 раз за первые три месяца. Команда профессионалов, которая по-настоящему понимает бизнес.",
    rating: 5,
    avatar: "AM",
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    id: 2,
    name: "Мария Соколова",
    role: "Founder, Luxe Store",
    text: "Наш интернет-магазин был полностью переработан. Конверсия выросла с 1.2% до 4.8%. Они не просто делают красиво — они делают так, чтобы это приносило реальные деньги.",
    rating: 5,
    avatar: "МС",
    gradient: "from-rose-600 to-pink-700",
  },
  {
    id: 3,
    name: "Дмитрий Ковалёв",
    role: "CMO, FinPro",
    text: "Мобильное приложение, которое они разработали, получило 4.9 звёзды в App Store с первого дня. Команда работает быстро, чётко коммуницирует и не отступает от дедлайнов.",
    rating: 5,
    avatar: "ДК",
    gradient: "from-blue-600 to-cyan-700",
  },
  {
    id: 4,
    name: "Анна Белова",
    role: "Director, EcoLife",
    text: "За 6 месяцев SEO-работы органический трафик вырос на 520%. Стоимость привлечения клиента снизилась в 3 раза. Лучшие инвестиции в маркетинг за всё время.",
    rating: 5,
    avatar: "АБ",
    gradient: "from-emerald-600 to-teal-700",
  },
];

const brandLogos = [
  "TECHVENTURE", "LUXE STORE", "FINPRO", "ECOLIFE", "METRO REALTY", "NOVA FASHION", "SKYTECH", "PRIME MEDIA"
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Brands marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 overflow-hidden"
        >
          <p className="text-center text-xs text-white/30 tracking-widest uppercase mb-8">
            Нам доверяют
          </p>
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex gap-12 items-center whitespace-nowrap">
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                <span
                  key={i}
                  className="text-lg font-bold text-white/10 hover:text-white/30 transition-colors tracking-wider"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Отзывы клиентов
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3 leading-tight">
            Говорят
            <br />
            <span className="text-white/30">сами за себя</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-white/15 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-base leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
