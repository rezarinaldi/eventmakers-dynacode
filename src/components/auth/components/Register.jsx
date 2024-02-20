// "use client"

// import { Button, Input } from '@nextui-org/react'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import { useRegister } from '../hooks/useRegister'

// export const Register = () => {
//   const { loading, handleChange, handleSubmitRegister } = useRegister();



    

//   return (
//     <main className="space-y-3 p-8 rounded-lg flex flex-col shadow-xl">
//         <Input name="name" placeholder="name" onChange={handleChange}/>
//         <Input name="email"placeholder="email@domain.com" onChange={handleChange} />
//         <Input name="password" placeholder="passsword" type="password" onChange={handleChange} />
//         <Button isDisabled={loading} className="text-blue-600" color="primary"variant="shadow" onClick={handleSubmitRegister}>Register</Button>
//         <div className="flex gap-1">
//         <div>Have an account?</div>
//         <Link className="text-blue-600" href="/login">Login</Link>
//     </div>
        
//     </main>
//   )
// }

"use client";

import React from "react";
import Link from "next/link";

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
    <div className="space-y-3">
      <form onSubmit={handleSubmitRegister}>
        <input name="name" />
        <input name="email" />
        <input name="password" />
        <button className="text-blue-600">Register</button>
        <div className="flex gap-2">
        <div>Have an account?</div>
        <Link className="text-blue-600" href="/login">Login</Link>
    </div>
      </form>
    </div>
  );
};
