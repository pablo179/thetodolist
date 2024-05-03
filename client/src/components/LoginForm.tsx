"use client";
import { useState, FormEvent } from "react";
import LoadingComponent from "./LoadingComponent";
import { validateEmail } from "@/utils/validator";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { login, setError, selectIsFetching } from "@/lib/features/auth/authSlice";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);
  const isLoading = useAppSelector(selectIsFetching);
  
  const handleError = (error: string) => dispatch(setError(error));
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    handleError("");
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const isFormValid = (): boolean => {
    const { email, password } = form;
    if (!email || !password) {
      handleError("Please fill all fields");
      return false;
    }
    if (!validateEmail(email)) {
      handleError("Invalid email");
      return false;
    }
    return true;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    if (!isFormValid()) return;
    dispatch(login({ email, password }));
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mt-4 flex flex-col gap-4 justify-center items-center w-4/5 p-2 text-xs text-slate-600 max-w-72"
    >
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          id="email"
          placeholder="jhon_doe@todolist.com"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="safe pasword"
          required
          onChange={handleChange}
        />
      </label>
      {error && (
        <p className="text-red-500 text-xs text-left w-full">{error}</p>
      )}
      <LoadingComponent isLoading={isLoading} >
        <button className="submitButton">Login</button>
      </LoadingComponent>
    </form>
  );
}
