# Andrés Castro — sitio web

HTML/CSS/JS nativo. Sin frameworks, sin dependencias de build. Listo para GitHub Pages apuntando a `andrescastro.live`.

## Estructura

```
index.html
css/styles.css
js/script.js
assets/images/
  hero/hero-bg.jpg
  logos/logo-abasi.png, logo-sweetwater.png, logo-fishman.png
  proof-carousel/proof-01..10.png
  pilar-tour/pilar-01..05.png
  on-stage/stage-01..10.png
docs/preview-site/          ← PDFs de referencia de Andrés (no se publican)
```

## Cómo verlo local

```
python3 -m http.server 8000
```
y abrir `http://localhost:8000`.

## Pendiente — assets que faltan

Estos dos bloques quedaron con placeholder visible en gris/negro punteado porque no había foto asignada en la carpeta de assets:

1. **Pilar "FOR BRANDS"** (sección "Why brands work with Andrés", primera tarjeta) — necesita 1 foto de gear/marca. Reemplazar el `<div class="pilar__media">` correspondiente en `index.html` (buscar el comentario `Pilar 1: FOR BRANDS`) por una `<img>` igual al patrón de "Pilar 2".
2. **Active Projects** (5 tarjetas: Sight of Emptiness, Wings of Destiny, Güarianera, Savage Existence, Amarillo Cian y Magenta) — cada una necesita 1 foto/still. Reemplazar cada `<div class="project-card__media">` por una `<img>`.

Buscar la palabra `pendiente` en `index.html` para ubicar los 6 puntos exactos.

## Comportamientos ya implementados (JS puro, sin librería)

- Menú mobile full-screen (según `Menu-Behavior.pdf`): hamburguesa → X, overlay oscuro, HOME/BRANDS/TOURING/PROJECTS centrados.
- PROOF: carrusel infinito de 10 fotos, scroll derecha → izquierda, loop sin salto (CSS `@keyframes` + duplicado de track vía JS).
- ON STAGE WITH: lista de bandas con scroll vertical infinito y máscara de degradado arriba/abajo; foto con cross-fade automático entre 10 imágenes cada 2s.
- PILAR 2 (tour): cross-fade automático entre 5 fotos cada ~2.2s.

Nada de esto usa Motion, Animata, React Bits ni GSAP — es la fase 1 acordada (HTML/CSS/JS nativo). La migración a esas librerías, si se justifica, es una decisión aparte para cuando el sitio tenga tráfico/necesidad real de animaciones más complejas (testimoniales apilados, nav activo con scroll-spy, transiciones entre proyectos).

## Deploy a GitHub Pages + dominio propio

1. Crear repo en GitHub (ej. `andres-castro-site`), subir este contenido a la rama `main`.
2. Settings → Pages → Source: `main` / `/ (root)`.
3. Agregar archivo `CNAME` en la raíz con el contenido `andrescastro.live`.
4. En el proveedor DNS del dominio, apuntar:
   - Registro `A` de `andrescastro.live` → `185.199.108.153` (y los otros 3 IPs de GitHub Pages: `.109.153`, `.110.153`, `.111.153`)
   - Registro `CNAME` de `www` → `<usuario>.github.io`
5. En Settings → Pages, activar "Enforce HTTPS" una vez que el DNS propague (puede tardar hasta 24h).

## Fuente de verdad de diseño

- Figma: `Andres-Castro-New-Site` (node-id 0:1)
- `docs/preview-site/Desktop-1444.pdf` — spec completo desktop
- `docs/preview-site/iPhone-14-15-Pro-Max.pdf` — spec completo mobile
- `docs/preview-site/Menu-Behavior.pdf` — comportamiento del menú mobile
