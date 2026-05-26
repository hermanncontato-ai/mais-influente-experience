"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Layout: 4 colunas, 3 linhas limpas (sem buracos)
// Linha 1: Karla(tall R1-R2 C1) | Victoria(C2) | Morar(C3) | CasaNatura(C4)
// Linha 2: [Karla]              | Lifestyle(C2) | Roxy(C3)  | VisitRio(C4)
// Linha 3: Arquitetura(C1)      | Social(C2)    | Multishow(C3) | MED.RIO(C4)
const galleryItems = [
  {
    caption: "Karla Felmanas — Capa Mais Influente Mai 2026",
    gradient: "karla-gradient",
    size: "tall",
    accent: "rgba(160,60,80,0.12)",
    image: "/images/magazine/capa/capa-maio-2026.jpg",
    pos: "center top",
  },
  {
    caption: "Victoria Blecher · Destaque Dior Los Angeles",
    gradient: "moda-gradient",
    size: "normal",
    accent: "rgba(80,90,180,0.12)",
    image: "/images/magazine/moda/dior-1.jpg",
    pos: "center top",
  },
  {
    caption: "Morar com Estilo — Interiores Contemporâneos",
    gradient: "morar-gradient",
    size: "normal",
    accent: "rgba(180,150,60,0.1)",
    image: "/images/magazine/morar/morar-1.jpg",
    pos: "center center",
  },
  {
    caption: "Casa Natura Musical · 9 anos de história",
    gradient: "casa-gradient",
    size: "normal",
    accent: "rgba(60,130,80,0.1)",
    image: "/images/magazine/casa-natura/casa-natura.jpg",
    pos: "center center",
  },
  {
    caption: "Lifestyle · Momentos de Celebração",
    gradient: "morar-gradient",
    size: "normal",
    accent: "rgba(140,80,40,0.1)",
    image: "/images/magazine/galeria/galeria-05.jpg",
    pos: "center center",
  },
  {
    caption: "Roxy Dinner Show · Cultura & Espetáculo",
    gradient: "karla-gradient",
    size: "normal",
    accent: "rgba(180,40,40,0.12)",
    image: "/images/magazine/galeria/galeria-03.jpg",
    pos: "center center",
  },
  {
    caption: "Visit Rio · Gastronomia da Cidade Maravilhosa",
    gradient: "morar-gradient",
    size: "normal",
    accent: "rgba(180,130,40,0.1)",
    image: "/images/magazine/galeria/galeria-04.jpg",
    pos: "center center",
  },
  {
    caption: "Arquitetura · Design de Interiores Refinado",
    gradient: "morar-gradient",
    size: "normal",
    accent: "rgba(120,90,40,0.1)",
    image: "/images/magazine/galeria/galeria-06.jpg",
    pos: "center center",
  },
  {
    caption: "Coluna Social · Personalidades 2026",
    gradient: "moda-gradient",
    size: "normal",
    accent: "rgba(120,60,100,0.1)",
    image: "/images/magazine/galeria/galeria-10.jpg",
    pos: "center center",
  },
  {
    caption: "Multishow · Prêmio de Humor 2026",
    gradient: "casa-gradient",
    size: "normal",
    accent: "rgba(60,100,60,0.1)",
    image: "/images/magazine/galeria/galeria-09.jpg",
    pos: "center center",
  },
  {
    caption: "MED.RIO Check-up · Saúde & Bem-estar",
    gradient: "saude-gradient",
    size: "normal",
    accent: "rgba(40,100,160,0.12)",
    image: "/images/magazine/galeria/med-rio-checkup.png",
    pos: "center center",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function EditorialGallery() {
  return (
    <section className="py-28 lg:py-36 bg-[#060606] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="editorial-label block mb-5">Imagens da edição</span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f0ede6] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Galeria{" "}
            <em className="text-gradient-gold">editorial</em>
          </h2>
          <p
            className="text-[#f0ede6]/45 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Cada imagem conta uma história. Cada história compõe uma edição.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[240px]"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative overflow-hidden cursor-pointer border border-[#1a1a1a] ${
                item.size === "tall"
                  ? "row-span-2"
                  : item.size === "wide"
                  ? "col-span-2"
                  : ""
              }`}
            >
              {/* Fallback gradient */}
              <div className={`absolute inset-0 ${item.gradient}`} />
              {/* Real image — scales on hover */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ objectPosition: item.pos ?? "center center" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              )}
              {/* Accent glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${item.accent} 0%, transparent 70%)`,
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/30 transition-colors duration-500" />

              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-[rgba(8,8,8,0.9)] to-transparent pt-10">
                <p
                  className="text-[#f0ede6]/85 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.caption}
                </p>
              </div>

              {/* Always visible subtle number */}
              <div
                className="absolute top-3 left-4 text-[rgba(201,168,76,0.15)] text-4xl font-black leading-none select-none group-hover:opacity-0 transition-opacity duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p
            className="text-[#f0ede6]/30 text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Edição Mais Influente · Maio 2026 · Liberado Junior Grupo de Comunicação
          </p>
        </motion.div>
      </div>
    </section>
  );
}
