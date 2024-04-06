"use client";
import { useState, FormEvent } from "react";
import { request } from "../utils/request";
import useLoading from "../hooks/useLoading";
import { useRouter } from 'next/navigation'

const inputStyle = "w-full h-8 mt-1 py-1 px-2 rounded-lg bg-slate-200 outline-none";
export default function LoginForm() {
  const { LoadingSwitch, load } = useLoading();
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter()
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setError("");
    setForm(prevState => ({ ...prevState, [name]: value }));
  }
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    const loginin = await load(request("/auth/login", "POST", {
      email: email,
      password: password,
    }));
    if (loginin.error) {
      setError(loginin.error);
      return;
    }
    router.push('/todo')
  };
  return (
    <form
      onSubmit={handleLogin}
      className="mt-4 flex flex-col gap-4 justify-center items-center w-4/5 p-2 text-xs text-slate-600 max-w-72"
    >
      <label htmlFor="email" className="w-full">
        Email
        <input
          type="text"
          name="email"
          id="email"
          placeholder="jhon_doe@todolist.com"
          className={inputStyle}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="w-full">
        Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="safe pasword"
          className={inputStyle}
          required
          onChange={handleChange}
        />
      </label>
      {error && <p className="text-red-500 text-xs text-left w-full">{error}</p>}
      <div>
        <LoadingSwitch>
          <input
            type="submit"
            value="Login"
            className="bg-slate-600 p-2 rounded-md cursor-pointer w-full text-slate-200"
          />
        </LoadingSwitch>
      </div>
    </form>
  );
}
