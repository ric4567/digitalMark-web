import axios from "axios";

export const url = "https://localhost:7197";
export default axios.create({
  baseURL: url,
});