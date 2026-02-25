"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = ["Дизайн", "Веб-разработка", "Мобильное приложение", "Маркетинг", "Полный комплекс"];

  return (
    <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/8 blur-[150px]" />
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900/50 to-indigo-900/30 border border-violet-500/20 p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-violet-500/60 to-transparent" />

          <div className="relative z-10">
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
              Готовы к росту?
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
              Начнём ваш
              <br />
              <span className="gradient-text">проект сегодня</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Первая консультация бесплатна. Расскажите о вашем проекте — мы предложим стратегию уже через 48 часов.
            </p>

            {/* Decorative stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { value: "48ч", label: "Первый концепт" },
                { value: "Бесплатно", label: "Консультация" },
                { value: "100%", label: "Прозрачность" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-white/40">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {!submitted ? (
            <>
              <h3 className="text-2xl font-bold text-white mb-2">Расскажите о проекте</h3>
              <p className="text-white/40 text-sm mb-8">
                Заполните форму и мы свяжемся с вами в течение 24 часов
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ваше имя"
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Услуга
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-violet-500/60 transition-all duration-300 appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" className="bg-[#1a1a1a]">Выберите услугу</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте, целях и сроках..."
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-[0.98]"
                >
                  Отправить заявку →
                </button>

                <p className="text-center text-xs text-white/25">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Заявка получена!</h3>
              <p className="text-white/50">
                Мы свяжемся с вами в течение 24 часов. Проверьте почту {form.email}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
