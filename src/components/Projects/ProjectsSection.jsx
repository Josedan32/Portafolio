import React from "react";
import { FloatingBackground } from "../FloatingBackground";
import { ProjectsHeader } from "./Header";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export const ProjectsSection = () => (
  <section
    id="proyectos"
    className="relative py-10 md:py-16 bg-gray-950 overflow-hidden"
  >
    <FloatingBackground />
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90 z-0 pointer-events-none"></div>

    <div className="relative max-w-6xl mx-auto px-4 md:px-8">
      <ProjectsHeader />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  </section>
);
