"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Audiência própria",
    subtitle: "Leitores qualificados",
    body: "Mulheres e homens de alta renda, com interesse em moda, cultura, arquitetura, saúde e negócios. Um público que decide, consome e influencia.",
    metrics: ["A+ de poder aquisitivo", "35–55 anos", "Rio · SP · Brasil"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Métricas reais",
    subtitle: "Dados que importam",
    body: "Visualizações por seção, tempo de leitura, cliques em anúncios, taxa de engajamento e origem do tráfego. Relatórios detalhados para cada parceiro.",
    metrics: ["Pageviews em tempo real", "Scroll depth por matéria", "Cliques por anunciante"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Anúncios premium",
    subtitle: "Formatos exclusivos",
    body: "Não existe banner genérico aqui. Cada anunciante recebe um espaço editorial tratado como matéria — com narrativa, design e impacto visual de alto padrão.",
    metrics: ["Full-page editorial", "Branded content", "Integração visual total"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function MonetizationBlock() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Full-width gold top line */}
      <div className="absolute top-0 left-0 right-0 gold-line-full opacity-30" />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(201,168,76,0.015) 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="editorial-label block mb-5">Proposta de valor</span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f0ede6] leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mais valor para leitores.{" "}
            <em className="text-gradient-gold">Mais valor para anunciantes.</em>
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-[#1e1e1e] bg-[#0d0d0d] p-8 lg:p-10 card-hover-gold overflow-hidden"
            >
              {/* Number background */}
              <div
                className="absolute top-4 right-6 text-[5rem] font-black leading-none text-[rgba(201,168,76,0.04)] group-hover:text-[rgba(201,168,76,0.07)] transition-colors duration-500 select-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {pillar.number}
              </div>

              {/* Gold vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-gold mb-6 group-hover:border-[rgba(201,168,76,0.5)] transition-colors duration-300">
                {pillar.icon}
              </div>

              {/* Subtitle */}
              <p
                className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {pillar.subtitle}
              </p>

              {/* Title */}
              <h3
                className="text-[#f0ede6] text-2xl font-bold mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {pillar.title}
              </h3>

              {/* Gold line */}
              <div className="gold-line mb-5" />

              {/* Body */}
              <p
                className="text-[#f0ede6]/50 text-sm leading-loose mb-7 group-hover:text-[#f0ede6]/65 transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {pillar.body}
              </p>

              {/* Metrics */}
              <ul className="space-y-2">
                {pillar.metrics.map((m, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2.5 text-[#f0ede6]/40 text-xs group-hover:text-[#f0ede6]/60 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="gold-line-full opacity-15 mb-12" />
          <blockquote
            className="text-[#f0ede6]/40 text-lg italic max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            "O futuro das revistas não está apenas no PDF. Está na experiência."
          </blockquote>
          <p
            className="text-gold/40 text-xs tracking-[0.2em] uppercase mt-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            — Mais Influente
          </p>
        </motion.div>
      </div>

      {/* Full-width gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 gold-line-full opacity-20" />
    </section>
  );
}
