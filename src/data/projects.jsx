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
    year: "2026",
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
        screenshot: { label: "aura-health.app/appointments", src: '/images/aura-4.png' },
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
      repos: [
        { label: "infra", url: "https://github.com/Josedan32/infra" },
        { label: "backend", url: "https://github.com/Josedan32/aura-health-backend" },
        { label: "frontend", url: "https://github.com/Josedan32/aura-health-frontend" },
      ],
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
  {
    slug: "w3soft",
    title: "W3SOFT",
    tagline: {
      es: "Sistema de gestión de inventario y ventas con predicción de demanda por IA",
      en: "Inventory and sales management system with AI-powered demand prediction",
    },
    status: { es: "Completado", en: "Completed" },
    role: { es: "Desarrollador Full-stack + IA", en: "Full-stack + AI Developer" },
    year: "2023",
    summary: {
      es: "Reemplaza las hojas de cálculo dispersas y los sistemas de escritorio aislados que usan los negocios pequeños y medianos para manejar inventario, compras, proveedores y pedidos, por un ecosistema centralizado: gestión web, un servicio de Machine Learning que predice demanda mensual por producto a partir del historial real de ventas, y una app móvil de consulta.",
      en: "Replaces the scattered spreadsheets and isolated desktop systems small and mid-sized businesses use to manage inventory, purchases, suppliers, and orders with a centralized ecosystem: web management, a Machine Learning service that predicts monthly demand per product from real sales history, and a mobile companion app.",
    },

    heroDevices: {
      desktop: { label: "w3soft/dashboard", src: '/images/w3soft-1.png' },
      mobile: [
        { label: "w3softmovil/catalogo", src: '/images/w3soft-mobile-1.png' },
        { label: "w3softmovil/ventas", src: '/images/w3soft-mobile-2.png' },
      ],
    },
    heroCallouts: [
      {
        icon: "Cpu",
        corner: "top",
        text: {
          es: "Predicción de Demanda por IA (Backend)",
          en: "AI-powered Demand Prediction (Backend)",
        },
      },
      {
        icon: "Smartphone",
        corner: "bottom-right",
        text: {
          es: "App Móvil de Consulta (Flutter/Dart)",
          en: "Mobile Companion App (Flutter/Dart)",
        },
      },
    ],

    showcase: [
      {
        title: {
          es: "Una sola fuente de verdad para todo el ciclo comercial",
          en: "One source of truth for the whole commercial cycle",
        },
        description: {
          es: "Productos, categorías, clientes, proveedores, compras y pedidos en un único sistema, con autenticación JWT y generación de comprobantes en PDF, en vez de datos dispersos entre hojas de cálculo y sistemas de escritorio que no se comunican entre sí.",
          en: "Products, categories, customers, suppliers, purchases, and orders in a single system, with JWT authentication and PDF receipt generation, instead of data scattered across spreadsheets and desktop systems that don't talk to each other.",
        },
        screenshot: { label: "w3soft/productos", src: '/images/w3soft-2.png' },
        reverse: false,
      },
      {
        title: {
          es: "Predicción de demanda con datos reales, no intuición",
          en: "Demand prediction from real data, not guesswork",
        },
        description: {
          es: "Un servicio Flask separado (ai-service) entrena un modelo de regresión por producto sobre el historial real de pedidos pagados y expone una predicción de demanda mensual, para apoyar decisiones de reabastecimiento. El backend nunca expone este servicio directamente al navegador: actúa como proxy hacia él.",
          en: "A separate Flask service (ai-service) trains a per-product regression model on real paid-order history and exposes a monthly demand prediction, to support restocking decisions. The backend never exposes this service directly to the browser: it acts as a proxy in front of it.",
        },
        screenshot: { label: "w3soft/predicciones", src: '/images/w3soft-2.png' },
        reverse: true,
      },
      {
        title: {
          es: "Consulta desde el celular sin depender del escritorio",
          en: "Check it from your phone, no desktop required",
        },
        description: {
          es: "Una app móvil ligera en Flutter contra el mismo backend: login, catálogo de productos y un gráfico de ventas, para consultar stock sin tener que estar frente al sistema de escritorio.",
          en: "A lightweight Flutter app against the same backend: login, product catalog, and a sales chart, so stock can be checked without sitting in front of the desktop system.",
        },
        screenshot: { label: "w3softmovil/catalogo", src: '/images/w3soft-2.png' },
        reverse: false,
      },
    ],

    extraFeatures: [
      { es: "Recuperación de contraseña por correo (nodemailer)", en: "Email password recovery (nodemailer)" },
      { es: "Reportes y comprobantes en PDF (pdfmake)", en: "PDF reports and receipts (pdfmake)" },
      { es: "Dashboard con gráficos (Chart.js)", en: "Dashboard with charts (Chart.js)" },
      { es: "24 meses de histórico sintético ponderado estacionalmente", en: "24 months of seasonally-weighted synthetic history" },
    ],

    architectureHighlights: [
      {
        icon: "Route",
        title: { es: "Backend como proxy hacia la IA", en: "Backend as a proxy to the AI service" },
        description: {
          es: "El navegador nunca habla directo con ai-service: el backend Express expone /w3soft/predictions/* y reenvía la petición al servicio Flask.",
          en: "The browser never talks to ai-service directly: the Express backend exposes /w3soft/predictions/* and forwards the request to the Flask service.",
        },
      },
      {
        icon: "Cpu",
        title: { es: "Predicción sin persistencia", en: "Prediction with no persistence" },
        description: {
          es: "El modelo de regresión por producto se re-entrena en cada request sobre pedidos con estado 'Pagado', sin caché ni modelo guardado en disco.",
          en: "The per-product regression model is retrained on every request over orders with 'Paid' status, with no cache or model saved to disk.",
        },
      },
      {
        icon: "Layers",
        title: { es: "SQL directo, sin ORM", en: "Direct SQL, no ORM" },
        description: {
          es: "Los controladores del backend escriben SQL directo contra tablas en español, con Joi validando cada esquema antes de INSERT/UPDATE.",
          en: "Backend controllers write direct SQL against Spanish-named tables, with Joi validating every schema before INSERT/UPDATE.",
        },
      },
      {
        icon: "GitBranch",
        title: { es: "4 servicios orquestados", en: "4 orchestrated services" },
        description: {
          es: "Docker Compose levanta postgres, backend, frontend y ai como servicios independientes; un script de seed genera histórico realista para entrenar el modelo.",
          en: "Docker Compose brings up postgres, backend, frontend, and ai as independent services; a seed script generates realistic history to train the model.",
        },
      },
    ],

    stack: {
      backend: [
        "Node.js + Express",
        "PostgreSQL (pg, sin ORM)",
        "Joi",
        "JWT + bcryptjs",
        "nodemailer",
        "morgan + cors",
      ],
      frontend: [
        "React 18",
        "React Router v6",
        "Context API",
        "Bootstrap 5 / react-bootstrap",
        "styled-components + Emotion",
        "Chart.js",
        "react-data-table-component",
        "pdfmake",
        "Flutter / Dart (app móvil)",
      ],
      ai: ["Python + Flask", "scikit-learn (LinearRegression)", "psycopg2"],
      devops: ["Docker Compose"],
      quality: [],
    },

    metrics: [
      { label: { es: "Servicios orquestados", en: "Orchestrated services" }, value: "4" },
      { label: { es: "Repos del ecosistema", en: "Ecosystem repos" }, value: "3" },
      { label: { es: "Meses de histórico generado", en: "Months of generated history" }, value: "24" },
      { label: { es: "Tablas del esquema", en: "Schema tables" }, value: "9" },
    ],

    links: {
      demo: null,
      repos: [
        { label: "W3SOFT (backend + frontend)", url: "https://github.com/Josedan32/W3SOFT" },
        { label: "W3SOFTMOVIL", url: "https://github.com/Josedan32/W3SOFTMOVIL" },
        { label: "IA-w3soft (legacy)", url: "https://github.com/Josedan32/IA-w3soft" },
      ],
    },

    demoAccess: null,
    demoVideo: '/videos/w3soft.mp4',
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
