import styled from "styled-components";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const Section1Container = styled.section`
  height: 100vh;
  max-height: 721px;
  position: relative;
  overflow: hidden;
`;

export const Section1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Section1Slide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;



export const Section1Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const Section1Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;

`;

export const Section1Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);

  h1 {
    font-size: 42px;
    font-weight: 600;
    text-transform: capitalize;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    color: #2979FF;
  }

  p {
    margin-bottom: 1.2rem;
    text-align: left;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 22px;
  }
`;

export const SliderButtons1 = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  z-index: 10;
`;

export const SliderButtons2 = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`
  width: 35px;
  height: 35px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #2979FF;
    transform: scale(1.2);
  }
`;
export const NextArrow = styled(IoArrowForward)`
  width: 35px;
  height: 35px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #2979FF;
    transform: scale(1.2);
  }
`;
