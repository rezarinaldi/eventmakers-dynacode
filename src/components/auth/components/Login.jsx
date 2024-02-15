"use client";

import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();

  async function handleSubmitLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("https://eventmakers-api.fly.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // const data = await res.json();
    const { payload, token } = await res.json();
    // save payload to localStorage
    localStorage.setItem("user", JSON.stringify(payload));
    // console.log(data);    
    // // store token to cookies
    Cookies.set("token", token);

    router.push("/dashboard");
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
        <input name="email" />
        <input name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};
