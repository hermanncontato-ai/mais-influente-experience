"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoverStorySection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height + window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      bgRef.current.style.transform = `translateY(${clampedProgress * 30}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#080808]"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={{ transform: "translateY(0px)" }}
      >
        {/* Base escura */}
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute inset-0 karla-gradient" />

        {/* Camada 1 — imagem inteira borrada: funde com o fundo */}
        <div
          className="absolute inset-0"
          style={{ filter: "blur(40px)", opacity: 0.3, transform: "scale(1.15)" }}
        >
          <Image
            src="/images/magazine/karla-felmanas/banner-karla.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            quality={60}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* Camada 2 — imagem nítida, mascarada para mostrar só rosto e busto */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 52% 62% at 62% 32%, black 0%, black 28%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.15) 70%, transparent 88%)",
            maskImage:
              "radial-gradient(ellipse 52% 62% at 62% 32%, black 0%, black 28%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.15) 70%, transparent 88%)",
          }}
        >
          <Image
            src="/images/magazine/karla-felmanas/banner-karla.png"
            alt="Karla Felmanas"
            fill
            sizes="100vw"
            quality={80}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        {/* Textural layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 65% 35%, rgba(180,60,80,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 30% 60%, rgba(201,168,76,0.04) 0%, transparent 70%)",
          }}
        />
        {/* Fine grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top gradient for section blending */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080808] to-transparent z-10" />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[rgba(8,8,8,0.4)] to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[rgba(8,8,8,0.3)] to-transparent z-10" />

      {/* Decorative quote mark */}
      <div
        className="absolute top-1/4 right-1/4 text-[20rem] leading-none text-[rgba(201,168,76,0.02)] select-none pointer-events-none z-10"
        style={{ fontFamily: "var(--font-playfair)" }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 lg:pb-32 pt-32 lg:pt-0">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="gold-line" />
            <span className="editorial-label">Matéria de capa</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-tight text-[#f0ede6] mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Karla Felmanas:{" "}
            <em className="text-gradient-gold">a executiva que inspira</em>{" "}
            uma nova geração de mulheres líderes no Brasil
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#f0ede6]/65 text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Com uma trajetória que mistura estratégia, empatia e visão de futuro, ela redefine o que significa liderar no século XXI — transformando empresas e vidas com igual naturalidade.
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="border-l-2 border-gold pl-6 mb-10"
          >
            <p
              className="text-[#f0ede6]/75 text-xl leading-relaxed italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              "Liderar é sobre criar condições para que outros também possam brilhar."
            </p>
            <cite
              className="text-gold/70 text-xs tracking-[0.2em] uppercase not-italic mt-3 block"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              — Karla Felmanas
            </cite>
          </motion.blockquote>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <button
              className="btn-gold group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold text-gold text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-gold hover:text-[#080808]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ler matéria principal
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
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line-full opacity-20 z-20" />
    </section>
  );
}
