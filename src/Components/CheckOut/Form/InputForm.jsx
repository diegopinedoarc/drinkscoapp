import { Field, ErrorMessage } from "formik";
import React from "react";
import {
  Input,
  InputContainer,
  InputLabel,
  ErrorMessageStyled,
} from "./InputFormStyle";

const InputForm = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainer>
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <InputLabel htmlFor={htmlFor}>{children} </InputLabel>
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainer>
      )}
    </Field>
  );
};

export default InputForm;
