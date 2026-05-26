"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "97", label: "Páginas de conteúdo" },
  { number: "12+", label: "Marcas parceiras" },
  { number: "∞", label: "Alcance digital" },
];

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Conteúdo imersivo",
    desc: "Cada matéria ganha profundidade com scroll cinematográfico, animações e interatividade.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Métricas reais",
    desc: "Saiba exatamente quem leu, quanto tempo ficou e quais seções engajaram mais.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Valor comercial",
    desc: "Anúncios com experiência, links diretos e ROI mensurável para cada parceiro.",
  },
];

export default function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative py-32 lg:py-40 bg-[#080808] overflow-hidden"
    >
      {/* Decorative side accent */}
      <div
        className="absolute top-0 left-0 w-px h-full opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="editorial-label block mb-6">
              O conceito
            </span>

            <h2
              className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight text-[#f0ede6] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Uma nova experiência{" "}
              <em className="text-gradient-gold not-italic">editorial digital</em>
            </h2>

            <div
              className="space-y-5 text-[#f0ede6]/65 leading-loose mb-12"
              style={{ fontFamily: "var(--font-inter)", fontSize: "1rem" }}
            >
              <p>
                A <strong className="text-[#f0ede6]/90 font-medium">Mais Influente</strong> sempre foi uma publicação de alto padrão. Mas uma edição impressa ou um arquivo PDF tem limites que uma experiência digital não precisa ter.
              </p>
              <p>
                Esta plataforma transforma cada página da revista em uma jornada interativa: com animações, profundidade, links, métricas reais e uma presença de marca que vai muito além do papel.
              </p>
              <p>
                O resultado? Leitores mais engajados. Anunciantes com mais retorno. Uma publicação que compete de igual para igual com as grandes plataformas editoriais internacionais.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-[rgba(201,168,76,0.25)] flex items-center justify-center text-gold mt-0.5">
                    {b.icon}
                  </div>
                  <div>
                    <div
                      className="text-[#f0ede6]/90 font-medium text-sm mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {b.title}
                    </div>
                    <div
                      className="text-[#f0ede6]/50 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {b.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Magazine cover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex flex-col"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                  className="text-center p-5 border border-[#2a2a2a] bg-[#101010]"
                >
                  <div
                    className="text-3xl font-bold text-gradient-gold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.number}
                  </div>
                  <div
                    className="text-[#f0ede6]/40 text-xs tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Real magazine cover */}
            <div className="relative">
              {/* Atmospheric glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-20px -20px -30px -20px",
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(201,168,76,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  opacity: 0.8,
                }}
              />

              {/* Cover image */}
              <div
                className="relative overflow-hidden border border-[rgba(201,168,76,0.14)]"
                style={{
                  boxShadow: "0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="relative aspect-[3/4.3]">
                  <Image
                    src="/images/magazine/karla-felmanas/karla-editorial.jpg"
                    alt="Karla Felmanas Editorial"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-top"
                  />
                  {/* Glass sheen */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, transparent 45%, rgba(0,0,0,0.1) 100%)",
                    }}
                  />
                  {/* Bottom edition bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(8,8,8,0.85)] to-transparent">
                    <p
                      className="text-[10px] tracking-[0.25em] uppercase text-gold/60"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Mais Influente · Edição Nº 24 · Mai 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <span
                  className="text-[#f0ede6]/25 text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Prévia da edição · Maio 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
