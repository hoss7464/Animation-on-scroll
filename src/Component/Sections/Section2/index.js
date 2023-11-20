import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Section2Data } from "../../Data/Section2Data";
import {
  Section2Container,
  Section2Wrapper,
  ColumnLeft,
  ColumnRight,
} from "./Section2Elements";
import { SectionButton } from "../../Buttons/Button";

function Section2() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Section2Container>
        <Section2Wrapper>
          <ColumnLeft reverse="true">
            <h1
              data-aos-duration="1000"
              data-aos="zoom-out"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              {Section2Data.heading}
            </h1>
            <div
              data-aos-duration="1000"
              data-aos="fade-up-right"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <p>{Section2Data.paragraphOne}</p>
              <p>{Section2Data.paragraphTwo}</p>
              <SectionButton to="/homes">
                {Section2Data.buttonLabel}
              </SectionButton>
            </div>
          </ColumnLeft>

          <ColumnRight>
            <img src={Section2Data.image} alt={Section2Data.alt} />
          </ColumnRight>
        </Section2Wrapper>
      </Section2Container>
    </>
  );
}

export default Section2;
