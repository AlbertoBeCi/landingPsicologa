```
 ____                    ____                            _
/ ___|  __ _ _ __ __ _  | __ )  ___ _ __ _ __ ___   ___  (_) ___
\___ \ / _` | '__/ _` | |  _ \ / _ \ '__| '_ ` _ \ / _ \ | |/ _ \
 ___) | (_| | | | (_| | | |_) |  __/ |  | | | | | |  __/_| | (_) |
|____/ \__,_|_|  \__,_| |____/ \___|_|  |_| |_| |_|\___(_)_|\___/

                Psicóloga Online · Sitio web completo
```

Sitio web estático para **Sara Bermejo Cidoncha**, psicóloga general sanitaria (Col. AN12618), especializada en terapia cognitivo-conductual online para adultos y adolescentes, con consulta online desde **Mérida (Extremadura)** y servicio a toda España.

## Stack

HTML5 · CSS3 · JavaScript vanilla — sin frameworks ni build step.

## Estructura

```
.
├── index.html              Landing (hero, valores, sobre mí, servicios, opiniones, FAQ, CTA)
├── sobre-mi.html           Biografía ampliada (E-E-A-T)
├── servicios.html          Detalle de servicios, precios y proceso
├── aviso-legal.html        Aviso legal y política de privacidad (RGPD)
├── blog/
│   ├── index.html          Índice de artículos / recursos
│   ├── ansiedad.html       Artículo SEO: ansiedad
│   ├── autoestima.html     Artículo SEO: autoestima
│   └── tcc-adolescentes.html Artículo SEO: TCC en adolescentes
├── css/
│   ├── styles.css          Fuente editable (CSS legible y comentado)
│   └── styles.min.css      Versión minificada usada en producción
├── js/
│   └── main.js             Menú móvil
├── images/                 Foto y logos (negro/blanco)
├── PLACEHOLDERS.md         Documento de control de placeholders pendientes
├── robots.txt
├── sitemap.xml
└── scripts/
    ├── minify-css.js       Minificador CSS (sin dependencias, genera styles.min.css)
    ├── screenshot.js       Capturas desktop/mobile (Playwright)
    └── screenshot-menu.js  Captura del menú móvil abierto
```

## CSS en producción

Las páginas enlazan a **`css/styles.min.css`** (13 KB, minificado) para optimizar el peso y el rendimiento (Core Web Vitals).

- **`css/styles.css`** es la fuente legible y comentada para editar.
- Tras modificar `styles.css`, regenerar la versión minificada con:

```bash
node scripts/minify-css.js
```

Esto sobrescribe `styles.min.css`, que es el archivo que realmente sirven las páginas.

## Paleta de marca

| Uso            | Color     |
|-----------------|-----------|
| Fondo           | `#F5EFE6` |
| Texto principal | `#3D2B1F` |
| Secundario      | `#9CAF88` |
| CTA             | `#5C3A5E` |
| Texto sobre CTA | `#FFFFFF` |

Tipografías: **Lora** (títulos) y **Karla** (cuerpo), vía Google Fonts.

Diseño **editorial**: sin degradados, sin emojis (iconos SVG de trazo fino), esquinas ligeramente rectas, jerarquías editoriales limpias.

## SEO / GEO

- Schema.org `Psychologist` enriquecido (dirección Mérida, `hasOfferCatalog`, `review`/`aggregateRating`, `sameAs`) en `index.html`.
- Schema `FAQPage` en `index.html` (rich snippets + citable por LLMs/GEO).
- Schema `BlogPosting` en cada artículo del blog.
- Open Graph + Twitter Cards + canonical en todas las páginas.
- `sitemap.xml` y `robots.txt` configurados.
- Fuentes + CSS enlazados correctamente; CSS minificado para rendimiento.

## Desarrollo local

No requiere build. Basta con servir la carpeta con cualquier servidor estático:

```bash
python -m http.server 8080
# o usa la extensión Live Preview de VS Code
```

> **Nota:** para que los cambios de CSS se vean en producción tras editar, ejecutar primero `node scripts/minify-css.js` o, si prefieres, apuntar temporalmente el `<link>` a `css/styles.css`.

## Verificación visual (opcional)

El proyecto incluye scripts de captura de pantalla con Playwright para revisar cambios sin abrir un navegador:

```bash
npm install
npx playwright install chromium
node scripts/screenshot.js         # desktop + mobile
node scripts/screenshot-menu.js    # menú móvil abierto
```

Las capturas se guardan en `screenshots/` (no versionado).

## Despliegue

Sitio 100% estático — desplegable en Cloudflare Pages, Netlify, GitHub Pages o cualquier hosting compartido tradicional (Hostinger, IONOS...). No requiere backend ni variables de entorno.

## Pendiente (ver PLACEHOLDERS.md)

Todos los datos reales pendientes de rellenar (contacto, dominio, textos editoriales, imágenes, legal) están documentados y numerados en **`PLACEHOLDERS.md`**.

- [ ] Dominio definitivo (reemplazo global de `sarabermejopsicologa.com`)
- [ ] Email, teléfono, WhatsApp, Instagram y LinkedIn reales
- [ ] Bio, formación y textos editoriales de `sobre-mi.html`
- [ ] Contenido completo de los 3 artículos del blog
- [ ] Textos legales de `aviso-legal.html`
- [ ] Foto profesional
- [ ] Google Business Profile + revisión perfil Doctoralia
