'use client';

import { useState } from "react";
import { ProjectItem } from "../../types/project";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({projects}: {projects: ProjectItem[]}) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  return (
    <section className="py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </section>
  )
}