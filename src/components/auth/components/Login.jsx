"use client"
import React from 'react'
import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import { useLogin } from '../hooks/useLogin'


export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();

  return (
    <main className="space-y-3 p-8 rounded-lg flex flex-col shadow-xl">
    <Input name="email" placeholder="email@domain.com" onChange={handleChange}/>
    <Input name="password" placeholder="passsword" type="password" onChange={handleChange} />
    <Button isDisabled={loading} color="primary" variant="shadow" onClick={handleSubmitLogin}>Login</Button>
    <div className="flex gap-1">
        <div>Don't have an account?</div>
        <Link className="text-blue-600" href="/register">Register</Link>
    </div>
    
</main>
  )
}
