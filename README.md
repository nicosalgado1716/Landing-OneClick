# OneClick — Landing Page

Landing page de conversión para **OneClick**, agencia de creación de contenido, crecimiento en redes sociales, posicionamiento de marca personal y generación de autoridad digital.

**Objetivo único:** convertir visitantes en prospectos cualificados que **agenden una llamada**.

---

## 🚀 Cómo verla

No requiere build ni dependencias. Abre `index.html` en el navegador, o sirve la carpeta:

```bash
# opción rápida
python3 -m http.server 8080
# luego visita http://localhost:8080
```

**Archivos:**
- `index.html` — estructura y copy completo
- `styles.css` — diseño premium dark + responsive
- `script.js` — navbar, menú móvil, FAQ, contadores y animaciones

---

## 1. Wireframe textual

```
┌──────────────────────────────────────────────┐
│ NAVBAR  [logo OneClick]  links  [CTA llamada]  │  ← fijo, blur
├──────────────────────────────────────────────┤
│ 1. HERO                                        │
│    badge de confianza                          │
│    H1 orientado a resultado                    │
│    subheadline                                 │
│    [Agenda tu llamada gratuita] [Ver casos]    │
│    ▶ video / VSL placeholder                   │
│    barra de confianza                          │
├──────────────────────────────────────────────┤
│ STRIP logos (tipos de cliente)                 │
├──────────────────────────────────────────────┤
│ 2. VSL · título + texto + ▶ video grande + CTA │
├──────────────────────────────────────────────┤
│ 3. PROBLEMA · 6 tarjetas de dolor + cierre     │
├──────────────────────────────────────────────┤
│ 4. SOLUCIÓN · copy + checklist | tarjeta flujo │
├──────────────────────────────────────────────┤
│ 5. BENEFICIOS · 6 tarjetas                     │
├──────────────────────────────────────────────┤
│ 6. SERVICIOS · 8 tarjetas                      │
├──────────────────────────────────────────────┤
│ 7. TESTIMONIOS · 6 tarjetas                    │
├──────────────────────────────────────────────┤
│ 8. RESULTADOS · 4 stats animadas + 3 casos     │
├──────────────────────────────────────────────┤
│ 9. PROCESO · 5 pasos                           │
├──────────────────────────────────────────────┤
│ 10. AGENDA · copy + urgencia | widget Calendly │
├──────────────────────────────────────────────┤
│ 11. FAQ · acordeón (6 preguntas)               │
├──────────────────────────────────────────────┤
│ 12. CTA FINAL · headline + botón               │
├──────────────────────────────────────────────┤
│ FOOTER                                         │
└──────────────────────────────────────────────┘
[ Sticky CTA flotante solo en móvil ]
```

**Orden estratégico (inspirado en la referencia, adaptado a OneClick):**
Captar atención (hero+VSL) → agitar el problema → presentar la solución → demostrar valor (beneficios/servicios) → generar confianza (testimonios/resultados) → reducir fricción (proceso/FAQ) → convertir (agenda + CTA final). Los CTAs hacia la llamada se repiten en hero, VSL, solución, agenda y cierre.

---

## 2. Copy por sección
Todo el copy está implementado en `index.html`. Resumen de los mensajes clave:

- **Hero H1:** "Convierte tu contenido en autoridad, seguidores y clientes."
- **Subheadline:** OneClick diseña tu estrategia, produce/edita tus videos y construye un sistema para convertir audiencia en oportunidades.
- **Mensaje de confianza:** "Ayudamos a marcas a convertir contenido en crecimiento real."
- **Problema:** publicar sin estrategia, sin crecimiento, sin tiempo, sin autoridad, sin conversión.
- **Solución:** estrategia, producción/edición, guiones, calendario, perfil, crecimiento orgánico, sistema de conversión.
- **CTA final:** "Tu próxima etapa de crecimiento empieza con un click."

## 3. Sugerencias de diseño visual
- **Paleta:** negro/gris oscuro (`#0a0b0f`, `#161a24`) + **azul eléctrico** (`#2f6bff`) y **verde neón** (`#2bff88`) como acentos.
- **Tipografía:** `Sora` (titulares) + `Inter` (texto). Sans-serif moderna.
- Secciones amplias con buen espaciado, tarjetas con hover, glow radiales, gradientes en botones y stats.
- Botones tipo "pill" con sombra de color y micro-animación de hover.

## 4. CTAs recomendados
- Principal: **"Agenda tu llamada gratuita"** (hero, navbar, CTA final).
- Secundario: **"Ver casos de éxito"**.
- Refuerzos: "Quiero este sistema para mi marca", "Reservar mi llamada".

## 5. Testimonios
6 testimonios ficticios realistas con nombre, tipo de negocio y resultado (Laura Méndez, Daniel Ríos, Carla Vega, Javier Morales, Paula Soto, Andrés Torres). Editables en la sección `#testimonios`.

## 6. Sección de agenda
- Título persuasivo + lista de lo que se revisa en la llamada.
- Widget **placeholder de Calendly** (`#calendly`).
- CTA "Reservar mi llamada" + urgencia suave: *"Plazas limitadas para nuevos clientes este mes"*.

## 7. Versión móvil
Diseño totalmente responsive (breakpoints 980px / 680px / 400px): menú hamburguesa, grids a una columna, **CTA sticky flotante** y botones a ancho completo.

---

## 🔌 Integraciones pendientes (placeholders)

### Video / VSL
Sustituye los `.video-frame` por un embed real:
```html
<iframe src="https://www.youtube.com/embed/TU_VIDEO_ID"
        title="VSL OneClick" allowfullscreen
        style="width:100%;aspect-ratio:16/9;border:0;border-radius:22px"></iframe>
```

### Calendly
Reemplaza el bloque `#calendly` por el widget inline oficial:
```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<div class="calendly-inline-widget" data-url="https://calendly.com/TU-USUARIO/llamada-estrategica"
     style="min-width:320px;height:680px;"></div>
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

---

## 8. Recomendaciones para mejorar la conversión
1. **Graba un VSL real** (60–180 s): problema → solución → prueba → CTA. Es el activo de mayor impacto.
2. **Conecta Calendly de inmediato**: cada click extra reduce conversión. Idealmente, embebido (no popup).
3. **Sustituye métricas y testimonios por datos reales** en cuanto los tengas (con captura/nombre/foto sube la credibilidad).
4. **A/B testea el H1** (resultado vs. dolor) y el texto del botón principal.
5. **Píxeles y analítica:** instala Meta Pixel + GA4 y marca el evento "agenda" como conversión.
6. **Velocidad:** comprime imágenes, usa `loading="lazy"` y sirve por CDN/HTTPS.
7. **Prueba social arriba:** considera subir 1–2 testimonios o un logo destacado más cerca del hero.
8. **Urgencia real:** si las plazas son limitadas de verdad, dilo con número concreto ("3 plazas este mes").
9. **Reduce campos:** que la única acción sea agendar; evita formularios largos antes de la llamada.
10. **Seguimiento:** email/WhatsApp automático de confirmación + recordatorio para bajar el no-show.
```
