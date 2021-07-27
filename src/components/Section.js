import React from "react";
import { SectionStyled } from "./SectionStyled";

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
