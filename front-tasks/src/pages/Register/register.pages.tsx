import { TextField } from "@mui/material";
import Form from "../../components/Form/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../../validations/form.validations";
import ErrorSpan from "../../components/ErrorSpan/errorSpan";

export interface IFormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const registerUser = (data: IFormData) => {
    console.log(data);
    //aqui vai a request para registro
  };

  return (
    <>
      <Form title="Sign up" onSubmit={handleSubmit(registerUser)}>
        <TextField
          label="Name"
          {...register("name")}
          color={errors.name?.message ? "error" : "primary"}
        />
        <ErrorSpan error={errors.name?.message} />
        <TextField
          label="Email"
          {...register("email")}
          color={errors.email?.message ? "error" : "primary"}
        />
        <ErrorSpan error={errors.email?.message} />
        <TextField
          label="Password"
          {...register("password")}
          color={errors.password?.message ? "error" : "primary"}
        />
        <ErrorSpan error={errors.password?.message} />
        <TextField
          label="Confirm password"
          {...register("confirmPassword")}
          color={errors.confirmPassword?.message ? "error" : "primary"}
        />
        <ErrorSpan error={errors.confirmPassword?.message} />
      </Form>
    </>
  );
};

export default Register;
