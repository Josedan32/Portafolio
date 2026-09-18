export const projects = [
  {
    slug: "asistentes-academicos",
    title: "Asistentes Académicos",
    tagline: {
      es: "Semillero COGNIA · Agentes que responden la malla curricular con datos reales, no con texto plausible",
      en: "COGNIA Research Group · Agents that answer curriculum questions from real data, never plausible text",
    },
    status: { es: "En desarrollo", en: "In development" },
    role: { es: "Desarrollador Full-stack", en: "Full-stack Developer" },
    year: "2026",
    summary: {
      es: "Proyecto del Semillero de Investigación COGNIA de la Institución Universitaria Pascual Bravo, pensado para que cualquier estudiante de la institución — sin importar su programa académico — pregunte por su malla curricular, prerrequisitos y material de curso a un agente que responde consultando la base de datos a través de herramientas, nunca generando texto plausible. Un prerrequisito inventado puede hacer que alguien se matricule mal, así que el agente está diseñado para abstenerse antes que adivinar — y cada respuesta muestra en una tarjeta qué herramienta consultó y cuántas filas devolvió.",
      en: "A project from the COGNIA Research Group at Institución Universitaria Pascual Bravo, built so any student at the institution — regardless of their academic program — can ask about their curriculum, prerequisites and course material to an agent that answers by querying the database through tools, never by generating plausible text. A fabricated prerequisite can get a student to enroll incorrectly, so the agent is built to abstain rather than guess — and every answer shows a card with which tool it called and how many rows it returned.",
    },

    heroScreenshot: { label: "asistentes-academicos.app/chat", src: '/images/asistentes-academicos-1.png' },

    showcase: [
      {
        title: {
          es: "Cada respuesta muestra de dónde salió",
          en: "Every answer shows where it came from",
        },
        description: {
          es: "Una tarjeta de transparencia muestra qué herramienta consultó el agente, cuántas filas devolvió y cuánto tardó — nunca expone los datos crudos del estudiante, solo la descripción en español y las métricas. El estudiante puede confiar en la respuesta o pedir la fuente.",
          en: "A transparency card shows which tool the agent called, how many rows it returned and how long it took — it never exposes the student's raw data, only a plain-language description and the timing/row-count metadata. The student can trust the answer or ask for the source.",
        },
        screenshot: { label: "asistentes-academicos.app/chat", src: '/images/asistentes-academicos-2.png' },
        reverse: false,
      },
      {
        title: {
          es: "Cinco modos, un mismo asistente",
          en: "Five modes, one assistant",
        },
        description: {
          es: "Consulta, Estudio, Práctica, Examen y Resumen cambian el enfoque del mismo agente sin cambiar de herramientas: en modo Práctica genera un ejercicio y evalúa la respuesta escrita del estudiante en el momento.",
          en: "Consulta, Estudio, Práctica, Examen and Resumen reframe the same agent without swapping tools: in Práctica mode it generates an exercise and grades the student's typed answer on the spot.",
        },
        screenshot: { label: "asistentes-academicos.app/chat", src: '/images/asistentes-academicos-3.png' },
        reverse: true,
      },
      {
        title: {
          es: "La malla curricular es un tablero, no una tabla",
          en: "The curriculum is a board, not a table",
        },
        description: {
          es: "Coordinación arrastra materias entre semestres con validación en tiempo real: no se puede mover una materia antes de su prerrequisito ni después de una materia que depende de ella. Los cursos compartidos entre programas quedan marcados aparte.",
          en: "Coordination staff drag courses between semesters with real-time validation: a course can't be moved earlier than its prerequisite or later than a course that depends on it. Courses shared across programs are flagged separately.",
        },
        screenshot: { label: "asistentes-academicos.app/admin/curriculum", src: '/images/asistentes-academicos-4.png' },
        reverse: false,
      },
    ],

    extraFeatures: [
      { es: "Streaming de respuesta token a token vía SSE", en: "Token-by-token response streaming over SSE" },
      { es: "Tutor de material de curso con búsqueda semántica (RAG)", en: "Course-material tutor with semantic search (RAG)" },
      { es: "Pizarra de apuntes a mano alzada dentro del chat", en: "Freehand scratch canvas inside the chat" },
      { es: "Modelo local (Ollama) con fallback a la nube (Groq)", en: "Local model (Ollama) with a cloud fallback (Groq)" },
    ],

    architectureHighlights: [
      {
        icon: "ShieldCheck",
        title: { es: "Identidad inyectada en servidor", en: "Server-injected identity" },
        description: {
          es: "program_id y student_id nunca los provee el modelo: se inyectan desde la sesión autenticada antes de ejecutar cualquier herramienta, para que un prompt no pueda pedir datos de otro estudiante.",
          en: "program_id and student_id are never model-supplied: they're injected from the authenticated session before any tool runs, so a prompt can't reach into another student's data.",
        },
      },
      {
        icon: "Layers",
        title: { es: "Arquitectura por capas, verificada por tests", en: "Layered architecture enforced by tests" },
        description: {
          es: "domain → application → infrastructure/api, con un test que falla el build si domain importa un framework o application importa infraestructura.",
          en: "domain → application → infrastructure/api, with a test that fails the build if domain imports a framework or application imports infrastructure.",
        },
      },
      {
        icon: "GitBranch",
        title: { es: "Agente escrito a mano, sin framework", en: "Hand-written agent loop, no framework" },
        description: {
          es: "Sin LangChain ni LlamaIndex: el loop de tool-calling es el objeto de estudio del proyecto, y un framework lo haría imposible de medir.",
          en: "No LangChain or LlamaIndex: the tool-calling loop is the object of study, and a framework would make it unmeasurable.",
        },
      },
      {
        icon: "Route",
        title: { es: "Redis serializa la inferencia", en: "Redis serializes inference" },
        description: {
          es: "4 GB de VRAM alcanzan para una sola inferencia a la vez; Redis hace de cola FIFO entre todos los procesos worker de uvicorn.",
          en: "4 GB of VRAM only fits one inference at a time; Redis acts as a FIFO queue across every uvicorn worker process.",
        },
      },
    ],

    stack: {
      backend: [
        "Python 3.13",
        "FastAPI (async)",
        "SQLAlchemy 2.0 + Alembic",
        "SQLite",
        "Redis",
        "Ollama (qwen2.5:3b)",
        "Groq (fallback en la nube)",
        "Pydantic v2",
        "PyJWT + argon2-cffi",
      ],
      frontend: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "TanStack Query",
        "Radix UI",
        "dnd-kit",
        "Tailwind CSS v4",
        "react-markdown + KaTeX",
      ],
      devops: ["Docker Compose (Redis)"],
      quality: ["pytest + pytest-asyncio (300 tests)", "Vitest + Testing Library (115 tests)", "ruff", "mypy --strict", "Tests de arquitectura por capas"],
    },

    metrics: [
      { label: { es: "Tests automatizados", en: "Automated tests" }, value: "415+" },
      { label: { es: "Herramientas del agente", en: "Agent tools" }, value: "6" },
      { label: { es: "Registros de decisión (ADR)", en: "Decision records (ADRs)" }, value: "8" },
      { label: { es: "Modos de asistente", en: "Assistant modes" }, value: "5" },
    ],

    links: {
      demo: null,
      repos: [
        { label: "asistentes-academicos", url: "https://github.com/Josedan32/asistentes-academicos" },
      ],
    },

    demoAccess: null,
  },
  {
    slug: "family-hub",
    title: "Family Hub",
    tagline: {
      es: "Sistema operativo del hogar: finanzas, aportes, gastos y tareas, detrás de un modelo de privacidad por miembro",
      en: "A household operating system: finances, contributions, chores and goals, behind a per-member privacy model",
    },
    status: { es: "En desarrollo", en: "In development" },
    role: { es: "Desarrollador Full-stack", en: "Full-stack Developer" },
    year: "2026",
    summary: {
      es: "Reemplaza la mezcla de hojas de cálculo y notas sueltas que usa una familia para llevar sus finanzas compartidas por una PWA centralizada, donde cada miembro decide cuánto ve el resto de sus ingresos, gastos, ahorros y deudas — público, resumen o privado, campo por campo. El dinero nunca es un float: cada monto vive en enteros de unidad mínima, y un aporte al hogar siempre se refleja como el mismo movimiento en ambos lados de la transacción, en la misma transacción de base de datos.",
      en: "Replaces the mix of spreadsheets and scattered notes a family uses to track shared finances with a centralized PWA, where every member decides how much of their income, expenses, savings and debts the rest of the household can see — public, summary or private, field by field. Money is never a float: every amount lives as an integer in minor units, and a household contribution always mirrors as the same movement on both sides of the transaction, inside one database transaction.",
    },

    heroDevices: {
      desktop: { label: "family-hub.app/", src: '/images/family-1.png' },
      mobile: [
        { label: "family-hub.app/", src: '/images/family-mobile-1.png' },
        { label: "family-hub.app/aportes", src: '/images/family-mobile-2.png' },
      ],
    },

    showcase: [
      {
        title: {
          es: "Cada monto tiene su propio nivel de privacidad",
          en: "Every amount has its own privacy level",
        },
        description: {
          es: "Ingresos, gastos, ahorros y deudas se configuran por separado como públicos, resumen o privados. Los totales del hogar siempre incluyen a todos — excluir a un miembro privado del total rompería el dashboard y además delataría, con el cambio, que alguien ajustó su privacidad.",
          en: "Income, expenses, savings and debts are each configured independently as public, summary or private. Household totals always include everyone — excluding a private member would break the dashboard and, worse, the shift itself would reveal that someone just changed their privacy setting.",
        },
        screenshot: { label: "family-hub.app/finanzas", src: '/images/family-2.png' },
        reverse: false,
      },
      {
        title: {
          es: "Privacidad por campo, no por pantalla",
          en: "Privacy per field, not per screen",
        },
        description: {
          es: "Cada miembro decide, campo por campo, si el resto del hogar ve el detalle, solo el resumen o nada. La regla es absoluta: ningún rol —tampoco el admin— ve más allá de lo que esa configuración permite.",
          en: "Each member decides, field by field, whether the rest of the household sees the detail, only a summary, or nothing. The rule is absolute: no role — not even the admin — ever sees past what that setting allows.",
        },
        screenshot: { label: "family-hub.app/ajustes/privacidad", src: '/images/family-3.png' },
        reverse: true,
      },
      {
        title: {
          es: "Tareas del hogar con reparto justo, no por turnos",
          en: "Household chores split fairly, not by rotation",
        },
        description: {
          es: "El algoritmo de asignación compensa a quien estuvo ausente dándole más carga cuando vuelve, en vez de llevar un contador de 'deuda' aparte. El desempate entre candidatos es aleatorio a propósito: ordenar por nombre o antigüedad le asignaría la misma tarea a la misma persona para siempre.",
          en: "The assignment algorithm compensates an absent member by giving them more load when they return, instead of keeping a separate 'debt' counter. The tie-break between candidates is deliberately random — sorting by name or seniority would hand the same chore to the same person forever.",
        },
        screenshot: { label: "family-hub.app/tareas", src: '/images/family-4.png' },
        reverse: false,
      },
    ],

    extraFeatures: [
      { es: "PWA instalable, offline de solo lectura", en: "Installable PWA, read-only offline" },
      { es: "Préstamos entre miembros con doble registro", en: "Member-to-member loans with double-entry ledger" },
      { es: "Metas de ahorro con prioridad y retiro como ingreso", en: "Priority savings goals, withdrawals count as income" },
      { es: "Cliente TypeScript generado desde OpenAPI, nunca editado a mano", en: "OpenAPI-generated TypeScript client, never hand-edited" },
    ],

    architectureHighlights: [
      {
        icon: "ShieldCheck",
        title: { es: "Resolver de visibilidad como dependencia", en: "Visibility resolver as a dependency" },
        description: {
          es: "Cada endpoint que toca datos de un miembro declara su dependencia de visibilidad en la firma de la ruta, no como un helper que hay que acordarse de llamar — el CI falla si falta.",
          en: "Every endpoint touching member data declares its visibility dependency in the route signature — not a helper someone has to remember to call. CI fails if it's missing.",
        },
      },
      {
        icon: "Layers",
        title: { es: "Capas en una sola dirección", en: "Strictly one-directional layering" },
        description: {
          es: "routers → services → repositories → models. Los routers nunca tocan SQL; el household scoping se aplica en un único lugar de los repositorios, para que no se olvide en otro.",
          en: "routers → services → repositories → models. Routers never touch SQL; household scoping is applied in exactly one place inside the repositories, so it can't be forgotten elsewhere.",
        },
      },
      {
        icon: "GitBranch",
        title: { es: "Detalle y resumen, modelos distintos", en: "Detail and summary are separate models" },
        description: {
          es: "Nunca un solo modelo Pydantic con campos excluidos al serializar: un 'exclude' olvidado sería una fuga de datos, y con dos tipos separados se vuelve un error de tipos en compilación.",
          en: "Never one Pydantic model with fields excluded at serialization time: a forgotten 'exclude' would be a data breach, and with two separate types it becomes a compile-time type error instead.",
        },
      },
      {
        icon: "Route",
        title: { es: "Contrato generado, sin diferencias posibles", en: "Generated contract, no drift possible" },
        description: {
          es: "FastAPI emite OpenAPI 3.1 y un paso de build genera el cliente TypeScript del frontend; CI falla si regenerarlo produce una diferencia, así un backend que rompe al frontend es un build failure, no una sorpresa en producción.",
          en: "FastAPI emits OpenAPI 3.1 and a build step generates the frontend's TypeScript client; CI fails if regenerating it produces a diff, so a backend change that breaks the frontend is a build failure, not a runtime surprise.",
        },
      },
    ],

    stack: {
      backend: [
        "Python 3.13",
        "FastAPI (async)",
        "SQLAlchemy 2.0 + Alembic",
        "PostgreSQL 16",
        "PyJWT + argon2-cffi",
        "Pydantic v2",
      ],
      frontend: [
        "Next.js 15 (App Router)",
        "React 18",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS v4",
        "PWA (manifest + service worker)",
      ],
      devops: ["Docker Compose (Postgres)"],
      quality: ["pytest + pytest-asyncio (430+ tests)", "Vitest + Testing Library", "Playwright (E2E + a11y)", "ruff", "mypy --strict"],
    },

    metrics: [
      { label: { es: "Tests automatizados", en: "Automated tests" }, value: "430+" },
      { label: { es: "Migraciones de base de datos", en: "Database migrations" }, value: "26" },
      { label: { es: "Módulos funcionales", en: "Functional modules" }, value: "6" },
      { label: { es: "Niveles de visibilidad por campo", en: "Visibility levels per field" }, value: "3" },
    ],

    links: {
      demo: null,
      repos: [
        { label: "Family-App", url: "https://github.com/Josedan32/Family-App" },
      ],
    },

    demoAccess: {
      email: "daniel@example.com",
      password: "correct-horse-battery",
      note: {
        es: "Cuenta de demostración con datos sintéticos (seed) de la casa 'Familia Hernández'. No contiene información financiera real — uso exclusivo de entorno de desarrollo/demo.",
        en: "Demo account with synthetic (seed) data for the 'Familia Hernández' household. Contains no real financial information — for development/demo environment use only.",
      },
    },
  },
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
        { label: "infra", url: "https://github.com/Josedan32/aura-health-infra" },
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
