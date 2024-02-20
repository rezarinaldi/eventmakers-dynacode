// "use client"
// import React from 'react'
// import { Button, Input } from '@nextui-org/react'
// import Link from 'next/link'
// import { useLogin } from '../hooks/useLogin'


// export const Login = () => {
//   const { loading, handleChange, handleSubmitLogin } = useLogin();

//   return (
//     <main className="space-y-3 p-8 rounded-lg flex flex-col shadow-xl">
//     <Input name="email" placeholder="email@domain.com" onChange={handleChange}/>
//     <Input name="password" placeholder="passsword" type="password" onChange={handleChange} />
//     <Button isDisabled={loading} className="text-blue-600" color="primary" variant="shadow" onClick={handleSubmitLogin}>Login</Button>
//     <div className="flex gap-1">
//         <div>Don't have an account?</div>
//         <Link className="text-blue-600" href="/register">Register</Link>
//     </div>
    
// </main>
//   )
// }

"use client";

import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    const { payload, token } = await res.json();
    // save payload to localStorage
    localStorage.setItem("user", JSON.stringify(payload));
    // store token to cookies
    Cookies.set("token", token);

    router.push("/dashboard");
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmitLogin}>
        <input name="email" />
        <input name="password" />
        <button className="text-blue-600">Login</button>
        <div className="flex gap-1">
        <div>Don't have an account?</div>
        <Link className="text-blue-600" href="/register">Register</Link>
    </div>
      </form>
    </div>
  );
};
