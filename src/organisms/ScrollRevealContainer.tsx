import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";

const ScrollRevealContainer: React.FC = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
        origin: "bottom",
        distance: "40px",
      });
  }, [sectionRef]);

  return <Section ref={sectionRef}>{children}</Section>;
};

export default ScrollRevealContainer;

const Section = styled.section`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 10;
`;
