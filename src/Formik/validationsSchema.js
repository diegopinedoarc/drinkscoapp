import * as Yup from "yup";
import { regEmail } from "../utils/regExp";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Campo requerido"),
  cellphone: Yup.string().required("Campo requerido"),
  location: Yup.string().required("Campo requerido"),
  address: Yup.string().required("Campo requerido"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Campo requerido"),
  email: Yup.string().matches(regEmail, "Email invalido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, "Email invalido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, "Email invalido"),
});
