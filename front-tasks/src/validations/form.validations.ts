import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  email: yup.string().required("Your email is required").email(),
  password: yup
    .string()
    .required("Your password is required")
    .matches(/[A-Z]/, "Must contain at least 1 capital letter")
    .matches(/(\d)/, "must contain at least 1 number")
    .matches(/.{8}/, "The password has to be greater or equal than 8"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be match"),
});

export const loginUserSchema = yup.object().shape({
  email: yup.string().required("Your email is required").email(),
  password: yup.string().required("Your password is required"),
});
