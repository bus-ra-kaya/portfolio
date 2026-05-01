import projectsData from '../data/projects.json';
import {useTranslation} from "react-i18next";
import Project from './Project';

type Props = {
  activeFilter: string,
  activeSortBy: string,
}

export default function ProjectSort({activeFilter, activeSortBy}: Props) {

  const {t} = useTranslation();

  let projects = projectsData.map(p => ({
    ...p,
    imageAlt: t(`${p.id}.alt`),
    header: t(`${p.id}.header`),
    description: t(`${p.id}.desc`),
    details: t(`${p.id}.details`, {returnObjects: true}) as string[],
    status: p.status === "wip" ? t("wip") : p.status,
  }))

  if(activeFilter.length > 0){
    projects = projects.filter(project => { return project.tech.includes(activeFilter)
    });
  }

  if (activeSortBy.length > 0){
    const newest = activeSortBy === t("projectGrouping.newest");
    projects = projects.sort((a,b) => {

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
          details={project.details}
          status={project.status}
          tech={project.tech}
          github={project.github}
          website={project.website ? project.website : ""}
        />
        ))
      }
    </>
  )
}