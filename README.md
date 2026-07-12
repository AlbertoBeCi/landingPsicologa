```
 ____                    ____                            _
/ ___|  __ _ _ __ __ _  | __ )  ___ _ __ _ __ ___   ___  (_) ___
\___ \ / _` | '__/ _` | |  _ \ / _ \ '__| '_ ` _ \ / _ \ | |/ _ \
 ___) | (_| | | | (_| | | |_) |  __/ |  | | | | | |  __/_| | (_) |
|____/ \__,_|_|  \__,_| |____/ \___|_|  |_| |_| |_|\___(_)_|\___/

                Psicóloga Online · Landing Page
```

Landing page de una sola página para **Sara Bermejo Cidoncha**, psicóloga general sanitaria (Col. AN12618), especializada en terapia cognitivo-conductual online para adultos y adolescentes.

## Stack

HTML5 · CSS3 · JavaScript vanilla — sin frameworks ni build step.

## Estructura

```
.
├── index.html              Página principal
├── css/
│   └── styles.css          Estilos (variables de marca, layout, responsive)
├── js/
│   └── main.js              Menú móvil
├── images/                  Foto y logos (negro/blanco)
├── robots.txt
├── sitemap.xml
└── scripts/                  Utilidades de verificación visual (Playwright)
```

## Paleta de marca

| Uso            | Color     |
|-----------------|-----------|
| Fondo           | `#F5EFE6` |
| Texto principal | `#3D2B1F` |
| Secundario      | `#9CAF88` |
| CTA             | `#5C3A5E` |
| Texto sobre CTA | `#FFFFFF` |

Tipografías: **Lora** (títulos) y **Karla** (cuerpo), vía Google Fonts.

## Desarrollo local

No requiere build. Basta con servir la carpeta con cualquier servidor estático:

```bash
python -m http.server 8080
# o usa la extensión Live Preview de VS Code
```

## Verificación visual (opcional)

El proyecto incluye scripts de captura de pantalla con Playwright para revisar cambios sin abrir un navegador:

```bash
npm install
npx playwright install chromium
node scripts/screenshot.js        # desktop + mobile
node scripts/screenshot-menu.js   # menú móvil abierto
```

Las capturas se guardan en `screenshots/` (no versionado).

## Despliegue

Sitio 100% estático — desplegable en Cloudflare Pages, Netlify, GitHub Pages o cualquier hosting compartido tradicional (Hostinger, IONOS...). No requiere backend ni variables de entorno.

## Pendiente

- [ ] Dominio definitivo (sustituir placeholder `sarabermejopsicologa.com` en meta tags, `sitemap.xml` y `robots.txt`)
- [ ] Email y teléfono reales en el footer
- [ ] Número de WhatsApp real en el botón flotante
- [ ] Enlaces reales a Instagram/LinkedIn
