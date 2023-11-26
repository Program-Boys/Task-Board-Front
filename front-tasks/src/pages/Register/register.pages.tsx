import { TextField } from "@mui/material";
import Form from "../../components/Form/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../../validations/form.validations";
import ErrorSpan from "../../components/ErrorSpan/errorSpan";
import { IFormRegisterData } from "../../interfaces/user/interfaces.user";
import { Services } from "../../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const { registerService } = Services();
  const navigate = useNavigate();

  const registerUser = (data: IFormRegisterData) => {
    registerService(data)
      .then((res) => {
        const { data } = res;
        toast.success(data.message, {
          autoClose: 2000,
        });
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) => {
        const { data } = err.response;
        toast.error(data.message, {
          autoClose: 3000,
        });
      });
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
