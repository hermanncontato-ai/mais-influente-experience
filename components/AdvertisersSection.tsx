"use client";

import { motion } from "framer-motion";

const advertisers = [
  {
    name: "Fairmont Rio",
    category: "Hotelaria de Luxo",
    description:
      "Elegância, localização única e uma experiência de hospitalidade que define o padrão de luxo no Rio de Janeiro.",
    detail: "O endereço mais sofisticado da cidade.",
    color: "from-[#151008] to-[#0d0d0d]",
    glow: "rgba(200,170,80,0.07)",
    link: "/images/magazine/anunciantes/fairmont-rio.jpg",
  },
  {
    name: "Sesc RJ",
    category: "Cultura & Lazer",
    description:
      "Arte, cultura, saúde e lazer reunidos em um único espaço que é referência para o Rio e para o Brasil.",
    detail: "Onde a cultura ganha vida.",
    color: "from-[#0d1020] to-[#0d0d0d]",
    glow: "rgba(80,100,200,0.07)",
  },
  {
    name: "Azul",
    category: "Aviação Premium",
    description:
      "Reconhecida como a melhor companhia aérea do mundo, a Azul conecta o Brasil com conforto e inovação.",
    detail: "Voar nunca foi tão especial.",
    color: "from-[#0a1020] to-[#0d0d0d]",
    glow: "rgba(40,80,180,0.08)",
  },
  {
    name: "Roxy Dinner Show",
    category: "Gastronomia & Entretenimento",
    description:
      "A mais sofisticada experiência gastronômica e de entretenimento do Rio de Janeiro — onde a noite se torna inesquecível.",
    detail: "Uma noite que você nunca vai esquecer.",
    color: "from-[#1a0d10] to-[#0d0d0d]",
    glow: "rgba(180,60,80,0.07)",
  },
  {
    name: "Hotel Santa Teresa",
    category: "Boutique Hotel",
    description:
      "No coração do bairro mais boêmio do Rio, um refúgio de charme, história e hospitalidade contemporânea.",
    detail: "Santa Teresa como você nunca viu.",
    color: "from-[#0d1510] to-[#0d0d0d]",
    glow: "rgba(60,130,80,0.07)",
  },
  {
    name: "Visit Rio",
    category: "Turismo & Destinos",
    description:
      "O guia definitivo do Rio de Janeiro para quem quer viver a cidade com profundidade, estilo e autenticidade.",
    detail: "Descubra o Rio que poucos conhecem.",
    color: "from-[#08120d] to-[#0d0d0d]",
    glow: "rgba(30,100,60,0.07)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AdvertisersSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 50% at 50% 50%, rgba(201,168,76,0.02) 0%, transparent 70%)",
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
          <span className="editorial-label block mb-5">Parceiros da edição</span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f0ede6] leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Anunciantes ganham mais do que espaço.{" "}
            <em className="text-gradient-gold">Ganham experiência.</em>
          </h2>
          <p
            className="text-[#f0ede6]/45 text-sm mt-6 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            As marcas que escolhem a Mais Influente não anunciam — elas protagonizam. Cada parceiro tem seu espaço editorial tratado com o mesmo cuidado que as nossas matérias.
          </p>
          <div className="gold-line-full mt-8 opacity-20" />
        </motion.div>

        {/* Advertisers grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {advertisers.map((adv, i) => {
            const cardInner = (
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative border border-[#1e1e1e] bg-[#0a0a0a] overflow-hidden card-hover-gold cursor-pointer h-full"
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${adv.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${adv.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />

                {/* Content */}
                <div className="relative p-8 flex flex-col gap-5 min-h-[260px]">
                  {/* Category */}
                  <span
                    className="editorial-label"
                    style={{ fontSize: "0.58rem" }}
                  >
                    {adv.category}
                  </span>

                  {/* Name */}
                  <h3
                    className="text-[#f0ede6] text-2xl font-bold leading-tight group-hover:text-gradient-gold transition-all duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {adv.name}
                  </h3>

                  {/* Divider */}
                  <div className="gold-line group-hover:w-full transition-all duration-500" />

                  {/* Description */}
                  <p
                    className="text-[#f0ede6]/50 text-sm leading-relaxed group-hover:text-[#f0ede6]/70 transition-colors duration-300 flex-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {adv.description}
                  </p>

                  {/* Detail / CTA */}
                  <div className="flex items-center justify-between mt-2">
                    <p
                      className="text-gold/60 text-xs italic group-hover:text-gold/90 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {adv.detail}
                    </p>
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-gold text-xs tracking-[0.15em] uppercase"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Ver destaque
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 5H9M9 5L6 2M9 5L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            );

            return adv.link ? (
              <a
                key={i}
                href={adv.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {cardInner}
              </a>
            ) : (
              <div key={i}>{cardInner}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
