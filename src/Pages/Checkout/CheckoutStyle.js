import styled from "styled-components";
export const CheckoutWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 90vw;
  gap: 1rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    scale: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;
