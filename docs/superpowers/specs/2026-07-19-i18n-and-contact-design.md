# Spanish/English i18n + contact info

## Goal

Make the whole portfolio (home page sections + the Aura Health project detail page) bilingual (es/en) via a toggle in the nav, and surface the user's phone and email as visible contact info.

## Language infrastructure

- `src/i18n/translations.js` — `{ es: {...}, en: {...} }`, nested by section (nav, hero, heroAvatar, about, experienceSection, projectsSection, projectDetail, footer, contact, languageToggle). Holds only *fixed UI chrome* text.
- `src/i18n/LanguageContext.jsx` — `LanguageProvider` + `useLanguage()` hook returning `{ language, toggleLanguage, t }`. `t('a.b.c')` resolves a dot-path from `translations[language]`, falling back to the key itself if missing. Persists to `localStorage` (`portfolio-lang`), default `'es'`. No browser-locale auto-detection.
- `App.jsx` wraps everything in `<LanguageProvider>`.

## Data vs. chrome rule

- **Fixed UI chrome** (section headers, button labels, "Volver a proyectos", etc.) → `translations.js`, looked up via `t()`.
- **Structured content data** (`data/experiences.jsx`, `data/projects.jsx`) → each translatable field becomes `{ es: "...", en: "..." }` inline in the same file, right next to the field it replaces. Tech names, links, icons, image paths, numeric metric values, emails/passwords stay as plain strings (language-agnostic). Components pick `field[language]`.

### Fields becoming `{es, en}`

- `data/experiences.jsx`: `role`, `date`, `description`, `achievements` (array of `{es,en}` per achievement, or `{es: [...], en: [...]}` — implementer's choice, keep consistent).
- `data/projects.jsx`: `tagline`, `summary`, `status`, `role`, `showcase[].title`, `showcase[].description`, `extraFeatures[]`, `architectureHighlights[].title`, `architectureHighlights[].description`, `metrics[].label`, `demoAccess.note`.
- `data/links.jsx`: `label` per nav link.

## UI toggle

- `components/Nav/LanguageToggle.jsx` — small "ES | EN" pill, calls `toggleLanguage()`. Mounted in `Navbar.jsx` (desktop row) and `MobileMenu.jsx`.

## Contact info

- `components/ContactInfo.jsx` — reusable phone (`tel:+573245429648`, displayed `+57 324 542 9648`) + email (`mailto:josedanielhernandezcano31@gmail.com`) row with icons.
- Used in `Footer.jsx` (next to the existing GitHub/LinkedIn/Mail icons) and in `HeroIntro.jsx` as a small, muted, non-button line near the top of the page (under the intro paragraph, before the stats row) — visible immediately without competing for attention.

## Components touched

Every component currently rendering hardcoded Spanish text switches to `useLanguage()`: Navbar, MobileMenu, NavLinks (reads bilingual `links.jsx`), HeroIntro, HeroAvatar (floating labels), HeroStat call sites, About/Header, Philosophy, Vision, Experience (blurb), AdditionalSkills, TechStack (category titles), ExperienceHeader, ExperienceItem (reads bilingual `experiences.jsx`), ExperienceSummary, Projects/Header, ProjectCard, ProjectDetail/DetailHero, MetricsBanner, FeatureShowcase, DemoAccess, TechSheet, Footer.

## Out of scope

- `/services` (Ideas) route stays Spanish-only — unrelated pre-existing page, not part of the portfolio narrative built in prior work.
