import React, { Component} from 'react'
import PropTypes from 'prop-types'
import '../../css/nav.css'
import {withRouter} from 'react-router-dom';

import Links from './Links'
import MenuToggle from './MenuToggle'

import { faHome, faEnvelope, faEye, faMale } from '@fortawesome/free-solid-svg-icons'
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
                    title: "Om meg",
                    icon: faMale,
                    path: "/about"
                },
                {
                    title: "Prosjekter",
                    icon: faEye,
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
            ],
            menuOpen: false
        }
    }

    setOpen = (boolean) => {
        this.setState({menuOpen: boolean})
    }

    render() {
        return (
            <nav className={this.state.menuOpen ? "open" : null}>
                <MenuToggle 
                    setOpen={this.setOpen} 
                    menuOpen={this.state.menuOpen}/>
                <Links 
                    class={this.state.menuOpen ? "nav-links open" : "nav-links"}
                    type="route" 
                    links={this.state.navLinks}
                    setOpen={this.setOpen}
                    menuOpen={this.state.menuOpen}/>
                <Links 
                    class="nav-social"
                    type="social" 
                    links={this.state.socialLinks}
                    setOpen={this.setOpen}/>
            </nav>
        )
    }
}

Nav.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(Nav)

