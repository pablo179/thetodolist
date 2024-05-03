"use client";
import { useState, FormEvent } from "react";
import { validateEmail, validatePassword } from "@/utils/validator";

export default function SignUpForm() {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setError("");
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const isFormValid = (): boolean => {
    const { email, password, username, confirmPassword } = form;
    if (!email || !password || !username || !confirmPassword) {
      setError("Please fill all fields");
      return false;
    }
    if (!validateEmail(email)) {
      setError("Invalid email");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must contain at least 6 characters, one uppercase letter and one number"
      );
      return false;
    }
    return true;
  };
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, username } = form;
    if (!isFormValid()) return;
  };
  return (
    <form
      onSubmit={handleSignUp}
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
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="username"
          id="username"
          placeholder="jhon_doe"
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
      <label htmlFor="confirmPassword">
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="safe pasword"
          required
          onChange={handleChange}
        />
      </label>
      {error && (
        <p className="text-red-500 text-xs text-left w-full">{error}</p>
      )}
      <button
        type="submit"
        value="Sign Up"
        className="submitButton"
      >
        Sign Up
      </button>
    </form>
  );
}
