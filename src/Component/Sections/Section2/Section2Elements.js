import styled from "styled-components";

export const Section2Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

export const Section2Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 721px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    font-size: 37px;
  color: #2979FF;
  text-transform: capitalize;
  margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 20px;
    text-align:left;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
