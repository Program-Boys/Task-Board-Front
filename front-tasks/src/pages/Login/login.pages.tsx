import { TextField } from "@mui/material";
import Form from "../../components/Form/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserSchema } from "../../validations/form.validations";
import ErrorSpan from "../../components/ErrorSpan/errorSpan";
import { Services } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { IFormLoginData } from "../../interfaces/user/interfaces.user";
import { toast } from "react-toastify";

const Login = () => {
  const { loginService } = Services();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginUserSchema),
  });

  const loginUser = (data: IFormLoginData) => {
    loginService(data)
      .then((res) => {
        const { access_token } = res.data;
        window.localStorage.setItem("session", access_token);
        navigate("/tasks");
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
      <Form title="Sign in" onSubmit={handleSubmit(loginUser)}>
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
      </Form>
    </>
  );
};

export default Login;
