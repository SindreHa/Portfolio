import type { CSSProperties } from "react";
import Project from "./Project";
import { projects } from "./data";
import { SlideIn, FadeIn } from "../Transitions";
import "../../css/projects.css";

const FIRST_CARD_DELAY = 600;
const CARD_STAGGER = 250;

export default function Portfolio() {
  return (
    <div id="projects-wrapper">
      <SlideIn in delay={0}>
        <h1 id="projects-title">Portefølje</h1>
      </SlideIn>
      <div
        id="projects"
        style={{ "--project-count": projects.length } as CSSProperties}
      >
        {projects.map((project, i) => (
          <FadeIn
            in
            delay={FIRST_CARD_DELAY + i * CARD_STAGGER}
            key={project.id}
          >
            <Project project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
