"use client";

import React, { useEffect, useState } from "react";
import Avatar from "boring-avatars";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const DashboardHeader = () => {
  const router = useRouter();
  const [user, setUser] = useState(null); // falsey = null / undefined

  function handleLogout() {
    // clear localStorage
    localStorage.removeItem("user");
    // clear cookies
    Cookies.remove("token");
    // redirect
    router.push("/");
  }

  useEffect(() => {
    const userFromLs = localStorage.getItem("user");
    const parsedUserData = JSON.parse(userFromLs);
    setUser(parsedUserData);
  }, []);

  return (
    <header className="flex justify-between p-4">
      <div>Dashboard</div>
      <div className="flex items-center gap-4">
        <div>{user?.name}</div>
        <div>
          <Avatar size={32} name={user?.name} variant="beam" colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]} />
        </div>
        <button onClick={handleLogout} className="bg-black text-white rounded-xl px-3 py-1 text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};
