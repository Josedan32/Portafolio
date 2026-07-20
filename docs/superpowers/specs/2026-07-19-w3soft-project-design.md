# Add W3SOFT as second project

## Goal

Add a real second entry to the projects showcase (`data/projects.jsx`), following the pattern established by Aura Health, for W3SOFT — an inventory/sales management system with an ML demand-prediction service and a companion Flutter app. Unlike Aura Health, W3SOFT has no live deployment; a self-hosted demo video takes the place of the "Ver demo en vivo" link.

## Data model generalizations

The current model has assumptions that only held for a single project:

- `links.repos` changes from a fixed-shape object (`{ infra, backend, frontend }`) to an array of `{ label, url }`. `DetailHero.jsx` maps over the array instead of destructuring three hardcoded keys. Aura Health's entry is converted to the new array shape so nothing breaks.
- `TechSheet.jsx` gains a 5th stack category, `ai` ("IA / Datos"), and each of the 5 categories only renders when non-empty (W3SOFT has no `quality` tools to list, unlike Aura Health).

## New: VideoShowcase component

Since W3SOFT has no live demo, a new section (`components/ProjectDetail/VideoShowcase.jsx`) takes that visual slot, placed right after `MetricsBanner` and before `FeatureShowcase` in `pages/ProjectDetail.jsx`.

- Reads `project.demoVideo = { src, poster } | null`.
- Renders a native `<video controls>` pointing at a self-hosted file under `public/videos/`.
- When `demoVideo` is `null` (the case for W3SOFT today — video not recorded yet), renders a "video próximamente" placeholder, visually consistent with `BrowserFrame`'s missing-screenshot placeholder.
- To finish later: drop the recorded file at `public/videos/w3soft-demo.mp4`, set `demoVideo` in the data file. No component changes needed.

## W3SOFT content

Populated from the user-provided README: inventory/sales management (products, categories, customers, suppliers, purchases, orders), backend proxies requests to a separate Flask `ai-service` (never exposed directly to the browser) which retrains a per-product linear regression on paid orders on every request (no persistence), no ORM (direct SQL + Joi validation), 4 Docker Compose services, Flutter mobile app for catalog + sales chart. Links to the 3 real GitHub repos (`W3SOFT`, `W3SOFTMOVIL`, `IA-w3soft`) confirmed to exist. `links.demo: null`, `demoAccess: null`, `demoVideo: null`. Screenshots start as placeholders (`BrowserFrame` already handles missing `src`).

## Out of scope

- Actually recording/uploading the demo video or taking screenshots — user will supply these later; the data/component wiring just needs to be ready for them.
- Any further project besides W3SOFT.
