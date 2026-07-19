export const projects = [
  {
    slug: "aura-health",
    title: "Aura Health",
    tagline: {
      es: "Sistema de gestión clínica: historia clínica electrónica + agenda médica",
      en: "Clinical management system: electronic health records + appointment scheduling",
    },
    status: { es: "Completado", en: "Completed" },
    role: { es: "Desarrollador Full-stack", en: "Full-stack Developer" },
    summary: {
      es: "Reemplaza la gestión manual y dispersa de pacientes, citas e historias clínicas en un consultorio por una plataforma centralizada, con roles ADMIN/DOCTOR, interfaz minimalista en blanco y negro, y recordatorios automáticos por correo para doctores y pacientes.",
      en: "Replaces the manual, scattered management of patients, appointments, and medical records in a clinic with a centralized platform, with ADMIN/DOCTOR roles, a minimalist black-and-white interface, and automatic email reminders for doctors and patients.",
    },

    heroScreenshot: { label: "aura-health.app/dashboard", src: '/images/aura-1.png' },

    showcase: [
      {
        title: {
          es: "Historias clínicas y tratamientos con control real",
          en: "Medical records and treatments with real control",
        },
        description: {
          es: "Gestión de pacientes, historias clínicas y tratamientos con versionado y flujo de aprobación. El doctor-scoping asegura que cada doctor solo vea y edite lo suyo: el filtro se fuerza en el servidor, no en el cliente.",
          en: "Management of patients, medical records, and treatments with versioning and an approval workflow. Doctor-scoping ensures each doctor only sees and edits their own data: the filter is enforced on the server, not the client.",
        },
        screenshot: { label: "aura-health.app/records", src: '/images/aura-2.png' },
        reverse: false,
      },
      {
        title: {
          es: "Un dashboard que cambia según quién lo mira",
          en: "A dashboard that changes depending on who's looking",
        },
        description: {
          es: "Analíticas diferenciadas por rol: el ADMIN ve el negocio completo, el DOCTOR solo su propia práctica. Incluye clasificación automática de riesgo de pacientes.",
          en: "Analytics differentiated by role: the ADMIN sees the whole business, the DOCTOR only their own practice. Includes automatic patient risk classification.",
        },
        screenshot: { label: "aura-health.app/dashboard", src: '/images/aura-3.png' },
        reverse: true,
      },
      {
        title: { es: "Nadie se pierde una cita", en: "No one misses an appointment" },
        description: {
          es: "Recordatorios automáticos por correo a pacientes, agenda diaria a doctores, notificaciones en tiempo real (SSE) y reportes clínicos en PDF listos para imprimir.",
          en: "Automatic email reminders to patients, daily agenda to doctors, real-time notifications (SSE), and print-ready clinical PDF reports.",
        },
        screenshot: { label: "aura-health.app/appointments", src: null },
        reverse: false,
      },
    ],

    extraFeatures: [
      { es: "Interfaz en blanco y negro, minimalista", en: "Minimalist black-and-white interface" },
      { es: "Onboarding guiado (product tour)", en: "Guided onboarding (product tour)" },
      { es: "Auditoría automática de acciones sensibles", en: "Automatic auditing of sensitive actions" },
      { es: "Autenticación JWT + control de acceso por rol", en: "JWT auth + role-based access control" },
    ],

    architectureHighlights: [
      {
        icon: "GitBranch",
        title: { es: "Monorepo de infraestructura", en: "Infrastructure monorepo" },
        description: {
          es: "3 repos Git independientes (infra, backend, frontend) orquestados con Docker Compose.",
          en: "3 independent Git repos (infra, backend, frontend) orchestrated with Docker Compose.",
        },
      },
      {
        icon: "Layers",
        title: { es: "Arquitectura limpia por capas", en: "Clean layered architecture" },
        description: {
          es: "domain → application → infrastructure → presentation, con auditoría automática vía un wrapper withAudit.",
          en: "domain → application → infrastructure → presentation, with automatic auditing via a withAudit wrapper.",
        },
      },
      {
        icon: "ShieldCheck",
        title: { es: "Doctor-scoping", en: "Doctor-scoping" },
        description: {
          es: "Cada doctor solo ve sus propios pacientes y citas; el filtro se fuerza en el servidor, nunca se confía en IDs del cliente.",
          en: "Each doctor only sees their own patients and appointments; the filter is enforced server-side, client-supplied IDs are never trusted.",
        },
      },
      {
        icon: "Route",
        title: { es: "Routing generado", en: "Generated routing" },
        description: {
          es: "sidebar.config.ts es la única fuente de verdad para nav + rutas, protegidas por rol con RoleGuard.",
          en: "sidebar.config.ts is the single source of truth for nav + routes, protected by role with RoleGuard.",
        },
      },
    ],

    stack: {
      backend: [
        "Node.js (ESM)",
        "Express 5",
        "Prisma 7 + PostgreSQL",
        "JWT + bcrypt",
        "Zod",
        "Winston",
        "node-cron",
        "PDFKit + Puppeteer",
        "Swagger/OpenAPI",
      ],
      frontend: [
        "React 19",
        "TypeScript",
        "Vite 7",
        "React Router 7",
        "Zustand",
        "React Hook Form + Zod",
        "Axios",
        "Driver.js",
      ],
      devops: ["Docker Compose", "Git (3 repos)", "Mailpit (email dev)"],
      quality: ["Jira (Scrum)", "SonarQube", "Jest + Supertest", "ESLint"],
    },

    metrics: [
      { label: { es: "Repos independientes", en: "Independent repos" }, value: "3" },
      { label: { es: "Módulos de dominio", en: "Domain modules" }, value: "14+" },
      { label: { es: "Roles con scoping estricto", en: "Roles with strict scoping" }, value: "2" },
      { label: { es: "Commits backend + frontend", en: "Backend + frontend commits" }, value: "150+" },
    ],

    links: {
      demo: "https://aura-health-frontend-one.vercel.app/",
      repos: {
        infra: "https://github.com/Josedan32/infra",
        backend: "https://github.com/Josedan32/aura-health-backend",
        frontend: "https://github.com/Josedan32/aura-health-frontend",
      },
    },

    demoAccess: {
      email: "admin@aura.com",
      password: "Admin123!",
      note: {
        es: "Cuenta de demostración con datos sintéticos (seed). No contiene información real de pacientes — uso exclusivo de entorno de desarrollo/demo.",
        en: "Demo account with synthetic (seed) data. Contains no real patient information — for development/demo environment use only.",
      },
    },
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
