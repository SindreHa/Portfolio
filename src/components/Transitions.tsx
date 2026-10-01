import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface TransitionProps {
  in: boolean;
  delay: number;
  children: React.ReactElement<{ ref?: React.Ref<HTMLElement> }>;
}

function makeTransition(classNames: string) {
  return function Transition({ in: inProp, delay, children }: TransitionProps) {
    const nodeRef = useRef<HTMLElement>(null);
    return (
      <CSSTransition
        nodeRef={nodeRef}
        unmountOnExit
        in={inProp}
        timeout={delay}
        classNames={classNames}
        appear
      >
        {React.cloneElement(children, { ref: nodeRef })}
      </CSSTransition>
    );
  };
}

export const SlideIn = makeTransition("slideIn");
export const FadeIn = makeTransition("fadeIn");
