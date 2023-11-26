import {
  IFormLoginData,
  IFormRegisterData,
} from "../interfaces/user/interfaces.user";
import api from "./api";

const Services = () => {
  async function loginService(data: IFormLoginData) {
    console.log(data);
    const response = api.post("login", data);

    return response;
  }

  async function registerService(data: IFormRegisterData) {
    const response = api.post("users", data);

    return response;
  }

  //aqui vão os outros serviços

  return {
    loginService,
    registerService,
  };
};

export { Services };
