import React from 'react'
import { Button, Input } from '@nextui-org/react'

export const Login = () => {
  return (
    <div>
   
    <Input placeholder="email@domain.com"/>
    <Input placeholder="password"/>
    <Button color="primary">Login</Button>
</div>
  )
}
