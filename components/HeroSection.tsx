"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#070707] overflow-hidden">

      {/* ── Subtle background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold radial glow — left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 90% at 18% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />
        {/* Fine editorial grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Vertical accent — separates left text from right cover */}
        <div
          className="absolute top-0 bottom-0 hidden lg:block opacity-[0.07]"
          style={{
            left: "44%",
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent 5%, #c9a84c 25%, #c9a84c 75%, transparent 95%)",
          }}
        />
      </div>

      {/* ── Main layout grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-0 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-20 items-center">

          {/* ─────────────────── LEFT: Editorial content ─────────────────── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Edition badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="gold-line" />
              <span className="editorial-label">Edição digital · Maio 2026</span>
            </motion.div>

            {/* Edition meta */}
            <motion.p
              variants={itemVariants}
              className="text-[#f0ede6]/30 text-[10px] tracking-[0.45em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nº 24 · 97 páginas · Liberado Junior Grupo de Comunicação
            </motion.p>

            {/* ── Masthead ── */}
            <motion.div variants={itemVariants} className="mb-7">
              <h1
                className="text-[clamp(3rem,7.5vw,7rem)] font-black leading-[0.88] tracking-tighter text-[#f0ede6]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MAIS
              </h1>
              <h1
                className="text-[clamp(3rem,7.5vw,7rem)] font-black leading-[0.88] tracking-tighter text-gradient-gold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                INFLUENTE
              </h1>
            </motion.div>

            {/* Gold rule */}
            <motion.div variants={itemVariants}>
              <div className="gold-line-full opacity-15 mb-8" />
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-12">
              <p
                className="text-[#f0ede6]/60 text-[1.1rem] font-light leading-relaxed mb-1.5 max-w-lg"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                A revista deixa de ser apenas lida.
              </p>
              <p
                className="text-[#f0ede6]/80 text-[1.1rem] leading-relaxed max-w-lg italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Agora ela passa a ser vivida.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href="#concept"
                className="btn-gold group inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#080808] text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-gold-light"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Explorar edição
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#advertiser-cta"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[rgba(201,168,76,0.35)] text-[#c9a84c] text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:border-gold hover:bg-[rgba(201,168,76,0.06)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Anunciar na próxima edição
              </a>
            </motion.div>

            {/* Cover story pull quote */}
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-5 border-l-2 border-[rgba(201,168,76,0.35)] pl-5"
            >
              <div>
                <p
                  className="text-gold/55 text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Matéria de capa
                </p>
                <p
                  className="text-[#f0ede6]/60 text-sm leading-relaxed italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Karla Felmanas: a executiva que inspira uma nova geração de mulheres líderes no Brasil
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ─────────────────── RIGHT: Physical magazine cover ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="hidden lg:flex flex-col items-center"
          >
            <div className="relative">
              {/* Gold atmospheric glow behind magazine */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-40px",
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(201,168,76,0.18) 0%, transparent 70%)",
                  filter: "blur(24px)",
                  opacity: 0.7,
                }}
              />

              {/* Magazine cover */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "340px",
                  boxShadow:
                    "0 60px 130px rgba(0,0,0,0.9), 0 0 0 1px rgba(201,168,76,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <Image
                  src="/images/magazine/capa/capa-maio-2026.jpg"
                  alt="Capa Mais Influente Maio 2026"
                  width={340}
                  height={490}
                  className="block w-full"
                  priority
                />
                {/* Glass sheen overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(0,0,0,0.14) 100%)",
                  }}
                />
              </div>

              {/* Caption */}
              <div className="flex items-center gap-3 mt-5 justify-center">
                <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.3)" }} />
                <p
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(240,237,230,0.22)" }}
                >
                  Edição Maio 2026 · Nº 24
                </p>
                <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.3)" }} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="editorial-label" style={{ fontSize: "0.6rem" }}>
          Role para explorar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent"
        />
      </motion.div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 gold-line-full opacity-30" />
    </section>
  );
}
