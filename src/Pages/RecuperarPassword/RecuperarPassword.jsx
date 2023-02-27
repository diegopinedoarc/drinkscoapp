import React from "react";
import {
  RecuperarPasswordContainer,
  Form,
  TituloRecuPass,
  RecuEmail,
} from "./RecuperarPasswordStyle";
import { Formik } from "formik";
import LoginInput from "../../Components/LoginForm/LoginInput";
import Submit from "../../Components/Submit/Submit";
import {
  forgotPasswordInitialValues,
  forgotPasswordValidationSchema,
} from "../../Formik";
import useRedirect from "../../hooks/useRedirect";
import { resetPassword } from "../../firebase/firebase-utils";
const RecuperarPassword = () => {
  useRedirect("/");
  return (
    <>
      <RecuperarPasswordContainer>
        <TituloRecuPass>Recuperar contraseña</TituloRecuPass>
        <Formik
          initialValues={forgotPasswordInitialValues}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={async (values, action) => {
            await resetPassword(values.email);
            action.resetForm();
          }}
        >
          <Form>
            <RecuEmail>Ingresa tu Email:</RecuEmail>
            <LoginInput name="email" type="text" placeholder="Email" />
            <Submit>Enviar</Submit>
          </Form>
        </Formik>
      </RecuperarPasswordContainer>
    </>
  );
};

export default RecuperarPassword;
