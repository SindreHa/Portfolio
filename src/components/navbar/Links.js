import React from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Links(props) {
    const currentLocation = props.location.pathname;
    console.log(props.type);
    const link = props.link;

    if (props.type === "route") {
        return (
            <li id={link.path === currentLocation ? "current-page-link" : null}>
                <Link to={link.path}>
                    <p>{link.title}</p>
                    <FontAwesomeIcon icon={link.icon}/>
                </Link>
            </li>
        )
    } else {
        return (
            <li>
                <a target="blank" href={link.path}>
                    <FontAwesomeIcon icon={link.icon}/>
                </a>
            </li>
        )
    }
    
}

Links.propTypes = {
    link: PropTypes.object.isRequired
}

export default withRouter(Links)

