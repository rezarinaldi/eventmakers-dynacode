"use client"

import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRegister } from '../hooks/useRegister'

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();



    

  return (
    <main className="space-y-3 p-8 rounded-lg flex flex-col shadow-xl">
        <Input name="name" placeholder="name" onChange={handleChange}/>
        <Input name="email"placeholder="email@domain.com" onChange={handleChange} />
        <Input name="password" placeholder="passsword" type="password" onChange={handleChange} />
        <Button isDisabled={loading} color="primary"variant="shadow" onClick={handleSubmitRegister}>Register</Button>
        <div className="flex gap-1">
        <div>Have an account?</div>
        <Link className="text-blue-600" href="/login">Login</Link>
    </div>
        
    </main>
  )
}
