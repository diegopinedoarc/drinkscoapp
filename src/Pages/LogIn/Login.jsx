import { Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/LoginForm/LoginInput";
import {
  Form,
  LoginContainerStyled,
  LoginPasswordStyled,
  LoginButtonGoogleStyled,
  LoginEmailStyled,
} from "./LoginStyle";
import Submit from "../../Components/Submit/Submit";
import { Link } from "react-router-dom";
import {
  signInUser,
  signInWithGoogle,
  createUserProfileDocument,
} from "../../firebase/firebase-utils";
import { loginInitialValues, loginValidationSchema } from "../../Formik";
import useRedirect from "../../hooks/useRedirect";

const Login = () => {
  useRedirect("/");
  return (
    <LoginContainerStyled>
      <h1>Iniciar sesion</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch (error) {
            if (error.code === "auth/wrong-password") {
              alert("Contraseña incorrecta");
            }
            if (error.code === "auth/user-not-found") {
              alert("Usuario no encontrado");
            }
          }
        }}
      >
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/recuperarpassword">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <Submit>Ingresar</Submit>

          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled type="button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/dpxe6utid/image/upload/v1669904299/drinksCo/google-icon_jgdcr1_xpdqdb.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
