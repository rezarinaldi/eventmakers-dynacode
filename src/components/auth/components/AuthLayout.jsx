import React from 'react'
import Image from 'next/image'

export const AuthLayout = ({children}) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center">
            <section>
            {children}
            </section>
        </div>
        <div className=" bg-slate-700  flex flex-col w-full h-full justify-center items-center">
          <div className=" relative w-[200px] h-[64px] ">
            <Image src="/icon.png"  height={50} width={50}
                alt="logo" className="object-scale-down"
            />
          </div>
          <div className="text-white text-md px-36 text-center">
            Selamat Datang di DynaVent, Buatlah dan temukan event favoritmu!
          </div>
        </div>
    </main>
  )
}
