import styled from "styled-components";

export const OfertasContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 2rem;
  justify-content: center;
  @media only screen and (max-width: 624px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 0rem;
  }
`;
