import React from "react";
import {
  Section3Container,
  Section3wrapper,
  InfoColumnRight,
  InfoColumnLeft,
} from "./Section3Elements";
import { SectionButton } from "../../Buttons/Button";
function Section3({
  infoTitle,
  infoAlt,
  infoParaOne,
  buttonLabel,
  infoImageOne,
  infoParaTwo,
  infoImageTwo,
}) {
  return (
    <>
      <Section3Container>
        <Section3wrapper>
          <InfoColumnRight
            data-aos-duration="1000"
            data-aos="zoom-out"
            data-aos-once="true"
          >
            <h1>{infoTitle}</h1>
            <img src={infoImageOne} alt={infoAlt} />
            <p>{infoParaOne}</p>
            <SectionButton to="/homes">{buttonLabel}</SectionButton>
          </InfoColumnRight>
          <InfoColumnLeft
            data-aos-duration="1000"
            data-aos="fade-up-right"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img src={infoImageTwo} alt={infoAlt} />
            <p>{infoParaTwo}</p>
            <SectionButton to="/homes">{buttonLabel}</SectionButton>
          </InfoColumnLeft>
        </Section3wrapper>
      </Section3Container>
    </>
  );
}

export default Section3;
