import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  margin-top: 2rem;
  /* border: 1px solid black; */
  /* background-color: var(--negroheader); */
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
`;
export const LoginPasswordStyled = styled.p`
  margin: 0;
  color: black;
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
  @media only screen and (max-width: 624px) {
    max-width: 100%;
    text-align: center;
  }
`;
export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: 2px solid black;
  border-radius: 1rem;
  color: black;
  cursor: pointer;
  background: none;
  @media only screen and (max-width: 624px) {
    max-width: 80%;
  }
`;
export const LoginEmailStyled = styled.p`
  color: black;
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
  @media only screen and (max-width: 624px) {
    max-width: 100%;
    text-align: center;
  }
`;
// @media only screen and (max-width: 624px)
// @media only screen and (max-width: 1000px) and (min-width: 624px)
