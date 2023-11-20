import React, { useState, useRef, useEffect } from "react";
import "./Section1.css"

import {
  Section1Container,
  Section1Wrapper,
  Section1Slide,
  Section1Slider,
  Section1Image,
  Section1Content,
  SliderButtons1,
  SliderButtons2,
  PrevArrow,
  NextArrow,
} from "./Section1Elements";
import { SectionButton } from "../../Buttons/Button";

function Section1({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <Section1Container>
        <Section1Wrapper>
          {slides.map((slide, index) => {
            return (
              <Section1Slide className={index === current ? "slide active" : "slide"} key={index} >
                {index === current && (
                  <Section1Slider>
                    <Section1Image src={slide.image} alt={slide.alt} />
                    <Section1Content>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <SectionButton
                        to={slide.path}
                        primary="true"
                        css={`
                          max-width: 160px;
                        `}
                      >
                        {slide.label}
                      </SectionButton>
                    </Section1Content>
                  </Section1Slider>
                )}
              </Section1Slide>
            );
          })}
          <SliderButtons1>
            <PrevArrow onClick={prevSlide} />
          </SliderButtons1>
          <SliderButtons2>
            <NextArrow onClick={nextSlide} />
          </SliderButtons2>
        </Section1Wrapper>
      </Section1Container>
    </>
  );
}

export default Section1;
