import React from 'react'

import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email required";
    if (form.password.length <= 6)
      newErrors.password = "Password must be > 6 chars";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={handleChange} placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}

      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Login</button>
    </form>
  );
}