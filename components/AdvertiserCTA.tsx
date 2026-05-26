"use client";

import { motion } from "framer-motion";

export default function AdvertiserCTA() {
  return (
    <section
      id="advertiser-cta"
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0f0c04 0%, #141008 35%, #0a0a0a 65%, #080808 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 gold-line-full opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="editorial-label block mb-8">Para anunciantes</span>
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-[#f0ede6] leading-tight tracking-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Sua marca também pode{" "}
          <br className="hidden md:block" />
          <em className="text-gradient-gold">fazer parte desta experiência.</em>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#f0ede6]/55 text-lg leading-loose mb-14 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          A Mais Influente não é apenas uma revista. É uma plataforma de autoridade, uma audiência qualificada e uma experiência editorial que eleva qualquer marca que a ela se associa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="mailto:contato@amaisinfluente.com.br"
            className="btn-gold group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-[#080808] text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Quero anunciar
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
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/5521967472172"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 border border-[rgba(201,168,76,0.4)] text-[#c9a84c] text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:border-gold hover:bg-[rgba(201,168,76,0.06)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-70"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com a equipe
          </a>
        </motion.div>

        {/* Bottom detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 justify-center"
        >
          {[
            "Mídia kit disponível",
            "Proposta em 24h",
            "Formatos exclusivos",
            "Relatório pós-campanha",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[#f0ede6]/30 text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 gold-line-full opacity-20" />
    </section>
  );
}
