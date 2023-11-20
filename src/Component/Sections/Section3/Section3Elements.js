import styled from "styled-components";

export const Section3Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
`;
export const Section3wrapper = styled.div`
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 721px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  margin-left: 3rem;

  h1 {
    font-size: 37px;
    font-weight: 600;
    margin-bottom: 3rem;
    color: #2979ff;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }

  img {
    width: 90%;
    height: 60%;
    object-fit: cover;
    border-radius: 15px;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export const InfoColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  img {
    width: 90%;
    height: 60%;
    object-fit: cover;
    margin-top: 15rem;
    border-radius: 15px;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
