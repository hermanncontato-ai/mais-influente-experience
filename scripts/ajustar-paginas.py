"""
Ajuste rápido de mapeamento de páginas
=======================================
Depois de rodar extrair-imagens.py e ver as imagens geradas,
use este script para mover páginas específicas para o lugar certo.

Uso:
    python scripts/ajustar-paginas.py

Edite o dicionário AJUSTES abaixo e rode.
"""

import os
import shutil

# Pasta onde estão todas as páginas extraídas
BASE = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public", "images", "magazine"
)
EXTRAIDAS = os.path.join(BASE, "_extraidas")

# ── EDITE AQUI ────────────────────────────────────────────────
# Formato: numero_da_pagina: ("pasta_destino", "nome_arquivo.jpg")
# Exemplo: Se a capa real está na página 2, não na 1:
#   1: ("capa", "capa-maio-2026.jpg"),

AJUSTES = {
    # 2:  ("capa",           "capa-maio-2026.jpg"),
    # 8:  ("karla-felmanas", "karla-principal.jpg"),
    # 28: ("moda",           "dior-1.jpg"),
}
# ─────────────────────────────────────────────────────────────

def aplicar_ajustes():
    if not AJUSTES:
        print("⚠  Nenhum ajuste definido. Edite o dicionário AJUSTES neste script.")
        return

    for page_num, (folder, filename) in AJUSTES.items():
        src = os.path.join(EXTRAIDAS, f"pagina-{page_num:03d}.jpg")
        dest = os.path.join(BASE, folder, filename)

        if not os.path.exists(src):
            print(f"❌  Página {page_num} não encontrada em _extraidas/")
            continue

        os.makedirs(os.path.dirname(dest), exist_ok=True)
        shutil.copy2(src, dest)
        print(f"✓  página {page_num:03d} → {folder}/{filename}")

    print("\n✅ Ajustes aplicados. Veja o resultado em http://localhost:3000")


if __name__ == "__main__":
    aplicar_ajustes()
