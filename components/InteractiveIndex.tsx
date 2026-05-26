"use client";

import { motion } from "framer-motion";

const sections = [
  {
    number: "01",
    title: "Capa",
    desc: "Karla Felmanas — liderança feminina e visão de futuro",
    accent: "from-[#1a0d18] to-[#0d0808]",
    link: "/images/magazine/capa/capa-maio-2026.jpg",
  },
  {
    number: "02",
    title: "Moda",
    desc: "Victoria Blecher no desfile da Dior em Los Angeles",
    accent: "from-[#0d1020] to-[#080808]",
    link: "/images/magazine/moda/dior-2.jpg",
  },
  {
    number: "03",
    title: "Empresário",
    desc: "Perfis de líderes que estão moldando o Brasil corporativo",
    accent: "from-[#0d1510] to-[#080808]",
    link: "/images/magazine/personalidades/empresario-de-sucesso.pdf",
  },
  {
    number: "04",
    title: "Escritora",
    desc: "Vozes literárias que inspiram e provocam reflexão",
    accent: "from-[#15120a] to-[#080808]",
  },
  {
    number: "05",
    title: "Reflexão",
    desc: "Pensamentos e perspectivas que desafiam o presente",
    accent: "from-[#101520] to-[#080808]",
  },
  {
    number: "06",
    title: "Serviço",
    desc: "Guias, recomendações e experiências selecionadas a dedo",
    accent: "from-[#0d1218] to-[#080808]",
  },
  {
    number: "07",
    title: "Morar",
    desc: "Arquitetura e decoração para espaços que inspiram",
    accent: "from-[#151008] to-[#080808]",
  },
  {
    number: "08",
    title: "Arquitetura",
    desc: "Projetos que celebram forma, função e beleza",
    accent: "from-[#0d1015] to-[#080808]",
  },
  {
    number: "09",
    title: "Social",
    desc: "Os eventos e encontros que definem a cultura da cidade",
    accent: "from-[#1a1010] to-[#080808]",
  },
  {
    number: "10",
    title: "Saúde",
    desc: "Mente e corpo em equilíbrio — longevidade com qualidade",
    accent: "from-[#0a1520] to-[#080808]",
  },
  {
    number: "11",
    title: "Casa Natura",
    desc: "Nove anos de música, cultura e memória afetiva",
    accent: "from-[#0d1810] to-[#080808]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function InteractiveIndex() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <span className="editorial-label block mb-5">Edição completa</span>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f0ede6] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Índice{" "}
              <em className="text-gradient-gold">interativo</em>
            </h2>
            <p
              className="text-[#f0ede6]/50 text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore cada seção da edição de Maio 2026
            </p>
          </div>
          <div className="gold-line-full mt-8 opacity-20" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {sections.map((section, i) => {
            const CardTag = section.link ? motion.a : motion.div;
            const linkProps = section.link
              ? { href: section.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <CardTag
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-hover-gold group relative cursor-pointer border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden"
                {...linkProps}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-90`}
                />

                {/* Gold top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="relative p-6 flex flex-col gap-4 min-h-[160px] justify-between">
                  {/* Number */}
                  <div
                    className="text-[3rem] font-black leading-none text-[rgba(201,168,76,0.06)] group-hover:text-[rgba(201,168,76,0.1)] transition-colors duration-500 select-none absolute top-4 right-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {section.number}
                  </div>

                  <div>
                    <div className="gold-line mb-3" />
                    <h3
                      className="text-[#f0ede6]/90 font-semibold text-lg leading-tight group-hover:text-[#f0ede6] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {section.title}
                    </h3>
                  </div>

                  <div>
                    <p
                      className="text-[#f0ede6]/45 text-xs leading-relaxed group-hover:text-[#f0ede6]/65 transition-colors duration-300 mb-4"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {section.desc}
                    </p>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="text-gold text-xs tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Explorar
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6H10M10 6L7 3M10 6L7 9"
                          stroke="#c9a84c"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardTag>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
