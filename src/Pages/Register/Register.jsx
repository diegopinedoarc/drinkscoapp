import { Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/LoginForm/LoginInput";
import {
  Form,
  LoginContainerStyled,
  LoginButtonGoogleStyled,
} from "./RegisterStyle";
import { Link } from "react-router-dom";
import { createUser, signInWithGoogle } from "../../firebase/firebase-utils";
import { useLocation } from "react-router-dom";
import useRedirect from "../../hooks/useRedirect";
import { registerInitialValues, registerValidationSchema } from "../../Formik";
import Submit from "../../Components/Submit/Submit";
const Register = () => {
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            await createUser(values.email, values.password, values.name);
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              alert("Mail en uso");
            }
          }
          actions.resetForm();
        }}
      >
        <Form>
          <LoginInput name="name" type="text" placeholder="Nombre" />
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Submit>Registrarse</Submit>
          <Link to="/login">
            <Submit style={{ color: "black" }}>Volver al login</Submit>
          </Link>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled type="button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
