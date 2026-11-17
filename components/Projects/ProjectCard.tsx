import Image from "next/image";
import { ProjectItem } from "../../types/project";

type Props = {
  project: ProjectItem;
  onSelect: () => void;
}

export default function ProjectCard ({project, onSelect}: Props) {

  return (
    <button
      type='button'
      onClick={onSelect}
      className="overflow-hidden rounded-2xl bg-surface border border-line transition-colors hover:border-accent cursor-pointer opacity-85 hover:opacity-100"
    >
     <div className="relative w-full h-70 border border-line bg-surface-2 flex">
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-fill rounded-md"
      />
    </div>
    <div className="p-5 flex flex-col min-h-80">
      <h3 className="font-display text-xl mb-4 mr-auto">{project.title}</h3>
      <p className="text-muted text-md leading-relaxed text-start min-h-25 mb-2">{project.description}</p>

      <div className="grid grid-cols-3 gap-2 text-sm mb-4 min-h-20">
        {project.tech.map((tech: string) => (
        <button 
          key={tech}
          className="border border-line rounded-lg p-2 h-10 hover:border-accent">
        {tech}
        </button>
      ))}

      </div>

      {project.status &&
      <span className="text-muted ml-auto">
        {project.status}
      </span>
      }
    </div>

    </button>
  )
}