import axios from "axios";
const baseURL = "http://localhost:8000";
const api = axios.create({ baseURL });
export const loginin = async (email: string, password: string) => {
  return await api.post("/auth/login", { email, password });
};

export const signup = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const response = await api.post("/auth/signup", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    const err = error as any;
    return { error: err.response.data.message };
  }
};
