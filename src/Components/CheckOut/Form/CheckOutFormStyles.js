import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";
export const CheckoutDatosStyled = styled.div`
  width: 80%;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;
  flex-wrap: wrap;
  width: 60%;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    justify-content: center;
    align-items: center;
    width: 120%;
    flex-direction: column;
  }
`;

export const CheckoutWrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    left: -5rem;
  }
`;
