import { useLocation, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links(props: any) {
  const currentLocation = useLocation().pathname;
  const links = props.links;

  switch (props.type) {
    case "route":
      return (
        <ul className={props.class}>
          {links.map((link: any, key: any) => (
            <li
              id={link.path === currentLocation ? "current-page-link" : undefined}
              key={key}
              onClick={() => props.setOpen(false)}
            >
              <Link to={link.path}>
                <i className="icon">
                  <FontAwesomeIcon icon={link.icon} />
                </i>
                <p style={props.menuOpen ? { opacity: "1" } : undefined}>
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      );

    case "social":
      return (
        <ul className={props.class}>
          {links.map((link: any, key: any) => (
            <li key={key} onClick={() => props.setOpen(false)}>
              <a target="blank" href={link.path}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default Links;
