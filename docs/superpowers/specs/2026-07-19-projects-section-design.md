# Projects section + project detail page

## Goal

Replace the current placeholder/mock "Proyectos" content (fake priced-service entries in `data/projects.jsx`, and the unrelated mock `/projects` page in `components/Projects/ProjectsSection.jsx`) with a real, extensible showcase of the user's actual projects, starting with Aura Health.

## Routes

- `/` — homepage keeps its existing `#proyectos` anchor (already in nav `data/links.jsx`, currently empty/commented out in `Portafolio.jsx`). It now renders a preview grid of project cards.
- `/projects/:slug` — new route, full case-study page per project.
- Old `/projects` route (mock `ProjectsShowcase`) is removed from `App.jsx`.

## Data model (`data/projects.jsx`)

One object per project:

```js
{
  slug, title, tagline, status, role,
  problem, solution,
  architecture: [ ...bullet strings ],
  stack: { backend: [], frontend: [], devops: [], quality: [] },
  features: [ ...strings ],
  metrics: [ { label, value } ],
  links: { demo, repos: { infra, backend, frontend } },
  demoAccess: { email, password, note } | null,
  screenshots: [ { src, alt } ]  // empty array for now — placeholders render until real screenshots are added
}
```

Only `aura-health` is populated for now; the shape supports adding more real projects later without touching components.

## Components

**Home preview** (`components/Projects/`)
- `Header.jsx` — section header, same convention as About/Experience sections.
- `ProjectCard.jsx` — title, tagline, stack badges, "Ver proyecto →" link to `/projects/:slug`.
- `ProjectsSection.jsx` — maps `data/projects.jsx` into a card grid, mounted at `#proyectos` in `Portafolio.jsx`.

**Detail page** (`pages/ProjectDetail.jsx` + `components/ProjectDetail/`)
- `DetailHero.jsx` — back link, status/role badges, title, tagline, "Ver demo en vivo" + 3 repo buttons.
- `Overview.jsx` — problem / solution.
- `Architecture.jsx` — bullet list (repo split, backend layers, doctor-scoping, frontend feature-folder, generated routing, manual schema sync caveat).
- `StackGrid.jsx` — badges grouped by backend/frontend/devops/quality (covers Jira, SonarQube, Swagger, Jest+Supertest, ESLint under "quality").
- `Features.jsx` — feature grid.
- `Metrics.jsx` — stat row (repos, domain modules, roles, commits).
- `BrowserFrame.jsx` — reusable macOS-style chrome wrapper around a screenshot `<img>`; renders a "captura próximamente" placeholder when no `src`.
- `Screenshots.jsx` — gallery of `BrowserFrame`s from `project.screenshots`.
- `DemoAccess.jsx` — callout with demo login (email/password) and an explicit disclaimer that all data is synthetic seed data, not real patient information.

`pages/ProjectDetail.jsx` looks up the project by `useParams().slug`, renders `<Navbar/>` + the above sections in order + `<Footer/>`; unknown slug → simple "proyecto no encontrado" state with a link back to `/`.

## Content for Aura Health

Populated from the user-provided project context: clinical management system (EHR + scheduling), ADMIN/DOCTOR roles only (no patient logins), 3 independent git repos (infra/backend/frontend) orchestrated via Docker Compose, layered clean architecture backend (domain/application/infrastructure/presentation/shared), doctor-scoping security pattern, feature-folder frontend with generated routing (`sidebar.config.ts` → `router.tsx` + `RoleGuard`), Prisma+Postgres with manually-synced schema (no migrate), SSE notifications, cron email reminders/daily agenda, PDF reports (pdfkit/puppeteer), risk classification, guided onboarding (driver.js), Jira for agile management, SonarQube for static analysis, Swagger for API docs, Jest+Supertest for testing.

Demo: live frontend at the Vercel URL provided, credentials `admin@aura.com` / `Admin123!` (dev seed account, disclaimed as synthetic data). Screenshots start as placeholders inside `BrowserFrame` until the user supplies real captures.

## Out of scope (this iteration)

- Video embeds (explicitly deferred by user).
- Any other project besides Aura Health (data shape supports adding more later).
- Removing/touching the existing `/services` (Ideas) route.
