// import { EventDashboard } from "@/components/EventDashboard";

import React from "react";
import { DashboardHeader } from "@/components/dashboard/components/dashboard";
import { cookies } from "next/headers";

// export default function Dashboard() {
//   return (
//     <div>
//       <EventDashboard />
//     </div>
//   );
// }





async function getUsers() {
  const token = cookies().get("token").value;
  const res = await fetch("https://eventmakers-api.fly.dev/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const usersData = await getUsers();
  // console.log(usersData)

  return (
    <div>
      <DashboardHeader />
    </div>
  );
}