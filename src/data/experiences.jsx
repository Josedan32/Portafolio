import { Sparkles, Globe } from "lucide-react";

export const experiences = [
    {
      company: "Cyclop Inc",
      role: { es: "Desarrollador Backend - IA Developer Trainee", en: "Backend Developer - AI Developer Trainee" },
      date: { es: "Sept 2024 - Actualidad", en: "Sept 2024 - Present" },
      color: "teal",
      icon: Sparkles,
      description: {
        es: "Desarrollé modelos de scoring crediticio y detección de fraude usando ML. Diseñé y mantuve APIs escalables (Python, FastAPI) para proyectos internos y externos, implementando funcionalidades avanzadas como manejo de cuotas, consumo de servicios de Inteligencia Artificial y gestión de acceso.",
        en: "Developed credit scoring and fraud detection models using ML. Designed and maintained scalable APIs (Python, FastAPI) for internal and external projects, implementing advanced features such as quota management, AI service integration, and access control.",
      },
      tech: ["Python", "TensorFlow", "XGBoost","Pandas", "Numpy", "OpenTelemetry" ,"Scikit-learn", "Docker" , "FastAPI", "PostgreSQL", "Django", "Redis", "AWS", "IBM", "AZURE", "DynamoDB", "Test", "Git"],
      achievements: [
        { es: "Modelo de scoring con 92% de precisión", en: "Scoring model with 92% accuracy" },
        { es: "Pipeline de reentrenamiento automático cada 48h", en: "Automatic retraining pipeline every 48h" },
      ],
    },
    {
      company: "Urcube S.A.S",
      role: { es: "Desarrollador Backend Junior", en: "Junior Backend Developer" },
      date: { es: "Feb 2023 - Abr 2024", en: "Feb 2023 - Apr 2024" },
      color: "green",
      icon: Globe,
      description: {
        es: "Desarrollé y mantuve la arquitectura backend de aplicaciones empresariales. Implementé soluciones escalables que resultaron en una mejora tangible en el rendimiento y la capacidad de respuesta de las aplicaciones.",
        en: "Developed and maintained the backend architecture of enterprise applications. Implemented scalable solutions that resulted in a tangible improvement in application performance and responsiveness.",
      },
      tech: ["Python", "PostgreSQL", "Docker", "Git", "FastAPI", "SCSS", "Js", "Jinja", "HTML"],
      achievements: [
        { es: "Desarrollo de +15 endpoints RESTful documentados con Swagger", en: "Built +15 RESTful endpoints documented with Swagger" },
      ],
    },
  ];
