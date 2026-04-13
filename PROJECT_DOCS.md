# Documentación Técnica — TechFit X1

## Estructura del proyecto

```
src/app/
├── components/
│   ├── hero/
│   │   ├── hero.component.ts       # Lógica: hora actual, scroll a pricing
│   │   ├── hero.component.html     # Titular, highlights, CTA, reloj animado
│   │   └── hero.component.scss     # Gradientes, animación flotante, responsive
│   ├── features/
│   │   ├── features.component.ts   # Array de 6 features con íconos
│   │   ├── features.component.html # Grid de tarjetas con @for
│   │   └── features.component.scss # Hover effects, responsive
│   ├── testimonials/
│   │   ├── testimonials.component.ts    # Array de 4 testimonios con rating
│   │   ├── testimonials.component.html  # Tarjetas con estrellas y avatar
│   │   └── testimonials.component.scss  # Fondo oscuro con glassmorphism
│   ├── pricing/
│   │   ├── pricing.component.ts    # Precios, ahorro, navegación a checkout
│   │   ├── pricing.component.html  # Precio tachado, lista de incluidos, CTA
│   │   └── pricing.component.scss  # Card destacada con badge animado
│   └── footer/
│       ├── footer.component.ts     # Año dinámico
│       ├── footer.component.html   # 4 columnas: brand, links, legal, contact
│       └── footer.component.scss   # Grid responsive, social links
├── pages/
│   ├── landing-page/
│   │   ├── landing-page.component.ts   # Contenedor (importa todos los componentes)
│   │   ├── landing-page.component.html # Secuencia: hero → features → testimonials → pricing → footer
│   │   └── landing-page.component.scss
│   └── checkout/
│       ├── checkout.component.ts   # Formulario, validación, simulación de pago
│       ├── checkout.component.html # 3 secciones: datos, envío, pago + resumen lateral
│       └── checkout.component.scss # Formulario sticky summary, inputs estilizados
├── styles/
│   └── _variables.scss             # Colores, breakpoints, transiciones, radios
├── app.routes.ts                   # Rutas: / → landing, /checkout → checkout
├── app.config.ts                   # provideRouter + provideZoneChangeDetection
├── app.component.ts                # RouterOutlet
├── main.ts                         # bootstrapApplication
└── styles.scss                     # Reset global, font-family
```

## Decisiones técnicas

| Decisión | Razón |
|----------|-------|
| **Angular 19 standalone components** | Sin NgModules: menos boilerplate, más legibilidad |
| **Template-driven forms** | Formularios simples con `[(ngModel)]`; ideal para demos |
| **SCSS con variables compartidas** | Un `_variables.scss` centraliza colores y breakpoints |
| **Sin framework CSS** | Control total del diseño con CSS Grid y custom properties |
| **CSS animations** | Sin librerías externas; animaciones ligeras con `@keyframes` |
| **Routing manual** | Sin schematics; rutas definidas en `app.routes.ts` |
| **Checkout como página** | Ruta separada (`/checkout`) en vez de modal para mejor UX móvil |
| **Pago simulado** | Demo técnica sin backend; validación de campos en TypeScript |
| **Sin SSR / prerenderizado** | SPA pura; para SEO real se activaría SSR con `ng add @angular/ssr` |

## Copywriting utilizado

| Sección | Texto | Objetivo |
|---------|-------|----------|
| **Hero badge** | "🔥 Oferta de Lanzamiento" | Urgencia inmediata |
| **Hero subtitle** | "El smartwatch deportivo que lleva tu rendimiento al siguiente nivel" | Beneficio aspiracional |
| **Hero CTA** | "¡Comprar Ahora!" | Acción directa |
| **Features title** | "Todo lo que necesitas para superar tus límites" | Motivación deportiva |
| **Testimonials** | 4 reseñas con roles reales (corredor, entrenadora, triatleta, coach) | Prueba social contextualizada |
| **Pricing badge** | "¡Ahorra $60!" | Anclaje de precio ($149 → $89) |
| **Pricing button** | "🛒 ¡Comprar Ahora por $89!" | Recordar precio + emoji acción |
| **Guarantee** | "Si no estás satisfecho, te devolvemos tu dinero sin hacer preguntas" | Eliminar riesgo |
| **Trust badges** | Pago Seguro · Envío Gratis · Devolución Fácil | Reducir fricción |

## Validación del checkout

El formulario valida que los 9 campos no estén vacíos:

| Campo | Validación |
|-------|------------|
| Nombre completo | No vacío |
| Email | No vacío |
| Dirección | No vacío |
| Ciudad | No vacío |
| Código Postal | No vacío |
| Número de tarjeta | No vacío (formato: `1234 5678 9012 3456`) |
| Titular de tarjeta | No vacío |
| Fecha de expiración | No vacío (formato: `MM/AA`) |
| CVV | No vacío |

Si falta alguno, muestra alerta con la lista exacta de campos pendientes.

## Build output

```
Initial chunk files   | Names    | Raw size
main-*.js             | main     | 263 KB
polyfills-*.js        | polyfills| 35 KB
styles-*.css          | styles   | 430 B
                      | Initial total | 298 KB
```

## Responsive breakpoints

| Breakpoint | Ancho | Layout |
|------------|-------|--------|
| Desktop | > 992px | Grid completo (3 cols features, 2 cols testimonials) |
| Tablet | 768–992px | Grid reducido (2 cols features, 1 col checkout) |
| Móvil | < 576px | Single column, títulos reducidos, stacked forms |

## Pruebas realizadas

- ✅ Build sin errores (`ng build` exitoso)
- ✅ SCSS compilación sin warnings (migración `darken()` → `color.adjust()`)
- ✅ Routing funcional: `/` → landing, `/checkout` → checkout, `**` → redirect a `/`
- ✅ Navegación desde hero y pricing al checkout
- ✅ Botón "Volver al producto" funcional
- ✅ Simulación de pago con validación de campos
- ✅ Scroll al top tras redirección exitosa

## Para activar SSR / prerenderizado (SEO real)

```bash
ng add @angular/ssr
```

Esto habilita:
- Server-side rendering para contenido visible por crawlers
- Prerenderizado de rutas estáticas (`/`, `/checkout`)
- Mejor puntuación de Lighthouse SEO

## Comandos útiles

```bash
ng serve              # Dev server con hot reload
ng build              # Build de producción
ng build --watch      # Build incremental para desarrollo
ng generate component components/nombre  # Nuevo componente
```
