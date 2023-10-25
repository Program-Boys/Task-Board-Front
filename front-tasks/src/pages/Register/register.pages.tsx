import { TextField } from "@mui/material";
import Form, { IFormData } from "../../components/Form/form";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm<IFormData>(); // Certifique-se de ter uma instância de useForm

  const registerUser = (data: IFormData) => {
    console.log(data);
    //aqui vai a request para registro
  };

  return (
    <>
      <Form
        title="Register"
        redirect="/login"
        onSubmit={handleSubmit(registerUser)}
      >
        <TextField label="Name" {...register("name")} />
        <TextField label="Email" {...register("email")} />
        <TextField label="Password" {...register("password")} />
        <TextField label="Confirm password" />
      </Form>
    </>
  );
};

export default Register;
