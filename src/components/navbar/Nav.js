import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/nav.css'
import {withRouter, Link} from 'react-router-dom';

import Links from './Links'

import { faHome, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navLinks: [
                {
                    title: "Hjem",
                    icon: faHome,
                    path: "/"
                },
                {
                    title: "Prosjekter",
                    icon: faPen,
                    path: "/projects"
                },
                {
                    title: "Kontakt meg",
                    icon: faEnvelope,
                    path: "/contact"
                }
            ],
            socialLinks: [
                {
                    title: "LinkedIn",
                    icon: faLinkedin,
                    path: "https://www.linkedin.com/in/sindrehaavaldsen/"
                },
                {
                    title: "GitHub",
                    icon: faGithub,
                    path: "https://github.com/SindreHa"
                }
            ]
        }
    }

    render() {
        return (
            <nav>
                <div id="nav-header">
                    <Link to="/">SH</Link>
                </div>
                <ul className="nav-links text-reveal">
                    {
                    this.state.navLinks.map((link, key) => (
                        <Links 
                            type="route" 
                            key={key} 
                            link={link}/>
                    ))
                    }
                </ul>
                <ul className="nav-links nav-social">
                    {
                    this.state.socialLinks.map((link, key) => (
                        <Links
                            type="social" 
                            key={key} 
                            link={link}/>
                    ))
                    }
                </ul>
            </nav>
        )
    }
}

Nav.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(Nav)

