import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 95vw;
  max-width: 1600px;
  padding: 0.8rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0rem;
  border-radius: 0.4rem;

  h2 {
    font-weight: 400;
  }
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    max-width: 100%;
  }
`;
export const ProdContainerRef = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
`;
