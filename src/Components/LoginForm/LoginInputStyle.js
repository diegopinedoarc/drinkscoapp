import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 624px) {
    max-width: 80%;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: black;
  text-align: center;
  background-color: var(--blancotransp);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  outline: none;
  caret-color: var(--naranja2);
  border: 2px solid var(--naranja2);

  ::placeholder {
    opacity: 90%;
  }

  @media only screen and (max-width: 624px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;

// @media only screen and (max-width: 624px)
// @media only screen and (max-width: 1000px) and (min-width: 624px)
