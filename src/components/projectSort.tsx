import projectsData from '../data/projects.json';
import {useTranslation} from "react-i18next";
import Project from './project';

interface ProjectSortProps {
  activeFilter: string,
  activeSortBy: string,

}

export default function ProjectSort({activeFilter, activeSortBy}: ProjectSortProps) {

  const {t} = useTranslation();

  let projects = projectsData.map(p => ({
    ...p,
    imageAlt: t(`${p.id}.alt`),
    header: t(`${p.id}.header`),
    description: t(`${p.id}.desc`),
    status: p.status === "wip" ? t("wip") : p.status,
  }))

  if(activeFilter.length > 0){
    projects = projects.filter(project => { return project.tech.includes(activeFilter)
    });
  }

  if (activeSortBy.length > 0){
    const newest = activeSortBy === t(`projectGrouping.newest`);
    projects = projects.sort((a,b) => {
            
      if(a.status === t("wip")) return newest ? 1 : -1;
      if(b.status === t("wip")) return newest ? -1 : 1;



      const dateA = new Date(a.status);
      const dateB = new Date(b.status);

      return newest ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
        })}

  return (
    <>
      {
        projects.map(project => (
          <Project
          key={project.id}
          image={project.image}
          imageAlt={project.imageAlt}
          header={project.header}
          description={project.description}
          status={project.status}
          tech={project.tech}
          github={project.github}
        />
        ))
      }
    </>
  )
}