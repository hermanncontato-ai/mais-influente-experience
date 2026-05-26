"""
Extrator de imagens da revista Mais Influente
=============================================
Uso:
    python scripts/extrair-imagens.py caminho/para/revista.pdf
"""

import sys
import os
import fitz  # PyMuPDF
from PIL import Image
import shutil

# ── Configuracao ──────────────────────────────────────────────
DPI = 200          # qualidade de extracao (150 = rapido, 250 = max qualidade)
MAX_WIDTH = 1800   # largura maxima para web (px)
QUALITY = 88       # qualidade JPEG (0-100)

# Mapeamento: pagina do PDF (0-indexed) -> (pasta_destino, nome_arquivo)
PAGE_MAP = {
    0:  ("capa",           "capa-maio-2026.jpg"),
    5:  ("karla-felmanas", "karla-principal.jpg"),
    6:  ("karla-felmanas", "karla-2.jpg"),
    7:  ("karla-felmanas", "karla-3.jpg"),
    8:  ("karla-felmanas", "karla-4.jpg"),
    24: ("moda",           "dior-1.jpg"),
    25: ("moda",           "dior-2.jpg"),
    26: ("moda",           "dior-3.jpg"),
    39: ("casa-natura",    "casa-natura.jpg"),
    40: ("casa-natura",    "casa-natura-2.jpg"),
    54: ("morar",          "morar-1.jpg"),
    55: ("morar",          "morar-2.jpg"),
    64: ("saude",          "saude.jpg"),
    65: ("saude",          "saude-2.jpg"),
    10: ("galeria",        "galeria-01.jpg"),
    15: ("galeria",        "galeria-02.jpg"),
    20: ("galeria",        "galeria-03.jpg"),
    30: ("galeria",        "galeria-04.jpg"),
    45: ("galeria",        "galeria-05.jpg"),
    50: ("galeria",        "galeria-06.jpg"),
    70: ("galeria",        "galeria-07.jpg"),
    80: ("galeria",        "galeria-08.jpg"),
}
# ─────────────────────────────────────────────────────────────

def resize_for_web(img, max_width):
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)
    return img


def extract_and_organize(pdf_path):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    images_base = os.path.join(project_root, "public", "images", "magazine")
    extracted_dir = os.path.join(images_base, "_extraidas")

    os.makedirs(extracted_dir, exist_ok=True)

    print("\nAbrindo PDF: " + pdf_path)
    doc = fitz.open(pdf_path)
    total = len(doc)
    print("Total de paginas: " + str(total) + "\n")

    # ── Etapa 1: extrai todas as paginas ──
    print("--- Etapa 1: Extraindo todas as paginas ---")
    for page_num in range(total):
        page = doc[page_num]
        mat = fitz.Matrix(DPI / 72, DPI / 72)
        pix = page.get_pixmap(matrix=mat, alpha=False)

        output_path = os.path.join(extracted_dir, "pagina-{:03d}.jpg".format(page_num + 1))
        if os.path.exists(output_path):
            print("  [skip] pagina {:03d} ja existe".format(page_num + 1))
            continue

        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        img = resize_for_web(img, MAX_WIDTH)
        img.save(output_path, "JPEG", quality=QUALITY, optimize=True)
        size_kb = os.path.getsize(output_path) // 1024
        print("  [ok] pagina {:03d} -> {}x{}px -> {}KB".format(
            page_num + 1, pix.width, pix.height, size_kb))

    doc.close()

    # ── Etapa 2: copia para pastas organizadas ──
    print("\n--- Etapa 2: Organizando por secao ---")
    copied = 0
    skipped = 0

    for page_index, (folder, filename) in PAGE_MAP.items():
        src = os.path.join(extracted_dir, "pagina-{:03d}.jpg".format(page_index + 1))
        dest_dir = os.path.join(images_base, folder)
        dest = os.path.join(dest_dir, filename)

        if not os.path.exists(src):
            print("  [aviso] pagina {} nao encontrada".format(page_index + 1))
            skipped += 1
            continue

        os.makedirs(dest_dir, exist_ok=True)
        shutil.copy2(src, dest)
        size_kb = os.path.getsize(dest) // 1024
        print("  [ok] pagina {:03d} -> {}/{} ({}KB)".format(
            page_index + 1, folder, filename, size_kb))
        copied += 1

    print("\n" + "=" * 50)
    print("EXTRACAO COMPLETA!")
    print("  - " + str(total) + " paginas extraidas em: public/images/magazine/_extraidas/")
    print("  - " + str(copied) + " imagens organizadas nas pastas certas")
    if skipped > 0:
        print("  - " + str(skipped) + " mapeamentos pulados")
    print("\nPROXIMO PASSO:")
    print("  Abra a pasta _extraidas, confira as paginas")
    print("  e avise se alguma imagem foi para o lugar errado.")
    print("=" * 50 + "\n")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python scripts/extrair-imagens.py caminho/para/revista.pdf")
        sys.exit(1)

    pdf_path = sys.argv[1]
    if not os.path.isfile(pdf_path):
        print("Arquivo nao encontrado: " + pdf_path)
        sys.exit(1)

    extract_and_organize(pdf_path)
