# Compass v4 — Dashboard de Analítica Médica

> Prototipo de dashboard hospitalario de alta fidelidad. Versión 4 — rediseño completo enfocado en reducir la saturación visual y mejorar la jerarquía de información respecto a Compass v3.

## 🔗 Demo en vivo

**[https://vpacheco-avd.github.io/proto_compass_v4_1/](https://vpacheco-avd.github.io/proto_compass_v4_1/)**

---

## ¿Qué es Compass?

Compass es un dashboard de analítica médica diseñado para el monitoreo operativo y clínico de hospitales. Permite al personal de salud visualizar, filtrar y analizar indicadores clave de rendimiento (KPIs), carga de pacientes, siniestralidad clínica y detalle de pacientes bajo seguimiento — todo desde una interfaz limpia y eficiente.

---

## Mejoras clave respecto a Compass v3

| Aspecto | v3 | v4 |
|---|---|---|
| KPIs visibles | 8 tarjetas grandes siempre presentes | 4 principales + 8 secundarios en modal |
| Gráficos | 4 donuts fragmentados + 1 scatter | Barras + Burbujas + Donut + Líneas |
| Navegación | Scroll vertical largo | Tabs + acordeones, sin scroll excesivo |
| Tablas | 10-12 columnas visibles de golpe | Columnas clave + detalle bajo demanda |
| Filtros | Sidebar estático y denso | Sidebar colapsable y agrupado |
| Diseño | Banners azules con degradado | Tipografía limpia, semáforos, sombras suaves |

---

## Características

- **4 KPIs principales** con indicadores de tendencia semafóricos (rojo / amarillo / verde)
- **Modal de KPIs secundarios** con 8 indicadores adicionales (estancia, UCI, reingresos, etc.)
- **3 pestañas principales:**
  - Análisis de Siniestralidad (gráficos + tabla de pacientes)
  - Detalle Clínico (historial completo por paciente)
  - Tablas Analíticas (análisis predictivo, complejidad, factores de riesgo, complicaciones)
- **4 gráficos con Chart.js:** barras comparativas, burbujas de correlación, donut de siniestralidad y líneas de tendencia
- **Tabla de pacientes** con búsqueda en tiempo real, badges de riesgo y modal de detalle clínico
- **Sidebar colapsable** con filtros agrupados (Región, Centro Asistencial, Año, Especialidad)
- **Panel de notificaciones** en offcanvas
- **Responsive** — adaptado para desktop, tablet y móvil

---

## Tecnologías

- [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript ES6](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [Bootstrap Icons 1.11](https://icons.getbootstrap.com/)
- [Chart.js 4.4](https://www.chartjs.org/)
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)

---

## Estructura del proyecto

```
proto_compass_v4_1/
├── index.html       # Estructura HTML del dashboard
├── styles.css       # Estilos personalizados (diseño, layout, componentes)
├── dashboard.js     # Lógica de gráficos, tablas y componentes interactivos
└── README.md
```

---

## Cómo ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/vpacheco-avd/proto_compass_v4_1.git
   ```
2. Abre `index.html` directamente en tu navegador.

No requiere instalación de dependencias ni servidor local — todas las librerías se cargan desde CDN.

---

## Capturas de pantalla

> Dashboard principal con KPIs, gráficos y tabla de pacientes.

*Vista del Analysis de Siniestralidad, Detalle Clínico y Tablas Analíticas disponibles como pestañas.*

---

## Autor

**vpacheco-avd**  
Prototipo desarrollado con asistencia de GitHub Copilot (Claude Sonnet 4.6) — Abril 2026.
