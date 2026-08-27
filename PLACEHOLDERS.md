# PLACEHOLDERS PENDIENTES DE RELLENAR

> **Documento de control:** cada placeholder de la web que aún falta por rellenar con contenido real.
> Plantilla de consulta: Sara Bermejo · Psicóloga · Mérida (Extremadura) · Terapia online en toda España.
>
> **Cómo usar:** busca el identificador (ej. `LIC_..._PLACEHOLDER`) en el archivo indicado y sustitúyelo por el contenido real. Los placeholders técnicos se marcan con su valor de ejemplo claramente.

---

## 🔴 1. DATOS DE CONTACTO (repetidos en TODAS las páginas)

Estos valores aparecen en el `<footer>` de todas las páginas. **No olvidar cambiarlos en cada archivo HTML.**

| # | Identificador / valor actual | Archivos afectados | Qué falta por poner |
|---|------------------------------|--------------------|---------------------|
| 1 | `hola@sarabermejo.com` | Todos los `.html` | **Email real** de Sara |
| 2 | `+34 600 000 000` (y `tel:`) | Todos los `.html` | **Teléfono real** |
| 3 | `https://wa.me/34600000000` | `index.html` | **Número de WhatsApp real** |
| 4 | `href="#"` en "Instagram" | Todos los `.html` | **URL real del perfil de Instagram** |
| 5 | `href="#"` en "LinkedIn" | Todos los `.html` | **URL real del perfil de LinkedIn** |

**Resumen:** son 5 datos que deben actualizarse en las 7 páginas:
- `index.html`
- `sobre-mi.html`
- `servicios.html`
- `aviso-legal.html`
- `blog/index.html`
- `blog/ansiedad.html`
- `blog/autoestima.html`
- `blog/tcc-adolescentes.html`

---

## 🔴 2. DOMINIO FINAL (repetido en TODAS las páginas y archivos técnicos)

Todavía **no hay dominio adquirido** (se usa el placeholder `sarabermejopsicologa.com`).

| # | Valor actual | Archivos | Qué reemplazar |
|---|--------------|----------|----------------|
| 6 | `https://www.sarabermejopsicologa.com/` | `index.html` (canonical, OG, JSON-LD), `sitemap.xml` | **Dominio final** una vez comprado |
| 7 | `sarabermejopsicologa.com` | `robots.txt` (línea Sitemap) | **Dominio final** |

> ⚠️ **Importante:** al comprar el dominio, sustituir en todas las URLs canónicas y de Open Graph/Twitter/JSON-LD. Usar la herramienta "buscar y reemplazar global".

---

## 🟠 3. CONTENIDO EDITORIAL (texto real a escribir)

### Página `sobre-mi.html`

| # | Identificador | Sección | Qué falta escribir |
|---|---------------|---------|--------------------|
| 8 | `LIC_BIO_PLACEHOLDER` | "Mi enfoque terapéutico" | **Biografía personal y profesional** de Sara (trayectoria, por qué eligió la psicología, experiencia con adultos y adolescentes). En 1ª persona, tono real y humano. |
| 9 | `LIC_FORMACION_PLACEHOLDER` | "Mi enfoque terapéutico" | **Formación, universidad, especializaciones y experiencia profesional.** (Mejora SEO/E-E-A-T si son verificables.) |
| 10 | `LIC_VALORES_PLACEHOLDER` | "El trato, desde el primer día" | Qué puede esperar la persona: escucha activa, sin juicios, ritmo adaptado, confidencialidad, acompañamiento honesto. |
| 11 | `LIC_CITA_PLACEHOLDER` | Cita destacada (blockquote) | **Una frase destacable de Sara** sobre su vocación o su forma de entender la terapia. Debe sonar auténtica. |

### Página `servicios.html`

| # | Identificador | Sección | Qué falta escribir |
|---|---------------|---------|--------------------|
| 12 | `LIC_SERVICIO_ADOLESCENTE_PLACEHOLDER` | "Terapia para adolescentes" | Detalle de cómo trabaja con adolescentes, implicación familiar, ambiente seguro. |
| 13 | `LIC_CONTINUADA_PLACEHOLDER` | "Psicoterapia continuada" | Frecuencia habitual de sesiones, duración del proceso, cómo se ajusta el plan. |

### Artículos de blog (`/blog/`)

| # | Archivo | Identificador | Qué falta escribir |
|---|---------|---------------|--------------------|
| 14 | `blog/ansiedad.html` | `LIC_FECHA_PLACEHOLDER` | Fecha real de publicación. |
| 15 | `blog/ansiedad.html` | `LIC_ARTICULO_1_INTRO_PLACEHOLDER` | Desarrollo del intro del artículo (párrafo inicial completo). |
| 16 | `blog/ansiedad.html` | `LIC_ARTICULO_1_SINT_1_PLACEHOLDER` | Ampliar los síntomas de ansiedad en el día a día del adulto. |
| 17 | `blog/ansiedad.html` | `LIC_ARTICULO_1_CAUSA_PLACEHOLDER` | Causas de la ansiedad y cómo la TCC aborda origen/mantenedores. |
| 18 | `blog/ansiedad.html` | `LIC_ARTICULO_1_CIERRE_PLACEHOLDER` | Cierre: qué se aprende en terapia para recuperar el control. |
| 19 | `blog/autoestima.html` | `LIC_FECHA_PLACEHOLDER` | Fecha real de publicación. |
| 20 | `blog/autoestima.html` | `LIC_ARTICULO_2_INTRO_PLACEHOLDER` | Desarrollo del intro del artículo. |
| 21 | `blog/autoestima.html` | `LIC_ARTICULO_2_SEÑALES_PLACEHOLDER` | Ampliar cómo se manifiesta la baja autoestima. |
| 22 | `blog/autoestima.html` | `LIC_ARTICULO_2_CLAVES_PLACEHOLDER` | Ampliar claves + ejemplos de ejercicios TCC. |
| 23 | `blog/autoestima.html` | `LIC_ARTICULO_2_CIERRE_PLACEHOLDER` | Cierre. |
| 24 | `blog/tcc-adolescentes.html` | `LIC_FECHA_PLACEHOLDER` | Fecha real de publicación. |
| 25 | `blog/tcc-adolescentes.html` | `LIC_ARTICULO_3_INTRO_PLACEHOLDER` | Desarrollo del intro del artículo. |
| 26 | `blog/tcc-adolescentes.html` | `LIC_ARTICULO_3_ABORDA_PLACEHOLDER` | Ampliar cómo se manifiestan las dificultades en la adolescencia. |
| 27 | `blog/tcc-adolescentes.html` | `LIC_ARTICULO_3_SESION_PLACEHOLDER` | Cómo es una sesión con un adolescente. |
| 28 | `blog/tcc-adolescentes.html` | `LIC_ARTICULO_3_FAMILIA_PLACEHOLDER` | Papel de la familia en el proceso. |
| 29 | `blog/tcc-adolescentes.html` | `LIC_ARTICULO_3_CIERRE_PLACEHOLDER` | Cierre. |

### Página `aviso-legal.html` (textos legales) ⚠️

| # | Identificador | Sección | Qué falta escribir |
|---|---------------|---------|--------------------|
| 30 | `LIC_LEGAL_RESPONSABLE_PLACEHOLDER` | 1. Responsable | Nombre real, CIF/NIF si aplica, datos de contacto. |
| 31 | `LIC_LEGAL_OBJETO_PLACEHOLDER` | 2. Objeto | Finalidad del sitio web. |
| 32 | `LIC_LEGAL_PRIVACIDAD_PLACEHOLDER` | 3. Privacidad | Texto RGPD/LOPDGDD completo (datos recogidos, finalidad, base legal, conservación, derechos ARCO). **Son datos de salud → medidas especiales. Conviene revisión legal.** |
| 33 | `LIC_LEGAL_COOKIES_PLACEHOLDER` | 4. Cookies | Qué cookies se usan y cómo gestionarlas. |
| 34 | `LIC_LEGAL_PROPIEDAD_PLACEHOLDER` | 5. Propiedad intelectual | Copyright de contenidos. |
| 35 | `LIC_LEGAL_ENLACES_PLACEHOLDER` | 6. Enlaces externos | Responsabilidad sobre enlaces de terceros. |
| 36 | `LIC_LEGAL_FECHA_PLACEHOLDER` | Pie | Fecha de última actualización. |

---

## 🟡 4. IMÁGENES

| # | Archivo | Imagen actual | Estado / pendiente |
|---|---------|---------------|--------------------|
| 37 | `images/FotoSara.jpg` | Foto de perfil | **Sustituir por una foto profesional** de alta calidad (retrato vertical). Es clave para conversión y E-E-A-T. Usada en hero, sobre mí y Open Graph. |
| 38 | `images/logo-negro-sara.png` | Logo | Verificar que cumple con el nuevo diseño (sin emojis). OK si es marca limpia. |
| 39 | `images/logo-blanco-sara.png` | Logo blanco | No se usa actualmente; **decidir si se necesita** sobre fondos oscuros/CTA. |

---

## 🟢 5. OTROS / ESTRATEGIA EXTERNA (fuera del código)

| # | Acción | Estado |
|---|--------|--------|
| 40 | **Perfil de Empresa en Google (Google Business Profile)** enfocado a "psicóloga Mérida" + online España | Configurar — fundamental para SEO local. |
| 41 | Actualizar el **perfil de Doctoralia** (la URL actual apunta a `/sevilla`; si Sara está en Mérida, revisar ubicación del perfil) | Verificar/actualizar. |
| 42 | **Compra y configuración del dominio** definitivo | Pendiente. |
| 43 | Elegir analítica ligera (Plausible/Fathom) y añadir el código | Pendiente. |

---

## 📋 CHECKLIST RÁPIDA

- [ ] Datos de contacto reales (email, teléfono, WhatsApp, Instagram, LinkedIn) — **8 páginas**
- [ ] Dominio final — **reemplazo global**
- [ ] Bio, formación, valores y cita en `sobre-mi.html`
- [ ] Contenido de los 3 artículos del blog
- [ ] Textos legales en `aviso-legal.html`
- [ ] Foto profesional (hero + sobre mí + OG)
- [ ] Google Business Profile
- [ ] Revisar perfil Doctoralia (Mérida)
- [ ] Revisar alt de imágenes y textos finales con revisión humana
