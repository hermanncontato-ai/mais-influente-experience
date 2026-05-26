"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    label: "Moda",
    edition: "Los Angeles · 2026",
    title: "Em Los Angeles, brasileira é destaque do desfile da Dior",
    subtitle: "Victoria Blecher",
    body: "No palco mais cobiçado da moda internacional, a brasileira Victoria Blecher entrou em cena com a elegância discreta que só os verdadeiros talentos possuem. No desfile de primavera da Dior em Los Angeles, ela não apenas vestiu a grife — ela a representou.",
    gradient: "moda-gradient",
    accent: "rgba(100,110,180,0.08)",
    tag: "Moda Internacional",
    image: "/images/magazine/moda/dior-1.jpg",
  },
  {
    label: "Cultura",
    edition: "São Paulo · 2026",
    title: "Casa Natura Musical comemora nove anos e se consolida na cena brasileira",
    subtitle: "Nove anos de história",
    body: "Referência em conforto e experiência musical, o Casa Natura Musical completou nove anos unindo história, inovação e diversidade. Eleita por três anos consecutivos a melhor casa de shows de São Paulo, ela é case de sucesso no diálogo entre marcas e comunidades.",
    gradient: "casa-gradient",
    accent: "rgba(60,130,80,0.08)",
    tag: "Música & Cultura",
    image: "/images/magazine/casa-natura/casa-natura.jpg",
  },
  {
    label: "Decoração",
    edition: "Rio de Janeiro · 2026",
    title: "A força da decoração moderna",
    subtitle: "Morar com Estilo",
    body: "Decorar um espaço não é apenas sobre estética — é sobre criar o cenário em que a vida acontece. A decoração moderna brasileira respira identidade, cor contida e formas que dialogam com a arquitetura contemporânea.",
    gradient: "morar-gradient",
    accent: "rgba(180,150,60,0.07)",
    tag: "Arquitetura & Design",
    image: "/images/magazine/morar/morar-1.jpg",
  },
  {
    label: "Bem-estar",
    edition: "Brasil · 2026",
    title: "Mente e corpo em equilíbrio",
    subtitle: "Saúde & Longevidade",
    body: "A busca por equilíbrio entre mente e corpo nunca foi tão presente na vida dos brasileiros de alta performance. Protocolos de longevidade, saúde integrativa e o que as ciências mais avançadas revelam sobre viver mais — e melhor.",
    gradient: "saude-gradient",
    accent: "rgba(60,100,160,0.08)",
    tag: "Saúde & Bem-estar",
    image: "/images/magazine/saude/saude.jpg",
  },
];

export default function FeaturedStories() {
  return (
    <section className="py-28 lg:py-36 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <span className="editorial-label block mb-5">Seleção editorial</span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f0ede6] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Matérias em{" "}
            <em className="text-gradient-gold">destaque</em>
          </h2>
          <div className="gold-line-full mt-8 opacity-20" />
        </motion.div>

        {/* Stories grid */}
        <div className="space-y-6">
          {stories.map((story, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i % 2 === 0 ? 0 : 0.12 }}
              className={`group grid ${
                i % 2 === 0
                  ? "lg:grid-cols-[1fr_1.6fr]"
                  : "lg:grid-cols-[1.6fr_1fr]"
              } gap-0 border border-[#1a1a1a] overflow-hidden card-hover-gold`}
            >
              {/* Image block */}
              <div
                className={`relative min-h-[280px] lg:min-h-[360px] overflow-hidden ${
                  i % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                {/* Fallback gradient (shown when image is absent) */}
                <div className={`absolute inset-0 ${story.gradient}`} />
                {/* Real image — loads on top of gradient */}
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Accent glow overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${story.accent} 0%, transparent 70%)`,
                  }}
                />
                {/* Edition tag */}
                <div className="absolute top-6 left-6">
                  <span
                    className="inline-block px-3 py-1.5 border border-[rgba(201,168,76,0.3)] text-gold text-[10px] tracking-[0.2em] uppercase bg-[rgba(8,8,8,0.5)] backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {story.tag}
                  </span>
                </div>
                {/* Bottom label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="gold-line mb-3" />
                  <p
                    className="text-[#f0ede6]/40 text-[10px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {story.edition}
                  </p>
                </div>
                {/* Hover scale effect */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>

              {/* Text block */}
              <div
                className={`flex flex-col justify-center p-10 lg:p-14 bg-[#0d0d0d] group-hover:bg-[#101010] transition-colors duration-500 ${
                  i % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                {/* Label row */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="gold-line" />
                  <span
                    className="editorial-label"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {story.label}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className="text-gold/70 text-sm tracking-[0.1em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {story.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-[#f0ede6] leading-tight mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {story.title}
                </h3>

                {/* Body */}
                <p
                  className="text-[#f0ede6]/55 text-sm leading-loose mb-8 max-w-prose"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {story.body}
                </p>

                {/* CTA */}
                <div>
                  <button
                    className="group/btn inline-flex items-center gap-3 text-gold text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:gap-4 animated-underline"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Explorar matéria
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      <path
                        d="M2 7H12M12 7L8 3M12 7L8 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
