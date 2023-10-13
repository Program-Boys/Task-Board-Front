import axios from "axios";
import { messages } from "../utils/messages";

const api = axios.create({
  baseURL: messages.BASE_URL,
});

export default api;
