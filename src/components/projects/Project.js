import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project(props) {

    const project = props.project;

    return (
        <div className="project-container">
            <div className="image-container">
                <img src={project.image} alt="Photo"/>
            </div>
            <h1>{project.title}</h1>
            {/* <p>{project.description}</p> */}
            <div className="project-stack">
                {
                    project.stack.map((icon, i) => (
                        <FontAwesomeIcon 
                            key={i}
                            color={icon.color}
                            icon={icon.icon}/>
                    ))
                }
            </div>
            <div className="button-container">
                {
                    project.link.map((link, i) => (
                        <a 
                            className="btn" 
                            href={link.url}
                            target="blank"
                            key={i}>
                        <FontAwesomeIcon mask={'far'} icon={link.icon}/></a>
                    ))
                }
            </div>
        </div>
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project

