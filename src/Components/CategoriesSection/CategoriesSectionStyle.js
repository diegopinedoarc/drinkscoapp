import styled from "styled-components";
export const CateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  @media only screen and (max-width: 624px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
