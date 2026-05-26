# Imagens da Revista Mais Influente

Coloque as imagens extraídas do PDF aqui, seguindo a estrutura abaixo.

## Estrutura sugerida

```
public/images/magazine/
│
├── capa/
│   └── capa-maio-2026.jpg          # Capa da revista (alta resolução)
│
├── karla-felmanas/
│   ├── karla-principal.jpg         # Foto principal de capa
│   ├── karla-entrevista-1.jpg      # Fotos da matéria
│   └── karla-entrevista-2.jpg
│
├── moda/
│   ├── victoria-blecher-dior-1.jpg # Fotos do desfile Dior LA
│   ├── victoria-blecher-dior-2.jpg
│   └── victoria-blecher-dior-3.jpg
│
├── casa-natura/
│   ├── casa-natura-9anos.jpg       # Casa Natura Musical
│   └── casa-natura-show.jpg
│
├── morar/
│   ├── decoracao-moderna-1.jpg     # Fotos de decoração/arquitetura
│   └── decoracao-moderna-2.jpg
│
├── saude/
│   └── saude-bem-estar.jpg         # Fotos da seção saúde
│
├── social/
│   └── social-eventos.jpg          # Fotos de eventos sociais
│
├── anunciantes/
│   ├── fairmont-rio.jpg
│   ├── sesc-rj.jpg
│   ├── azul.jpg
│   ├── roxy-dinner-show.jpg
│   ├── hotel-santa-teresa.jpg
│   └── visit-rio.jpg
│
└── galeria/
    ├── galeria-01.jpg              # Imagens para a galeria editorial
    ├── galeria-02.jpg
    ├── galeria-03.jpg
    └── ...
```

## Como usar as imagens nos componentes

Depois de adicionar as imagens, substitua os gradientes CSS por `<Image>` do Next.js:

```tsx
import Image from "next/image";

// Substitua:
<div className="absolute inset-0 karla-gradient" />

// Por:
<Image
  src="/images/magazine/karla-felmanas/karla-principal.jpg"
  alt="Karla Felmanas"
  fill
  className="object-cover"
  priority
/>
```

## Formatos recomendados

- **Formato:** JPG (alta qualidade) ou WebP
- **Resolução:** mínimo 1200px de largura para imagens fullscreen
- **Hero/Capa:** 1600×2400px (formato retrato)
- **Matérias:** 1200×800px (formato paisagem) ou 800×1200px (retrato)
- **Galeria:** 800×1200px para verticais, 1200×800px para horizontais

## Extração do PDF

Use ferramentas como:
- Adobe Acrobat (File > Export > Image)
- PDF Candy (pdfcandy.com)
- Smallpdf (smallpdf.com/pdf-to-jpg)
- ImageMagick (linha de comando): `convert -density 300 arquivo.pdf pagina-%d.jpg`
