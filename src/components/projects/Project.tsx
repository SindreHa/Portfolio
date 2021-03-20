import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project(props: any) {
  const project = props.project;

  return (
    <div className="project-container">
      <div className="image-container">
        <img src={project.image} alt="prosjektbilde" />
      </div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div
        className="project-stack"
        style={{ borderColor: project.themeColor }}
      >
        {project.stack.map((icon: any, i: number) => (
          <FontAwesomeIcon key={i} color={icon.color} icon={icon.icon} />
        ))}
      </div>
      <div className="button-container">
        {project.link.map((link: any, i: number) => (
          <a
            className="btn"
            href={link.url}
            target="blank"
            key={i}
            style={{ borderColor: project.themeColor }}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
