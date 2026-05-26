"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Revista", href: "#concept" },
  { label: "Anuncie", href: "#advertiser-cta" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Contato", href: "mailto:contato@amaisinfluente.com.br" },
];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@amaisinfluente",
    href: "https://instagram.com/amaisinfluente",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Website",
    handle: "amaisinfluente.com.br",
    href: "https://amaisinfluente.com.br",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Top gold line */}
      <div className="gold-line-full opacity-25" />

      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="mb-6">
              <h2
                className="text-4xl font-black leading-none text-[#f0ede6] tracking-tighter"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MAIS
              </h2>
              <h2
                className="text-4xl font-black leading-none text-gradient-gold tracking-tighter"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                INFLUENTE
              </h2>
            </div>

            <div className="gold-line mb-6" />

            {/* Tagline */}
            <p
              className="text-[#f0ede6]/50 text-sm leading-loose max-w-xs mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Uma publicação premium sobre liderança, moda, cultura, arquitetura e bem-estar — para quem molda o presente e inspira o futuro.
            </p>

            {/* Social */}
            <div className="flex flex-col gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#f0ede6]/35 hover:text-gold transition-colors duration-300"
                >
                  <span className="text-[#f0ede6]/25 group-hover:text-gold transition-colors duration-300">
                    {s.icon}
                  </span>
                  <span
                    className="text-xs tracking-wider animated-underline"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3
              className="editorial-label mb-6"
              style={{ fontSize: "0.58rem" }}
            >
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-[#f0ede6]/40 hover:text-[#f0ede6]/80 transition-colors duration-300 text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Edição info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="editorial-label mb-6"
              style={{ fontSize: "0.58rem" }}
            >
              Edição atual
            </h3>
            <div className="space-y-4">
              <div>
                <p
                  className="text-[#f0ede6]/25 text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Volume
                </p>
                <p
                  className="text-[#f0ede6]/70 text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Edição Nº 24
                </p>
              </div>
              <div>
                <p
                  className="text-[#f0ede6]/25 text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Publicação
                </p>
                <p
                  className="text-[#f0ede6]/70 text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Maio 2026
                </p>
              </div>
              <div>
                <p
                  className="text-[#f0ede6]/25 text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Diretor
                </p>
                <p
                  className="text-[#f0ede6]/70 text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Liberado Júnior
                </p>
              </div>
              <div>
                <p
                  className="text-[#f0ede6]/25 text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Grupo
                </p>
                <p
                  className="text-[#f0ede6]/70 text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Liberado Junior<br />
                  Grupo de Comunicação
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gold divider */}
        <div className="gold-line-full opacity-15 mb-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Closing phrase */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#f0ede6]/30 text-sm italic text-center md:text-left"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            "O futuro das revistas não está apenas no PDF. Está na experiência."
          </motion.p>

          {/* Copyright */}
          <p
            className="text-[#f0ede6]/20 text-xs tracking-wider text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © 2026 Mais Influente · Liberado Junior Grupo de Comunicação
          </p>
        </div>
      </div>
    </footer>
  );
}
