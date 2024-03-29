import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form as FormikForm } from "formik";

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: 100vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: 2px solid black;
  background: none;
  border-radius: 1rem;
  color: black;
  cursor: pointer;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
