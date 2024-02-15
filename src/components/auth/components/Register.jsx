"use client";

import React from "react";

export const Register = () => {
  async function handleSubmitRegister(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("https://eventmakers-api.fly.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmitRegister}>
        <input name="name" />
        <input name="email" />
        <input name="password" />
        <button>Register</button>
      </form>
    </div>
  );
};
