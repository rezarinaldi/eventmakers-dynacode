"use client"
import React from 'react'
import { useState } from 'react'
import { API_URL } from '@/config/apiUrl' 
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation' 
import Cookies from "js-cookie";


export const useLogin = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleChange(e){
        const { name, value } = e.target;
        setLoginData({...loginData, [name]: value});
    }

   async function handleSubmitLogin(){
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        
        body: JSON.stringify({email, password}),
        });

        const data = await res.json();
        console.log(data)

        Cookies.set("token", data.token);

        if (!data){
           setLoading(false)
            // console.log("error!");
            toast.error("Error Login!")
            return;
          }
          setLoading(false)
        //   console.log(data);
        toast.success("Login Succesfully, redirecting...");
        setTimeout(() => router.push("/dashboard", 2000));

    }

    return { loading, handleChange, handleSubmitLogin }

}
