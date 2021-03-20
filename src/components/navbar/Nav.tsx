import React from "react";
import "../../css/nav.css";

import Links from "./Links";
import MenuToggle from "./MenuToggle";

import { faHome, faMale } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface NavLinks {
  title: string,
  icon: any,
  path: string
}

interface SocialLinks {
  title: string,
  icon: any,
  path: string
}

interface AppState {
  navLinks: NavLinks[],
  socialLinks: SocialLinks[],
  menuOpen: boolean
}

export default class Nav extends React.Component<{}, AppState> {
  handleClickOutside = () => {
    this.setState({ menuOpen: false });
  };

  constructor(props: any) {
    super(props);
    this.state = {
      navLinks: [
        {
          title: "Hjem",
          icon: faHome,
          path: "/",
        },
        {
          title: "Om meg",
          icon: faMale,
          path: "/about",
        },
        {
          title: "Portefølje",
          icon: faEye,
          path: "/projects",
        },
      ],
      socialLinks: [
        {
          title: "LinkedIn",
          icon: faLinkedin,
          path: "https://www.linkedin.com/in/sindrehaavaldsen/",
        },
        {
          title: "GitHub",
          icon: faGithub,
          path: "https://github.com/SindreHa",
        },
      ],
      menuOpen: false,
    };
  }

  setOpen = (boolean: boolean) => {
    this.setState({ menuOpen: boolean });
  };

  render() {
    return (
      <nav className={this.state.menuOpen ? "open" : undefined}>
        <MenuToggle setOpen={this.setOpen} menuOpen={this.state.menuOpen} />
        <Links
          class={this.state.menuOpen ? "nav-links open" : "nav-links"}
          type="route"
          links={this.state.navLinks}
          setOpen={this.setOpen}
          menuOpen={this.state.menuOpen}
        />
        <Links
          class="nav-social"
          type="social"
          links={this.state.socialLinks}
          setOpen={this.setOpen}
        />
      </nav>
    );
  }
}
/* 
Nav.propTypes = {
  location: PropTypes.object.isRequired,
}; */

//export default withRouter(onClickOutside(Nav));
