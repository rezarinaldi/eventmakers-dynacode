
import React from 'react'
import { Button, Input } from '@nextui-org/react'

export const Register = () => {
  return (
    <div>
        <Input placeholder="name"/>
        <Input placeholder="email@domain.com"/>
        <Input placeholder="password"/>
        <Button color="primary">Register</Button>
    </div>
  )
}
