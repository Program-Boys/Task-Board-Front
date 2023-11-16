import { IFormData } from "../pages/Login/login.pages";
import api from "./api";

const Services = () => {
  async function login(data: IFormData) {
    console.log(data);
    const response = api.post("login", data);

    return response;
  }

  //aqui vão os outros serviços

  return {
    login,
  };
};

export { Services };
