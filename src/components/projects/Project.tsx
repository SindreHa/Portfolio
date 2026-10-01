import type { Ref } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ProjectData } from "./data";

interface ProjectProps {
  project: ProjectData;
  ref?: Ref<HTMLDivElement>;
}

function Project({ project, ref }: ProjectProps) {
  return (
    <div className="project-container" ref={ref}>
      <div className="image-container">
        <img src={project.image} alt="prosjektbilde" />
      </div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div
        className="project-stack"
        style={{ borderColor: project.themeColor }}
      >
        {project.stack.map((tech) => (
          <FontAwesomeIcon
            key={tech.icon.iconName}
            color={tech.color}
            icon={tech.icon}
          />
        ))}
      </div>
      <div className="button-container">
        {project.links.map((link) => (
          <a
            className="btn"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}
            style={{ borderColor: project.themeColor }}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
