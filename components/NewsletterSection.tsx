"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to Mailchimp / Brevo / RD Station / custom API
    // Example: await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ name, email }) })
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 65%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 gold-line-full opacity-20" />

      {/* Decorative large text */}
      <div
        className="absolute right-0 bottom-0 text-[18rem] leading-none font-black text-[rgba(201,168,76,0.02)] select-none pointer-events-none translate-y-1/3"
        style={{ fontFamily: "var(--font-playfair)" }}
        aria-hidden="true"
      >
        MI
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="editorial-label block mb-6">Newsletter exclusiva</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f0ede6] leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Receba as próximas edições{" "}
          <em className="text-gradient-gold">em primeira mão</em>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[#f0ede6]/50 text-base leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Conteúdo editorial premium, lançamentos exclusivos e curadoria selecionada — direto no seu e-mail, sem spam, sem ruído.
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Name field */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Seu nome"
                  className="input-gold w-full bg-[#101010] border text-[#f0ede6] text-sm py-4 px-5 placeholder:text-[#f0ede6]/25 transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-inter)",
                    borderColor:
                      focused === "name"
                        ? "rgba(201,168,76,0.6)"
                        : "rgba(255,255,255,0.08)",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email field */}
              <div className="relative flex-[1.5]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="input-gold w-full bg-[#101010] border text-[#f0ede6] text-sm py-4 px-5 placeholder:text-[#f0ede6]/25 transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-inter)",
                    borderColor:
                      focused === "email"
                        ? "rgba(201,168,76,0.6)"
                        : "rgba(255,255,255,0.08)",
                    outline: "none",
                  }}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold flex-shrink-0 px-8 py-4 bg-gold text-[#080808] text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold-light whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Quero receber
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="py-10 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.04)]"
            >
              <div className="text-gold mb-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mx-auto"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                className="text-[#f0ede6]/80 text-lg"
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
              >
                Bem-vindo à experiência Mais Influente.
              </p>
              <p
                className="text-[#f0ede6]/40 text-xs tracking-[0.15em] uppercase mt-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Você receberá a próxima edição em primeira mão.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Privacy note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-[#f0ede6]/25 text-xs mt-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Seus dados são protegidos. Cancelamento a qualquer momento.
        </motion.p>
      </div>
    </section>
  );
}
