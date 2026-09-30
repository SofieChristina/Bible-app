# OG-bild – Bibelns bildspråk

Mall för delningsbilder (1200 × 630 px) till sektionen Bibelns bildspråk på ordkallan.se.
Endast **ikon** och **ledfamiljens namn** varierar. Allt annat är låst.

- `mall.html?ikon=ljus&namn=Ljuset` – öppna i webbläsaren för förhandsvisning
- `node rendera.js vatten "Vattnet och källan" vattnet.png` – skapar PNG (kräver Playwright)
- Nya ikoner läggs till i `IKONER` i `mall.html` (linjeikon, viewBox 0 0 100 100)
- Långa namn krymps automatiskt (112 → minst 76 px), högst två rader
- Typsnitt: Playfair Display och Inter (SIL Open Font License), i `fonts/`
