# Portafolio — José Daniel Hernández Cano

Sitio personal de portafolio construido con React y Vite. Presenta mi perfil como desarrollador full-stack, mi experiencia, stack tecnológico y el detalle de los proyectos en los que he trabajado.

🔗 Repositorio: [github.com/Josedan32/joseDaniel](https://github.com/Josedan32/joseDaniel)

## Características

- **Multi-idioma (ES/EN)** mediante un `LanguageContext` propio, con toggle en la navegación.
- **Secciones del home**: Hero, Sobre mí, Experiencia, Stack tecnológico, Proyectos y Servicios.
- **Páginas de detalle de proyecto** (`/projects/:slug`) con showcase de features, métricas, ficha técnica y acceso a demo.
- **Animaciones** de scroll y transición entre rutas con Framer Motion.
- **Routing** con React Router (rutas: `/`, `/services`, `/projects/:slug`).

## Stack tecnológico

- [React 19](https://react.dev/) + [Vite](https://vite.dev/) (rolldown-vite)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [Recharts](https://recharts.org/) para gráficos
- [Lucide React](https://lucide.dev/) para iconografía
- [ESLint](https://eslint.org/) para linting

## Proyectos destacados

- **Aura Health** — Sistema de gestión clínica (historia clínica electrónica + agenda médica).
- **W3SOFT** — Sistema de gestión de inventario y ventas con predicción de demanda por IA.

## Desarrollo local

```bash
npm install     # instalar dependencias
npm run dev     # levantar servidor de desarrollo
npm run build   # build de producción
npm run preview # previsualizar el build
npm run lint    # correr ESLint
```

## Estructura del proyecto

```
src/
├── components/   # componentes por sección (Hero, About, Experience, Projects, Nav, etc.)
├── pages/        # páginas de rutas (Portafolio, Services, ProjectDetail)
├── data/         # contenido de proyectos, experiencia e ideas
├── i18n/         # contexto y traducciones ES/EN
├── hooks/        # hooks personalizados
└── utils/        # utilidades varias
```
